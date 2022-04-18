import clsx from "clsx";
import styles from "./index.module.scss";
import { Carousel } from "antd";
import { imageUrl } from "../../assets/images-url/index";
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import { useNavigate } from "react-router-dom";

export const MyBlog = ({}) => {
  const navigate = useNavigate();
  const handleCreateBlog = () => navigate("/ideas/create-blog");
  const handleSeeAll = () => navigate("/ideas");
  return (
    <div className={clsx(styles.ideas_blog)}>
      {/* <hr /> */}
      <div className={clsx(styles.h2)}>Ideas for you</div>
      <div className={styles.carousel}>
        <Carousel autoplay>
          <div>
            <img width="100%" height="380vw" src={imageUrl.banner_01} />
          </div>
          <div>
            <img width="100%" height="380vw" src={imageUrl.banner_02} />
          </div>
          <div>
            <img width="100%" height="380vw" src={imageUrl.banner_03} />
          </div>
          <div>
            <img width="100%" height="380vw" src={imageUrl.banner_04} />
          </div>
          <div>
            <img width="100%" height="380vw" src={imageUrl.banner_05} />
          </div>
          <div>
            <img width="100%" height="380vw" src={imageUrl.banner_06} />
          </div>
          <div>
            <img width="100%" height="380vw" src={imageUrl.banner_07} />
          </div>
        </Carousel>
      </div>
      <div className={clsx(styles.ideas_blog_button)}>
        {/* <ButtonCustom
          type="primary"
          text="Create blog "
          onClick={handleCreateBlog}
        /> */}
        <p onClick={handleSeeAll}>See all {">"}</p>
      </div>
    </div>
  );
};
