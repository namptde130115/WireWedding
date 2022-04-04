import React from 'react';
import { LoginLayout } from '../../layout/login/index';
import styles from './index.module.scss';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { signUp } from '../../redux/userSlice';

export const SignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loading = useSelector((state) => state.user.registerLoading);
  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      console.log('aaaaa');
      const actionResult = await dispatch(
        signUp({
          companyName: 'TUART WEDDING ĐÀ NẴNG',
          email: 'info.tuarts@gmail.com',
          representative: 'Song Trang',
          username: 'TuartDNSt',
          phone: '02362616',
          categoryId: 1,
          anotherService: '',
          address: '99A Núi Thành, Hải Châu, Đà Nẵng',
        })
      );
      const response = unwrapResult(actionResult);
      if (response) {
        navigate('/');
        console.log('response', response);
      }
    } catch (error) {}
  };
  return (
    <LoginLayout>
      <div className={styles.signUp__container}>
        <div>{loading}</div>
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
              label='Name'
              name='name'
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
              name='dayWedding'
              rules={[
                { required: true, message: 'Please input your day Wedding!' },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginLayout>
  );
};
