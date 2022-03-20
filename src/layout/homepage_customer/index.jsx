import { Menu, Carousel, Statistic } from 'antd';
import styles from './index.module.scss';
import clsx from 'clsx';
import { imageUrl } from '../../assets/images-url/index';
import { Countdown } from '../../components/Countdown/index.jsx';
import { CommonLayout } from '../common';

const SubMenu = { Menu };

export const HomeCustomerLayout = ({ children }) => {
  return (
    <CommonLayout>
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
    </CommonLayout>
  );
};
