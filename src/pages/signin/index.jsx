import React from 'react';
import styles from './index.module.scss';
import { LoginLayout } from '../../layout/login/index';
import imageWedding from '../../assets/images/loginImage.jpg';

export const SignIn = () => {
  return (
    <LoginLayout>
      <div className={styles.form__title}>
        <p className={styles.title}>Log in to your account</p>
        <p className={styles.title__signIn}>
          Not a member yet? <a href=''>Join now</a>
        </p>
      </div>
      <div className={styles.form}>
        <form action='' className={styles.form__group__container}>
          <div className={styles.form__group}>
            <input
              // name='email'
              autoComplete='off'
              className={styles.input}
              placeholder='Email'
            />
            <input
              // name='password'
              autoComplete='new-password'
              type='password'
              className={styles.input}
              placeholder='Password'
            />
          </div>
          <p className={styles.forgot__pass}>Forgot your password?</p>
          <button className={styles.btn__login}>Login</button>
        </form>
        <div className={styles.vendor__container}>
          <p>Are you a vendor?</p>
          <a href=''>Vendor login</a>
        </div>
      </div>
    </LoginLayout>
  );
};
