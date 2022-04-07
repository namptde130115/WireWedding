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

export const AdminLayout = ({ title, children }) => {
  let currentUrl = window.location.pathname.split('/')[2];
  const [current, setCurrent] = useState(currentUrl);
  let navigation = useNavigate();

  const handleClickMenu = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
    navigation(e.key);
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
            // defaultSelectedKeys={['infor']}
            // defaultOpenKeys={['infor']}
            selectedKeys={[current]}
            className={clsx(styles.profile__menu__main)}
          >
            <Menu.Item key='vendor' icon={<UserOutlined />}>
              Vendor
            </Menu.Item>
            <Menu.Item key='kol' icon={<HeartOutlined />}>
              Kol
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
