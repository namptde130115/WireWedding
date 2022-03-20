import React, { useState } from 'react'
import styles from './index.module.scss';
import { Layout, Image } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

export const Footer = () => {
  const { Footer } = Layout;

  return (
    <Layout className={styles.container}>
      <Footer className={styles.footer}>
          <div className={styles.container_inner}>
            <div className={styles.footer_column}>
                <a className={styles.inner_content} href="">
                  <Image width={100}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    loading="lazy"
                    /> 
                </a>
            </div>
            <nav className={styles.nav_footer}>
              <ul className={styles.footer_menu}>
                <li className={styles.header_menu}><a href="">Planning Tools</a>
                  <ul className={styles.sub_menu}>
                    <li><a href="">My Service List</a></li>
                    <li><a href="">Check List</a></li>
                    <li><a href="">Guest List</a></li>
                    <li><a href="">Seating Chart</a></li>
                    <li><a href="">Budget</a></li>
                  </ul>
                </li>
                <li className={styles.header_menu}><a href="">Our Services</a>
                  <ul className={styles.sub_menu}>
                    <li><a href="">Single Service</a></li>
                    <li><a href="">Service Pack</a></li>
                  </ul>
                </li>
                <li className={styles.header_menu}><a href="">Ideas</a></li>
                <li className={styles.header_menu}><a href="">About Us</a></li>
              </ul>
            </nav>

            <div className={styles.footer_column}>
              <a href="">
                + 84 967 884 766
              </a>
              <a href="">
                info@gotoubun.com
              </a>
              <p>
                FPT Univesity Da Nang Campus
              </p>
              <div>
                <a  href="https://www.facebook.com/theplannersvn"><FacebookOutlined className={styles.fb_icon}/></a>
                <a href="https://www.instagram.com/theplannersvn"><InstagramOutlined className={styles.insta_icon}/></a>
              </div>
              <p>Created by Gotoubun Team ©2022</p>
            </div>
          </div>
      </Footer>
    </Layout>
  )
}