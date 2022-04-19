import React from 'react';
import styles from './index.module.scss';
import imageWedding from '../../assets/images/loginImage.jpg';

export const LoginLayout = ({ children }) => {
  return (
    <div className={styles.login__layout}>
      {/* <h1>logo</h1> */}
      <div className={styles.sign__container}>
        <div className={styles.image}>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Logo%2Flogin-image.png?alt=media&token=effe4b9f-2c85-48c6-9641-a466d2866bc3'
            alt='image'
          />
        </div>
        <div className={styles.form__container}>{children}</div>
      </div>
    </div>
  );
};
