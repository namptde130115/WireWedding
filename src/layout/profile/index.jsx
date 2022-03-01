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

export const ProfileLayout = ({ title, children }) => {
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
            style={{ width: 228 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            className={clsx(styles.profile__menu__main)}
          >
            <Menu.Item key='1' icon={<UserOutlined />}>
              My info
            </Menu.Item>
            <Menu.Item key='2' icon={<HeartOutlined />}>
              Favorites
            </Menu.Item>
            <Menu.Item key='3' icon={<BellOutlined />}>
              Notification
            </Menu.Item>
            <Menu.Item key='4' icon={<PayCircleOutlined />}>
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
