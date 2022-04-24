import React, { useState } from 'react';
import { HomeCustomerLayout } from '../../../layout/homepage_customer/index.jsx';
import clsx from 'clsx';
import styles from './index.module.scss';
import { imageUrl } from '../../../assets/images-url/index.js';
import { CardBlog } from '../../../components/CardBlog/index.jsx';
import { Paging } from '../../../components/Pagination/index.jsx';
import { Menu, Dropdown, message, Space, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { HomePageCreateBlog } from '../homepage_createBlog/index.jsx';
import { deleteBlog, getAllBogsByPerson } from '../../../redux/vendorSlice.js';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const HomePageMyBlogs = ({ data }) => {
  const [currentBlog, setCurrentBlog] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const openEditBlog = (id) => {
    setCurrentBlog(data?.find((item) => item.id === id));
    setIsVisible(true);
  };

  const handleDeleteBlog = async (id) => {
    try {
      const actionResult = await dispatch(deleteBlog(id));
      const response = unwrapResult(actionResult);
      if (response) {
        dispatch(getAllBogsByPerson());
        message.success('Delete blog success');
      }
    } catch (error) {}
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const menu = (id) => (
    <Menu>
      <Menu.Item
        key='1'
        icon={<EditOutlined />}
        onClick={() => openEditBlog(id)}
      >
        Edit
      </Menu.Item>
      <Menu.Item
        key='2'
        icon={<DeleteOutlined />}
        onClick={() => handleDeleteBlog(id)}
      >
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={clsx(styles.blogs__container)}>
      <div className={clsx(styles.blogs_child)}>
        {data?.map((item, index) => (
          <div className={clsx(styles.blogsCard)} key={index}>
            <CardBlog
              imgUrl={imageUrl.studio_01}
              title={item.title}
              content={item.content}
            />
            <div className={clsx(styles.dropdown)}>
              <Dropdown.Button overlay={menu(item.id)}></Dropdown.Button>
            </div>
          </div>
        ))}
      </div>
      {isVisible && (
        <Modal
          title='Blogs'
          visible={isVisible}
          maskClosable={false}
          width={1000}
          footer={null}
          onCancel={() => setIsVisible(false)}
        >
          <div className={clsx(styles.edit_container)}>
            <div className={clsx(styles.info)}>
              <div className={clsx(styles.textinfo)}>
                <HomePageCreateBlog
                  currentBlog={currentBlog}
                  closeModal={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
