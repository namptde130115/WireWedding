import React, { useState } from 'react'
import styles from './index.module.scss';
import { Layout, Menu } from 'antd';
import clsx from 'clsx';
import { BookOutlined, FileDoneOutlined, TeamOutlined, UngroupOutlined, DollarOutlined } from '@ant-design/icons';

export const PlanningToolsHeader = () => {

    
  return (
      <Layout>
          <Menu className={clsx(styles.menunav)} theme="dark" mode="horizontal">    
            <Menu.Item className={clsx(styles.menuitem)}>
                <a className={clsx(styles.tools_navigation_link)}><span className={clsx(styles.tools_navigation_icon)}>
                <BookOutlined className={clsx(styles.nav_icon)}/></span>My Service List</a>
            </Menu.Item>
            <Menu.Item className={clsx(styles.menuitem)}>
                <a className={clsx(styles.tools_navigation_link)}><span className={clsx(styles.tools_navigation_icon)}>
                <FileDoneOutlined className={clsx(styles.nav_icon)}/></span>Check List</a>
            </Menu.Item>
            <Menu.Item className={clsx(styles.menuitem)}>
                <a className={clsx(styles.tools_navigation_link)}><span className={clsx(styles.tools_navigation_icon)}>
                <TeamOutlined className={clsx(styles.nav_icon)}/></span>Guest List</a>
            </Menu.Item>
            <Menu.Item className={clsx(styles.menuitem)}>
                <a className={clsx(styles.tools_navigation_link)}><span className={clsx(styles.tools_navigation_icon)}>
                <UngroupOutlined className={clsx(styles.nav_icon)}/></span>Seating Chart</a>
            </Menu.Item>
            <Menu.Item className={clsx(styles.menuitem)}>
                <a className={clsx(styles.tools_navigation_link)}><span className={clsx(styles.tools_navigation_icon)}>
                <DollarOutlined className={clsx(styles.nav_icon)}/></span>Budget</a>
            </Menu.Item>
          </Menu>
      </Layout>
  )
}
