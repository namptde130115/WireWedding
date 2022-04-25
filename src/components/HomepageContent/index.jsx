import { CardInfor } from "../../components/CardInfor/index.jsx";
import { Feedback_Contact } from "../../components/Feedback_Contact/index.jsx";
import clsx from "clsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../assets/images-url/index.js";
import { useNavigate } from "react-router-dom";

export const HomepageContent = ({}) => {
  const navigate = useNavigate();
  const handleSeeAll = () => navigate("/services");
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
              We are proud to deliver our services to many couples. Let's take a
              look at the beautiful set-up and unforgettable moments that we
              have created for them.
            </p>
          </div>
          <img src={imageUrl.news_img3} />
        </div>
      </div>
      <div className={clsx(styles.news_container)}>
        <div className={clsx(styles.news_child)}>
          <div className={clsx(styles.news_text, styles.text_left)}>
            <p className={clsx(styles.title)}>Styling & Decor Works</p>
            <p className={clsx(styles.content)}>
              We find so much joy and satisfaction in creating beautiful things.
              From styling to themed events to proposals, we are thrilled to
              utilize our creativity and create memorable moments.
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
            title="Saconcept"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_02.PNG?alt=media&token=6210bb76-9d1f-4377-a14a-915145cf0796"
          />
          <CardInfor
            title="Arrule Concept"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_02.PNG?alt=media&token=2da2f946-43c1-4689-b5ea-036375b02b26"
          />
          <CardInfor
            title="Conceptual"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
          />
          {/* <CardInfor
            title="GatoEto"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_02.PNG?alt=media&token=6210bb76-9d1f-4377-a14a-915145cf0796"
          /> */}
        </div>
        <p onClick={handleSeeAll}>See all {">"}</p>
      </div>
      <Feedback_Contact />
    </div>
  );
};
