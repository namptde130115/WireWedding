import React from 'react';
import styles from './index.module.scss';
import { LoginLayout } from '../../layout/login/index';
import imageWedding from '../../assets/images/loginImage.jpg';
import { Form, Input, Button } from 'antd';
import { signIn } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export const SignInVendor = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      const actionResult = await dispatch(signIn(values));
      const response = unwrapResult(actionResult);
      if (response) {
        navigate('/vendor/service');
        console.log('response', response);
      }
    } catch (error) {}
  };

  return (
    <LoginLayout>
      <div className={styles.form__title}>
        <p className={styles.title}>Log in to your account</p>
        <p className={styles.title__signIn}>
          Not a member yet? <a href=''>Join now</a>
        </p>
      </div>
      <div className={styles.form}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className={styles.input__antd} />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className={styles.input__antd} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.vendor__container}>
          <p>Are you a vendor?</p>
          <a href=''>Vendor login</a>
        </div>
      </div>
    </LoginLayout>
  );
};
