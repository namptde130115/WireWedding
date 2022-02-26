import React from 'react';
import { LoginLayout } from '../../layout/login/index';
import styles from './index.module.scss';

export const SignUp = () => {
  return (
    <LoginLayout>
      <div className={styles.signUp__container}>
        <p className={styles.title}>Sign Up</p>
        <div>
          <form action='' className={styles.signUp__form}>
            <input
              type='text'
              className={styles.input}
              placeholder='First and last name'
            />
            <input type='text' className={styles.input} placeholder='Email' />
            <input
              type='text'
              className={styles.input}
              placeholder='Password'
            />
            <input
              type='text'
              className={styles.input}
              placeholder='Wedding city'
            />
            <input
              type='text'
              className={styles.input}
              placeholder='Wedding date'
            />
            <button className={styles.button}>Sign Up</button>
            <p>
              Already have an account? <a href=''>Log in</a>
            </p>
          </form>
        </div>
      </div>
    </LoginLayout>
  );
};
