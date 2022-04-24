import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { Input, Menu, Dropdown, Button, Modal, message, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ServiceBox } from '../../../components/ServiceBox/index.jsx';
import { imageUrl } from '../../../assets/images-url/index.js';
import { ButtonCustom } from '../../../components/ButtonCustom/index.jsx';
import { CardInfor } from '../../../components/CardInfor/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import {
  addServiceIntoPack,
  createPackageCategory,
  getAllPackByKol,
  getAllServiceByPackIdByCatagory,
  getAllServicesByCategory,
  getServicePackById,
  removeServiceFromPack,
} from '../../../redux/kolSlice';
import { getAllPackCatagory } from '../../../redux/kolSlice';
import { CardInforPack } from './CardInfor';
import { PackInfor } from './InforPack';

const categories = [
  {
    id: 1,
    name: 'Studio',
  },
  {
    id: 2,
    name: 'Invitations',
  },
  {
    id: 3,
    name: 'Dress & Attire',
  },
  {
    id: 4,
    name: 'Jewelry',
  },
  {
    id: 5,
    name: 'Transportation',
  },
  {
    id: 6,
    name: 'Makeup',
  },
  {
    id: 7,
    name: 'Musicians & Bands',
  },
  {
    id: 8,
    name: 'Venues',
  },
  {
    id: 9,
    name: 'Cakes',
  },
  {
    id: 10,
    name: 'Lighting & Decor',
  },
  {
    id: 11,
    name: 'Officiants',
  },
  {
    id: 12,
    name: 'Travel Agents',
  },
  {
    id: 13,
    name: 'Event Agents',
  },
];

export const EditServicePack = () => {
  const dataServices = useSelector((state) => state.kol?.kolServices);

  const packServicesByCatagory = useSelector(
    (state) => state.kol?.packServicesByCatagory
  );
  const [titleService, setTitleService] = useState('');
  const [textArea, setTextArea] = useState();
  const [selectValue, setSelectValue] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState();
  const currentServicesByPack = useSelector(
    (state) => state.kol?.currentServicesByPack
  );

  const [isVisible, setIsVisible] = useState();
  const [isDetailVisible, setIsDetailVisible] = useState();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const packId = urlParams.get('idPack');

  const dispatch = useDispatch();

  const handleOpenDetail = async (e, catagoryId) => {
    e.stopPropagation();
    const body = {
      categoryId: catagoryId,
      packId,
    };
    try {
      const actionResult = await dispatch(
        getAllServiceByPackIdByCatagory(body)
      );
      const response = unwrapResult(actionResult);
      if (response) {
        setIsDetailVisible(true);
      }
    } catch (error) {}
  };

  const handleRemoveFromPack = async (categoryId) => {
    const body = {
      packId,
      categoryId: categoryId,
    };
    try {
      const actionResult = await dispatch(removeServiceFromPack(body));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Remove success');
        setIsDetailVisible(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const getServicePackageById = async () => {
      try {
        const actionResult = await dispatch(getServicePackById(packId));
        const response = unwrapResult(actionResult);
        if (response) {
          message.success('Get service package success');
        }
      } catch (error) {}
    };
    getServicePackageById();
  }, []);

  const openModal = async (e, id, name) => {
    e.stopPropagation();
    setIsVisible(true);
    setCurrentCategory(name);

    try {
      const actionResult = await dispatch(getAllServicesByCategory(id));
      const response = unwrapResult(actionResult);
      if (response) {
        setIsLoading(false);
      }
    } catch (error) {}
  };

  const handleCancel = () => {
    setIsVisible(false);
  };
  const handleDetailCancel = () => {
    setIsDetailVisible(false);
  };

  const handleAddIntoPack = async (idService) => {
    const body = {
      idPack: packId,
      idService: idService,
    };
    try {
      const actionResult = await dispatch(addServiceIntoPack(body));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Add service into pack success');
        setIsVisible(false);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleCreateServicePack = async () => {
    // createPackageCategory
    const boby = {
      packTitle: titleService,
      description: textArea,
      packCategoryId: selectValue,
    };
    try {
      const actionResult = await dispatch(createPackageCategory(boby));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Create service pack success');
      }
    } catch (error) {}
  };

  return (
    <div className={clsx(styles.createPack_container)}>
      <PackInfor />
      <div className={clsx(styles.createPack_serviceBox)}>
        {categories.map((category, index) => (
          <div key={index} onClick={(e) => handleOpenDetail(e, category.id)}>
            <ServiceBox
              data={category}
              handleOpenModal={(e) => openModal(e, category.id, category.name)}
            />
          </div>
        ))}
      </div>
      {isVisible && (
        <Modal
          className='add_category_child'
          visible={isVisible}
          onCancel={handleCancel}
          footer={null}
          width={1000}
          title={currentCategory}
          maskClosable={false}
        >
          <div className={clsx(styles.service)}>
            {dataServices &&
              dataServices?.map((service) => (
                <div key={service.id}>
                  <CardInforPack
                    title={service.serviceName}
                    location={service.serviceName}
                    imgUrl={service.photos[0].url}
                    textButton={'+ Add'}
                    handleAdd={() => handleAddIntoPack(service.id)}
                  />
                </div>
              ))}
          </div>
        </Modal>
      )}
      {isDetailVisible && (
        <Modal
          className='view_category_child'
          title='Detail'
          visible={isDetailVisible}
          onCancel={handleDetailCancel}
          footer={null}
          width={700}
        >
          <div className={clsx(styles.category_child)}>
            <div className={clsx(styles.service)}>
              {Array.isArray(packServicesByCatagory) &&
                packServicesByCatagory?.map((service) => (
                  <div key={service.id}>
                    <CardInforPack
                      title={service.serviceName}
                      location={service.serviceName}
                      imgUrl={service.photos[0].url}
                      textButton={'Remove'}
                      handleAdd={() => handleRemoveFromPack(service.id)}
                    />
                  </div>
                ))}
            </div>
          </div>
        </Modal>
      )}
      {}
    </div>
  );
};
