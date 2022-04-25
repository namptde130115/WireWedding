import React from 'react';
import { LoginLayout } from '../../layout/login/index';
import styles from './index.module.scss';
import { Form, Input, Button, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { signUp, signUpCustomer } from '../../redux/userSlice';
import moment from 'moment';

export const SignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loading = useSelector((state) => state.user.registerLoading);
  const onFinish = async (values) => {
    console.log(moment(values.weddingDate).format('YYYY-MM-DD'));
    try {
      const actionResult = await dispatch(
        signUpCustomer({
          ...values,
          weddingDate: moment(values.weddingDate).format('YYYY/MM/DD'),
        })
      );
      const response = unwrapResult(actionResult);
      if (response) {
        navigate('/sign-in');
      }
    } catch (error) {}
  };

 
  return (
    <LoginLayout>
      <div className={styles.signUp__container}>
        <p className={styles.title}>Sign Up</p>
        <div>
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.Item
              label='FullName'
              name='fullName'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password className={styles.input__antd} />
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
            <Form.Item
              label='Day Wedding'
              name='weddingDate'
              rules={[
                { required: true, message: 'Please input your day Wedding!' },
              ]}
            >
              <DatePicker
                format={'YYYY/MM/DD'}
                style={{ width: 240, height: 40 }}
                placeholder={null}
              />
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
