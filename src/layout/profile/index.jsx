import { Menu } from 'antd';

//icons
import {
  BellOutlined,
  UserOutlined,
  HeartOutlined,
  PayCircleOutlined,
} from '@ant-design/icons';

import clsx from 'clsx';
import styles from './index.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfileLayout = ({ title, children }) => {
  let currentUrl = window.location.pathname.split('/')[2];
  const [current, setCurrent] = useState(currentUrl);
  let navigation = useNavigate();

  const handleClickMenu = (e) => {
    setCurrent(e.key);
    navigation(e.key);
  };
  return (
    <div className={clsx(styles.profile__container)}>
      <div className={clsx(styles.profile__menu__container)}>
        <div className={clsx(styles.profile__header)}>
          <div className={clsx(styles.title)}>
            <p className={clsx(styles.sub1)}>User Profile</p>
          </div>
        </div>
        <div className={clsx(styles.profile__main)}>
          <Menu
            onClick={handleClickMenu}
            style={{ width: 228 }}
            // defaultSelectedKeys={['infor']}
            // defaultOpenKeys={['infor']}
            selectedKeys={[current]}
            className={clsx(styles.profile__menu__main)}
          >
            <Menu.Item key='infor' icon={<UserOutlined />}>
              My info
            </Menu.Item>
            <Menu.Item key='favorites' icon={<HeartOutlined />}>
              Favorites
            </Menu.Item>
            <Menu.Item key='notification' icon={<BellOutlined />}>
              Notification
            </Menu.Item>
            <Menu.Item key='payment' icon={<PayCircleOutlined />}>
              Payment history
            </Menu.Item>
          </Menu>
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
