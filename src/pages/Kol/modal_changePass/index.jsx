import { message, Modal } from 'antd';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Input, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { vendorCreateSingleService } from '../../../redux/vendorSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const VendorChangePassModal = ({
  isModalEditVisible,
  handleOk,
  handleCancel,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const handle
  //   if (editMode) {
  //     form.setFieldsValue({})
  //   }
  // }, [editMode]);

  const onFinish = async (values) => {
    try {
      console.log('success: ', values);
      const submiBody = {
        ...values,
        photos: [
          {
            url: 'https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Slider_images%2Fslider_01.PNG?alt=media&token=9e33e61a-e1d3-4bc8-a446-835bf609c994',
            caption:
              'Get married in Norway - the land of the fjords, vikings, trolls and the Northern lights!',
          },
        ],
      };
      const actionResult = await dispatch(vendorCreateSingleService(submiBody));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Service added successfully');
        form.resetFields();
        handleOk();
      }
    } catch (error) {
      if (error.photos) {
        message.error('Photos is required');
      }
      console.log(error);
    }
  };

  const handleCancelModal = () => {
    form.resetFields();
    handleCancel();
  };

  return (
    <Modal
      title='Change Password'
      visible={isModalEditVisible}
      onCancel={handleCancelModal}
      maskClosable={false}
      okButtonProps={{ form: 'vendor-changepass-form', htmlType: 'submit' }}
    >
      <div className={clsx(styles.edit_container)}>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.textinfo)}>
            <Form
              form={form}
              id='vendor-changepass-form'
              name='basic'
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 16 }}
              autoComplete='off'
              onFinish={onFinish}
            >
              <Form.Item
                label='Old Password'
                name='oldPassword'
                rules={[
                  { required: true, message: 'Please input service name!' },
                ]}
              >
                <Input.Password className={styles.input__antd} />
              </Form.Item>
              <Form.Item
                label='New Password'
                name='newPassword'
                rules={[
                  { required: true, message: 'Please input service price!' },
                ]}
              >
                <Input.Password className={styles.input__antd} />
              </Form.Item>
              <Form.Item
                label='Confirm Password'
                name='confirmPassword'
                rules={[
                  { required: true, message: 'Please input service price!' },
                ]}
              >
                <Input.Password className={styles.input__antd} />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
