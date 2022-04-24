import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Modal } from 'antd';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardInfor } from '../../../components/CardInfor/index.jsx';
import { getAllBogsByPerson } from '../../../redux/vendorSlice.js';
import { HomePageCreateBlog } from '../../homepage/homepage_createBlog/index.jsx';
import { HomePageMyBlogs } from '../../homepage/homepage_myBlogs/index.jsx';
import styles from './index.module.scss';

export const KolBlogs = () => {
  const [isModalEditVisible, setIsModalEditVisible] = useState();
  const allBlogByPerson = useSelector((state) => state.vendor.allBlogByPerson);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBlog = async () => {
      try {
        const actionResult = await dispatch(getAllBogsByPerson());
        const response = unwrapResult(actionResult);
        if (response) {
          console.log('response', response);
        }
      } catch (error) {}
    };
    getAllBlog();
  }, []);

  const handleOpenModal = () => {
    setIsModalEditVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalEditVisible(false);
  };

  const handleCancelModal = () => {
    setIsModalEditVisible(false);
  };
  return (
    <div>
      <div>
        <Button type='primary' onClick={handleOpenModal}>
          Create Blog
        </Button>
        <HomePageMyBlogs data={allBlogByPerson} />
      </div>
      <Modal
        title='Blogs'
        visible={isModalEditVisible}
        onCancel={handleCancelModal}
        maskClosable={false}
        width={1000}
        footer={null}
        // okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
      >
        <div className={clsx(styles.edit_container)}>
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.textinfo)}>
              <HomePageCreateBlog closeModal={handleCloseModal} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
