import React, { useState } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { Layout, Image } from "antd";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

export const Footer = () => {
  const { Footer } = Layout;

  return (
    <Layout className={clsx(styles.container)}>
      <Footer className={clsx(styles.footer)}>
        <div className={clsx(styles.container_inner)}>
          <div className={clsx(styles.footer_column)}>
            <a className={clsx(styles.inner_content)} href="">
              <img src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Logo%2Fgotoubun-original.png?alt=media&token=289b2a8c-979b-4967-a5a6-f429345ac8b5" />
            </a>
          </div>
          <nav className={clsx(styles.nav_footer)}>
            <ul className={clsx(styles.footer_menu)}>
              <li className={clsx(styles.header_menu)}>
                <a href="">Planning Tools</a>
                <ul className={clsx(styles.sub_menu)}>
                  <li>
                    <a href="">My Service List</a>
                  </li>
                  <li>
                    <a href="">Check List</a>
                  </li>
                  <li>
                    <a href="">Guest List</a>
                  </li>
                  <li>
                    <a href="">Budget</a>
                  </li>
                </ul>
              </li>
              <li className={clsx(styles.header_menu)}>
                <a href="">Our Services</a>
                <ul className={clsx(styles.sub_menu)}>
                  <li>
                    <a href="">Single Service</a>
                  </li>
                  <li>
                    <a href="">Service Pack</a>
                  </li>
                </ul>
              </li>
              <li className={clsx(styles.header_menu)}>
                <a href="">Ideas</a>
              </li>
              <li className={clsx(styles.header_menu)}>
                <a href="">About Us</a>
              </li>
            </ul>
          </nav>

          <div className={clsx(styles.footer_column)}>
            <a href="">+ 84 967 884 766</a>
            <a href="">info@gotoubun.com</a>
            <p>FPT Univesity Da Nang Campus</p>
            <div>
              <a href="">
                <FacebookOutlined className={clsx(styles.fb_icon)} />
              </a>
              <a href="">
                <InstagramOutlined className={clsx(styles.insta_icon)} />
              </a>
            </div>
            <p>Created by Gotoubun Team ©2022</p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};
