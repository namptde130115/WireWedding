import { Menu, Carousel, Button } from 'antd';
import { useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { imageUrl } from '../../assets/images-url/index';
//route
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;

export const HomeLayout = ({ children }) => {
  const [current, setCurrent] = useState();
  let navigation = useNavigate();

  const handleClick = (e) => {
    setCurrent(e.key);
    navigation(e.key);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={clsx(styles.logo)}>logo</div>
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
      <div className={styles.carousel}>
        <Carousel autoplay dots={false}>
          <div>
            <img width='100%' height='60%' src={imageUrl.slider_img1} />
          </div>
          <div>
            <img width='100%' height='60%' src={imageUrl.slider_img2} />
          </div>
          <div>
            <img width='100%' height='60%' src={imageUrl.slider_img3} />
          </div>
          <div>
            <img width='100%' height='60%' src={imageUrl.slider_img4} />
          </div>
          <div>
            <img width='100%' height='60%' src={imageUrl.slider_img5} />
          </div>
        </Carousel>
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        this is footer\
        <Button type='primary'>Primary</Button>
      </div>
    </div>
  );
};
