import { Menu, Carousel, Statistic } from 'antd';
import { useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { imageUrl } from '../../assets/images-url/index';
import { Countdown } from '../../components/Countdown/index.jsx';
import { useNavigate } from 'react-router-dom';

export const HomeCustomerLayout = ({ children }) => {
  const [current, setCurrent] = useState();
  let navigation = useNavigate();

  const handleClick = (e) => {
    setCurrent(e.key);
    navigation(`/${e.key}`);
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
          <Menu.Item key='our-services'>Our services</Menu.Item>
          <Menu.Item key='ideas'>Ideas</Menu.Item>
          <Menu.Item key='about-us'>About us</Menu.Item>
        </Menu>
      </div>
      <div className={styles.carousel_container}>
        <div className={styles.countdown}>
          <Countdown />
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
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>this is footer</div>
    </div>
  );
};
