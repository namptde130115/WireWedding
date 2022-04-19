import React from 'react';
import { LoginLayout } from '../../layout/login/index';
import styles from './index.module.scss';
import { Form, Input, Button, Select, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { vendorSignUp } from '../../redux/vendorSlice';

const { Option } = Select;
export const VendorSignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loading = useSelector((state) => state.user.registerLoading);
  const onFinish = async (values) => {
    console.log(values.categoryId.value);
    const dataSubmit = {
      ...values,
      categoryId: parseInt(values.categoryId),
    };
    console.log('Success:', dataSubmit);
    try {
      const actionResult = await dispatch(vendorSignUp(dataSubmit));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('register success');
        console.log('response', response);
      }
    } catch (error) {
      console.log('error', error);
      message.error(error.username);
    }
  };

  return (
    <LoginLayout>
      <div className={styles.signUp__container}>
        <p className={styles.title}>Sign Up For Vendor</p>
        <div>
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete='off'
            initialValues={{
              categoryId: '1',
            }}
          >
            <Form.Item
              label='Company Name'
              name='companyName'
              rules={[
                { required: true, message: 'Please input your company name!' },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label='Representative'
              name='representative'
              rules={[
                {
                  required: true,
                  message: 'Please input your representative!',
                },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label='User Name'
              name='username'
              rules={[
                { required: true, message: 'Please input your user name!' },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label='Phone'
              name='phone'
              rules={[
                { required: true, message: 'Please input your address!' },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label='Address'
              name='address'
              rules={[
                { required: true, message: 'Please input your address!' },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item label='Category' name='categoryId'>
              <Select style={{ width: 120 }}>
                <Option value='1'>Studio</Option>
                <Option value='2'>Invitations</Option>
                <Option value='3'>{`Dress & Attire`}</Option>
                <Option value='4'>Jewelry</Option>
                <Option value='5'>Transportation</Option>
                <Option value='6'>Makeup</Option>
                <Option value='7'>{`Musicians & Bands`}</Option>
                <Option value='8'>Venues</Option>
                <Option value='9'>Cakes</Option>
                <Option value='10'>{`Lighting & Decor`}</Option>
                <Option value='11'>Officiants</Option>
                <Option value='12'>Travel Agents</Option>
                <Option value='13'>Event Agents</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginLayout>
  );
};
