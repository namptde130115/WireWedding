import { Menu } from 'antd';

//icons
import {
  UserOutlined,
  HeartOutlined,
  FormOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import clsx from 'clsx';
import styles from './index.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';

export const KolLayout = ({ title, children }) => {
  let currentUrl = window.location.pathname.split('/')[2];
  const [current, setCurrent] = useState(currentUrl);
  let navigation = useNavigate();

  const handleClickMenu = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
    navigation(e.key);
  };

  const logout = () => {
    localStorage.clear();
    navigation('/sign-in');
  };
  return (
    <div className={clsx(styles.profile__container)}>
      <div className={clsx(styles.profile__menu__container)}>
        <div className={clsx(styles.profile__header)}>
          <div className={clsx(styles.title)}>
            <p className={clsx(styles.sub1)}>Mangement</p>
          </div>
        </div>
        <div className={clsx(styles.profile__main)}>
          <Menu
            onClick={handleClickMenu}
            style={{ width: 228 }}
            selectedKeys={[current]}
            className={clsx(styles.profile__menu__main)}
          >
            <Menu.Item key='myservive-pack' icon={<UserOutlined />}>
              My Service Pack
            </Menu.Item>
            <Menu.Item key='infor' icon={<HeartOutlined />}>
              Infor
            </Menu.Item>
            <Menu.Item key='blogs' icon={<FormOutlined />}>
              Blogs
            </Menu.Item>
          </Menu>
          <div className={clsx(styles.logout)} onClick={logout}>
            <LogoutOutlined />
            Logout
          </div>
        </div>
      </div>
      <div className={clsx(styles.profile__content)}>
        <div className={clsx(styles.profile__content__header)}>
          <p>{title}</p>
        </div>
        <div className={clsx(styles.profile__content__main)}>{children}</div>
      </div>
    </div>
  );
};
