import React, { useState } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";

const { SubMenu } = Menu;
export const Header = () => {
  const [current, setCurrent] = useState();
  let navigation = useNavigate();
  const handleClick = (e) => {
    setCurrent(e.key);
    navigation(`/${e.key}`);
  };
  const onLogoClick = () => navigation("/");
  return (
    // <Layout className={styles.container}>
    <div className={clsx(styles.header)}>
      <div className={clsx(styles.logo)} onClick={onLogoClick}>
        <img
          width="100%"
          height="100%"
          src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Logo%2Fgotoubun-original.png?alt=media&token=289b2a8c-979b-4967-a5a6-f429345ac8b5"
        />
      </div>
      <div className={clsx(styles.navMenu)}>
        <Menu
          // mode="inline"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className={clsx(styles.menu__container)}
        >
          <Menu.Item key="planning-tools">Planning tools</Menu.Item>
          <SubMenu key="our-services" title="Our services">
            <Menu.Item key="services">Services</Menu.Item>
            <Menu.Item key="services-packs">Services Packs</Menu.Item>
          </SubMenu>
          <Menu.Item key="ideas">Ideas</Menu.Item>
          <Menu.Item key="about-us">About us</Menu.Item>
        </Menu>
      </div>
      <div className={clsx(styles.login)}>
        <div className={clsx(styles.vendor_kol)}>
          <p>
            Are you a <a href="">Vendor</a> or <a href="">KOL</a>?
          </p>
        </div>

        <div className={clsx(styles.button_container)}>
          <ButtonCustom
            type="link"
            text="Login"
            // onClick={handlePlanningTools}
          />
          <ButtonCustom
            type="link"
            text="Join now"
            // onClick={handlePlanningTools}
          />
        </div>
      </div>
    </div>
    // </Layout>
  );
};
