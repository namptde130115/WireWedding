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
  getAllServicesByCategory,
} from '../../../redux/kolSlice';
import { getAllPackCatagory } from '../../../redux/kolSlice';
import { CardInforPack } from './CardInfor';

const { TextArea } = Input;

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

export const CreateServicePack = () => {
  const dataServices = useSelector((state) => state.kol?.kolServices);
  const packageCategory = useSelector((state) => state.kol?.packageCategory);
  const [titleService, setTitleService] = useState('');
  const [textArea, setTextArea] = useState();
  const [selectValue, setSelectValue] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState();
  const currentServicesByPack = useSelector(
    (state) => state.kol?.currentServicesByPack
  );

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState();
  const [isDetailVisible, setIsDetailVisible] = useState();

  const onChange = (e) => {
    setTextArea(e.target.value);
  };

  const onSelectThemeChange = (value) => {
    setSelectValue(value);
  };

  useEffect(() => {
    const getPackCategory = async () => {
      try {
        const actionResult = await dispatch(getAllPackCatagory());
        const response = unwrapResult(actionResult);
        if (response) {
        }
      } catch (error) {}
    };
    getPackCategory();
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
  const handleOpenDetail = () => {
    setIsDetailVisible(true);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };
  const handleDetailCancel = () => {
    setIsDetailVisible(false);
  };

  const onTitleChange = (e) => {
    setTitleService(e.target.value);
  };

  const handleAddIntoPack = async (idService) => {
    const body = {
      idPack: 10011,
      idService: idService,
    };
    try {
      const actionResult = await dispatch(addServiceIntoPack(body));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Add service into pack success');
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
      <div className={clsx(styles.createPack_details)}>
        <div className={clsx(styles.pack_name)}>
          <Input
            placeholder='Service pack name'
            bordered={false}
            value={titleService}
            onChange={onTitleChange}
          />
        </div>
        <div className={clsx(styles.pack_amount)}>
          <p className={clsx(styles.title)}>Total price: </p>
          <p className={clsx(styles.amount)}>1000000</p>
        </div>
        <div className={clsx(styles.pack_description)}>
          <p className={clsx(styles.title)}>Description</p>
          <div className={clsx(styles.input_description)}>
            <TextArea
              placeholder='Description here'
              onChange={onChange}
              autoSize
            />
          </div>
        </div>
        <div className={clsx(styles.pack_theme)}>
          <p className={clsx(styles.title)}>Choose theme</p>
          <Select
            onChange={onSelectThemeChange}
            placeholder='theme'
            style={{ width: '65%' }}
            allowClear
          >
            {packageCategory &&
              packageCategory.length > 0 &&
              packageCategory.map((category) => (
                <Select.Option value={category.id} key={category.id}>
                  {category.name}
                </Select.Option>
              ))}
          </Select>
        </div>
        <div className={clsx(styles.button_container)}>
          <ButtonCustom
            type='primary'
            text='Save'
            onClick={handleCreateServicePack}
          />
          <ButtonCustom type='ghost' text='Cancel' />
        </div>
      </div>

      <div className={clsx(styles.createPack_serviceBox)}>
        {categories.map((category, index) => (
          <div onClick={handleOpenDetail} key={index}>
            <ServiceBox
              data={category}
              handleOpenModal={(e) => openModal(e, category.id, category.name)}
            />
          </div>
        ))}
      </div>
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
                  textButton='+ Add'
                  handleAdd={() => handleAddIntoPack(service.id)}
                />
              </div>
            ))}
        </div>
      </Modal>
      <Modal
        className='view_category_child'
        title='Detail'
        visible={isDetailVisible}
        onCancel={handleDetailCancel}
        footer={null}
        width={700}
      >
        <div className={clsx(styles.category_child)}></div>
      </Modal>
    </div>
  );
};
