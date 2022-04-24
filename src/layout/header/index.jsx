import React, { useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { Dropdown, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';

const { SubMenu } = Menu;
export const Header = () => {
  const userName = localStorage.getItem('userName');
  const [current, setCurrent] = useState();
  let navigation = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigation('/');
  };

  const menuInfor = (
    <Menu>
      <Menu.Item key='1'>My Profile</Menu.Item>
      <Menu.Item key='2'>Payment History</Menu.Item>
      <Menu.Item key='3' onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  const handleClick = (e) => {
    setCurrent(e.key);
    navigation(`/${e.key}`);
  };

  const navigateSignin = () => {
    navigation('/sign-in');
  };

  const navigateSignup = () => {
    navigation('/sign-up');
  };

  const onLogoClick = () => navigation('/');
  return (
    <div className={clsx(styles.header)}>
      <div className={clsx(styles.logo)} onClick={onLogoClick}>
        <img
          width='100%'
          height='100%'
          src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Logo%2Fgotoubun-original.png?alt=media&token=289b2a8c-979b-4967-a5a6-f429345ac8b5'
        />
      </div>
      <div className={clsx(styles.navMenu)}>
        <Menu
          // mode="inline"
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          className={clsx(styles.menu__container)}
        >
          <Menu.Item key='planning-tools'>Planning tools</Menu.Item>
          <SubMenu key='our-services' title='Our services'>
            <Menu.Item key='services'>Services</Menu.Item>
            <Menu.Item key='services-packs'>Services Packs</Menu.Item>
          </SubMenu>
          <Menu.Item key='ideas'>Ideas</Menu.Item>
          <Menu.Item key='about-us'>About us</Menu.Item>
        </Menu>
      </div>
      {userName ? (
        <div>
          <Dropdown overlay={menuInfor}>
            <h3 className={clsx(styles.name__customer)}>
              {userName.split('@')[0]}
            </h3>
          </Dropdown>
        </div>
      ) : (
        <div className={clsx(styles.login)}>
          <div className={clsx(styles.vendor_kol)}>
            <p>
              Are you a <Link to='/vendor-signup'>Vendor</Link> or{' '}
              <Link to='/kol-signup'>KOL</Link>?
            </p>
          </div>

          <div className={clsx(styles.button_container)}>
            <ButtonCustom type='link' text='Login' onClick={navigateSignin} />
            <ButtonCustom
              type='link'
              text='Join now'
              onClick={navigateSignup}
            />
          </div>
        </div>
      )}
    </div>
  );
};
