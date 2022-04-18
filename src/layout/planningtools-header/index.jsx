import React, { useState } from 'react';
import styles from './index.module.scss';
import { Menu } from 'antd';
import clsx from 'clsx';
import {
  BookOutlined,
  FileDoneOutlined,
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const PlanningToolsHeader = () => {
  let navigation = useNavigate();
  let currentUrl = window.location.pathname.split('/')[2];
  const [current, setCurrent] = useState(currentUrl);
  const handleClickMenu = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
    navigation(e.key);
  };
  return (
    <Menu
      selectedKeys={[current]}
      onClick={handleClickMenu}
      className={clsx(styles.menunav)}
      mode='horizontal'
    >
      <Menu.Item className={clsx(styles.menuitem)} key='my-servicelist'>
        <a className={clsx(styles.tools_navigation_link)}>
          <span className={clsx(styles.tools_navigation_icon)}>
            <BookOutlined className={clsx(styles.nav_icon)} />
          </span>
          My Service List
        </a>
      </Menu.Item>
      <Menu.Item className={clsx(styles.menuitem)} key='checklist'>
        <a className={clsx(styles.tools_navigation_link)}>
          <span className={clsx(styles.tools_navigation_icon)}>
            <FileDoneOutlined className={clsx(styles.nav_icon)} />
          </span>
          Check List
        </a>
      </Menu.Item>
      <Menu.Item className={clsx(styles.menuitem)} key='guest-list'>
        <a className={clsx(styles.tools_navigation_link)}>
          <span className={clsx(styles.tools_navigation_icon)}>
            <TeamOutlined className={clsx(styles.nav_icon)} />
          </span>
          Guest List
        </a>
      </Menu.Item>
      <Menu.Item className={clsx(styles.menuitem)} key='budget'>
        <a className={clsx(styles.tools_navigation_link)}>
          <span className={clsx(styles.tools_navigation_icon)}>
            <DollarOutlined className={clsx(styles.nav_icon)} />
          </span>
          Budget
        </a>
      </Menu.Item>
    </Menu>
  );
};
