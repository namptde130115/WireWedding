import clsx from "clsx";
import styles from "./index.module.scss";
import { Carousel } from "antd";
import { MyBlog } from "../../components/MyBlog/index.jsx";

export const Feedback_Contact = ({}) => {
  return (
    <div className={clsx(styles.body_bottom)}>
      <div className={clsx(styles.feedback_container)}>
        <hr />
        <div className={clsx(styles.h2)}>Feedback</div>
        <div className={clsx(styles.feedback_child)}>
          <Carousel autoplay>
            <div className={clsx(styles.feedback_content)}>
              <p>
                "Gotoubun made my wedding dream come true. They worked so hard
                and diligent on every single detail of my wedding, I would say
                my family and Ihad a time of our life. Decorations, activities,
                and the logistics."
              </p>
              <div className={clsx(styles.userName)}>
                <p>- Linh -</p>
              </div>
            </div>
            <div className={clsx(styles.feedback_content)}>
              <p>
                "Thank you from the bottom of our hearts for the incredible and
                once in a life time experience you provided to us. We can
                honestly say we couldn't have done it."
              </p>
              <div className={clsx(styles.userName)}>
                <p>- Betty -</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>{" "}
      <hr />
      <div className={clsx(styles.contact_container)}>
        <MyBlog />
      </div>
    </div>
  );
};
