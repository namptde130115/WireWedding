import { Menu, Carousel } from "antd";
import { useState } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { imageUrl } from "../../assets/images-url/index";
export const HomeLayout = ({ children }) => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e);
  };

  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={clsx(styles.logo)}>logo</div>
        <Menu
<<<<<<< HEAD
          // mode="inline"
=======
>>>>>>> 330b0961327440f2bd615b995fff677661795ce7
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className={clsx(styles.menu__container)}
        >
          <Menu.Item key="planning-tools">Planning tools</Menu.Item>
          <Menu.Item key="our-services">Our services</Menu.Item>
          <Menu.Item key="ideas">Ideas</Menu.Item>
          <Menu.Item key="about-us">About us</Menu.Item>
        </Menu>
      </div>
      <div className={styles.carousel}>
        <Carousel autoplay dots={false}>
          <div>
            <img width="100%" height="60%" src={imageUrl.slider_img1} />
          </div>
          <div>
            <img width="100%" height="60%" src={imageUrl.slider_img2} />
          </div>
          <div>
            <img width="100%" height="60%" src={imageUrl.slider_img3} />
          </div>
          <div>
            <img width="100%" height="60%" src={imageUrl.slider_img4} />
          </div>
          <div>
            <img width="100%" height="60%" src={imageUrl.slider_img5} />
          </div>
        </Carousel>
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>this is footer</div>
    </div>
  );
};
