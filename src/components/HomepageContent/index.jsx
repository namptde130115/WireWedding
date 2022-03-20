import { CardInfor } from "../../components/CardInfor/index.jsx";
import { Feedback_Contact } from "../../components/Feedback_Contact/index.jsx";
import clsx from "clsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../assets/images-url/index.js";

export const HomepageContent = ({}) => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.h1)}>
        Let us design your own dreaming day!
      </div>
      <div className={clsx(styles.news_container)}>
        <div className={clsx(styles.news_child)}>
          <img src={imageUrl.news_img1} />
          <img src={imageUrl.news_img2} />
        </div>
        <div className={clsx(styles.news_child)}>
          <div className={clsx(styles.news_text, styles.text_right)}>
            <p className={clsx(styles.title)}>Wedding Works</p>
            <p className={clsx(styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
              quisque non tellus orci ac auctor augue mauris augue.
            </p>
          </div>
          <img src={imageUrl.news_img3} />
        </div>
      </div>
      <div className={clsx(styles.news_container)}>
        <div className={clsx(styles.news_child)}>
          <div className={clsx(styles.news_text, styles.text_left)}>
            <p className={clsx(styles.title)}>Wedding Works</p>
            <p className={clsx(styles.content)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
              quisque non tellus orci ac auctor augue mauris augue.
            </p>
          </div>
          <img src={imageUrl.news_img4} />
        </div>
        <div className={clsx(styles.news_child)}>
          <img src={imageUrl.news_img5} />
          <img src={imageUrl.news_img6} />
        </div>
      </div>

      <div className={clsx(styles.hotServices_container)}>
        <hr />
        <div className={clsx(styles.h2)}>Hot services</div>
        <div className={clsx(styles.hotServices_child)}>
          <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_02.PNG?alt=media&token=6210bb76-9d1f-4377-a14a-915145cf0796"
          />
          <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_02.PNG?alt=media&token=2da2f946-43c1-4689-b5ea-036375b02b26"
          />
          <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
          />
          <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_02.PNG?alt=media&token=6210bb76-9d1f-4377-a14a-915145cf0796"
          />
        </div>
      </div>
      <Feedback_Contact />
    </div>
  );
};
