import { message, Modal } from 'antd';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Input, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { vendorCreateSingleService } from '../../../redux/vendorSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { updatePassword } from '../../../redux/kolSlice';

export const VendorChangePassModal = ({
  isModalEditVisible,
  handleOk,
  handleCancel,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const actionResult = await dispatch(
        updatePassword({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        })
      );
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Service added successfully');
        form.resetFields();
        handleOk();
      }
    } catch (error) {
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
