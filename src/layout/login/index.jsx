import React from 'react';
import styles from './index.module.scss';
import imageWedding from '../../assets/images/loginImage.jpg';

export const LoginLayout = ({ children }) => {
  return (
    <div className={styles.login__layout}>
      <h1>logo</h1>
      <div className={styles.sign__container}>
        <div className={styles.image}>
          {/* <img
            src={imageWedding}
            alt='wedding image'
            className={styles.image}
          /> */}
        </div>
        <div className={styles.form__container}>{children}</div>
      </div>
    </div>
  );
};
