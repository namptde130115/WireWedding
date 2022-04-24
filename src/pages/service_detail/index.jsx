// import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';
import { Feedback } from '../../components/Feedback/index.jsx';
import { Button, Rate } from 'antd';
import styles from './index.module.scss';
import { Footer } from '../../layout/footer/index.jsx';
import { Header } from '../../layout/header/index.jsx';

export const ServiceDetail = () => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.imageinfo}>
            <img
              className={styles.image}
              src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3'
            />
          </div>
          <div className={styles.textinfo}>
            <div className={styles.title}>ABC</div>
            <div>
              <img
                className={styles.icons_location}
                src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af'
              />
              Da Nang
            </div>
            <div>120.000 VND</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque pretium dui vel gravida. Vestibulum viverra porta
              magna, ut pellentesque augue interdum nec. Integer suscipit purus
              ac porttitor gravida. Proin id urna nibh. Integer in maximus
              magna. Nam pulvinar magna et lectus sagittis, et dapibus dolor
              laoreet.
            </div>
          </div>
          <div className={styles.rateinfo}>
            <Rate disabled defaultValue={4} />
            <Button type='primary'>Add</Button>
          </div>
        </div>
        <div className={styles.feature}>
          <img
            className={styles.thumbnail}
            src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3'
          />
          <img
            className={styles.thumbnail}
            src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3'
          />
          <img
            className={styles.thumbnail}
            src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3'
          />
        </div>
        {/* <div className={styles.feedback}>
          <Feedback></Feedback>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
