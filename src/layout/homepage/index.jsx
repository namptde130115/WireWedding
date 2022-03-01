import { Menu, Carousel } from 'antd';
import { useState } from 'react';
import styles from './index.module.scss';
import { MailOutlined } from '@ant-design/icons';
import clsx from 'clsx';

export const HomeLayout = ({ children }) => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e);
  };

  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={clsx(styles.logo)}>logo</div>
        <Menu
          mode='inline'
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          className={clsx(styles.menu__container)}
        >
          <Menu.Item key='planning-tools'>Planning tools</Menu.Item>
          <Menu.Item key='our-services'>Our services</Menu.Item>
          <Menu.Item key='ideas'>Ideas</Menu.Item>
          <Menu.Item key='about-us'>About us</Menu.Item>
        </Menu>
      </div>
      <div className={styles.carousel}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>this is footer</div>
    </div>
  );
};
