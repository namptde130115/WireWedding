import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { Input, Menu, Dropdown, Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ServiceBox } from '../../../components/ServiceBox/index.jsx';
import { imageUrl } from '../../../assets/images-url/index.js';
import { ButtonCustom } from '../../../components/ButtonCustom/index.jsx';
import { CardInfor } from '../../../components/CardInfor/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getAllServicesByCategory } from '../../../redux/kolSlice';

const { TextArea } = Input;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        Winter
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        Beach
      </a>
    </Menu.Item>
  </Menu>
);
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

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
  const [isVisible, setIsVisible] = useState();
  const [isDetailVisible, setIsDetailVisible] = useState();
  const openModal = (e, id) => {
    e.stopPropagation();
    setIsVisible(true);
    console.log(id);
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

  //  useSelector
  const dataServices = useSelector((state) => state.kol.services);
  const [currentCategory, setCurrentCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    const getAll = async () => {
      const body = {
        // id: dataServices.id,
      };
      console.log(body);
      try {
        const actionResult = await dispatch(getAllServicesByCategory(body));
        const response = unwrapResult(actionResult);
        if (response) {
          setIsLoading(false);
        }
      } catch (error) {}
    };
    getAll();
  }, []);

  return (
    <div className={clsx(styles.createPack_container)}>
      <div className={clsx(styles.createPack_details)}>
        <div className={clsx(styles.pack_name)}>
          <Input placeholder='Service pack name' bordered={false} />
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
          <Dropdown overlay={menu} placement='bottomLeft' arrow>
            <Button className={clsx(styles.dropdownTheme)}>
              Spring
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className={clsx(styles.button_container)}>
          <ButtonCustom type='primary' text='Save' />
          <ButtonCustom type='ghost' text='Cancel' />
        </div>
      </div>

      <div className={clsx(styles.createPack_serviceBox)}>
        {categories.map((category, index) => (
          <div onClick={handleOpenDetail} key={index}>
            <ServiceBox
              data={category}
              handleOpenModal={(e) => openModal(e, category.id)}
            />
          </div>
        ))}
      </div>
      {/* <Modal
        className='add_category_child'
        visible={isVisible}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <div className={clsx(styles.service)}>
          {dataServices?.map((service) => (
            <CardInfor
              title={service.serviceName}
              location={service.description}
              imgUrl={imageUrl.news_img1}
            />
          ))}
        </div>
      </Modal> */}

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
