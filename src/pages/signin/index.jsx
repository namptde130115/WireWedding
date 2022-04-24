import React, { useState } from 'react';
import styles from './index.module.scss';
import './btn.css'
import { LoginLayout } from '../../layout/login/index';
import imageWedding from '../../assets/images/loginImage.jpg';
import { Form, Input, Button } from 'antd';
import { faceBookSignIn, signIn, signUp, googleSignIn } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}
export const SignIn = () => {
  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      const actionResult = await dispatch(signIn(values));
      const response = unwrapResult(actionResult);
      if (response.role === 1) {
        navigate('/admin/vendor');
        console.log('response', response);
      } else if (response.role === 2) {
        navigate('/vendor');
        console.log('response', response);
      } else if (response.role === 4) {
        navigate('/kol');
      } else {
        navigate('/');
        console.log('response', response);
      }
    } catch (error) {}
  };

  //Google response
  const responseGoogle = async (values) => {
    console.log('Success', values);
    try {
      const {profileObj} = values;
      const actionResult = await dispatch(googleSignIn(values))
      const response = unwrapResult(actionResult);

      navigate('/home-customer');
    } catch (err) {
        err.response.data.msg && 
        setUser({...user, err: err.response.data.msg, success: ''})
    }
}

//Facebook response
  const responseFacebook = async (values) => {
    try {
        const {accessToken, userID}  = values
        console.log('response', values);
        const actionResult = await dispatch(faceBookSignIn({accessToken, userID}))
        const response = unwrapResult(actionResult);

        navigate('/home-customer');
        
    } catch (err) {
      console.log('Error', err);
      setUser({...user, err: err.response.data.msg, success: ''})
    }
}

  const navigateForgotPassword = () => {
      navigate('/forgot-password');
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
            <Button type='primary' htmlType='submit'> Login</Button>
            <ButtonCustom type='link' text='Forgot password' onClick={navigateForgotPassword} />
          </Form.Item>
        </Form>
        {/* <div className={styles.vendor__container}>
          <p>Are you a vendor?</p>
          <a href=''>Vendor login</a>
        </div> */}

        <div className={styles.social_login}>
        <p className={styles.title_option_login}>Or login with</p>
        <GoogleLogin
          className={styles.btnGoogle}
          clientId="586465243855-rlkdu0bvbes0kbq1tgq7ive56cgjvdvt.apps.googleusercontent.com"
          buttonText="Login with google"
          onSuccess={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />,
        <FacebookLogin
          appId="523649525823680"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook} 
          cssClass="btnFacebook"
          icon="fa-facebook"
        />
        </div>
      </div>
    </LoginLayout>
  );
};
