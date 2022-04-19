import { Button, Modal } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';
import { CardInfor } from '../../../components/CardInfor/index.jsx';
import { HomePageCreateBlog } from '../../homepage/homepage_createBlog/index.jsx';
import { HomePageMyBlogs } from '../../homepage/homepage_myBlogs/index.jsx';
import styles from './index.module.scss';

export const VendorBlogs = () => {
  const [isModalEditVisible, setIsModalEditVisible] = useState();
  const handleOpenModal = () => {
    console.log('cancel');
    setIsModalEditVisible(true);
  };

  const handleCancelModal = () => {
    console.log('cancel');
    setIsModalEditVisible(false);
  };
  return (
    <div>
      <div>
        <Button type='primary' onClick={handleOpenModal}>
          Create Blog
        </Button>
        <HomePageMyBlogs />
      </div>
      <Modal
        title='Blogs'
        visible={isModalEditVisible}
        onCancel={handleCancelModal}
        maskClosable={false}
        width={1000}
        // okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
      >
        <div className={clsx(styles.edit_container)}>
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.textinfo)}>
              <HomePageCreateBlog />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
