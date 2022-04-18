import clsx from "clsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../../assets/images-url/index.js";
import { CardBlog } from "../../../components/CardBlog/index.jsx";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";
import { CommonLayout } from "../../../layout/common/index.jsx";
import { Footer } from "../../../layout/footer/index.jsx";
import { Header } from "../../../layout/header/index.jsx";
import { useNavigate } from "react-router-dom";

export const HomePageAboutUs = () => {
  const navigate = useNavigate();
  const handlePlanningTools = () => navigate("/");
  return (
    // <CommonLayout>
    <div className={clsx(styles.aboutUs_container)}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={clsx(styles.aboutUs_banner)}>
        <div className={clsx(styles.aboutUs_banner_intro)}>
          <div className={clsx(styles.h1)}>
            Start a <span>new life</span>
            <br />
            with the one <span>you love</span>
          </div>
          <p className={clsx(styles.txt_intro)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
            quisque non tellus orci ac auctor augue mauris augue.
          </p>
          <ButtonCustom
            type="primary"
            text="Start Your Event"
            onClick={handlePlanningTools}
          />
        </div>
      </div>

      <div className={clsx(styles.aboutUs_content)}>
        <div className={clsx(styles.h1)}>ABOUT GOTOUBUN</div>
        <p className={clsx(styles.txt_intro)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
          quisque non tellus orci ac auctor augue mauris augue. Metus aliquam
          eleifend mi in nulla posuere sollicitudin aliquam ultrices. Odio eu
          feugiat pretium nibh ipsum. Tempus iaculis urna id volutpat lacus
          laoreet non curabitur. Eget nulla facilisi etiam dignissim diam quis
          enim lobortis scelerisque.
        </p>
      </div>

      <div className={clsx(styles.aboutUs_vendors)}>
        <div className={clsx(styles.h1)}>Meet our vendors</div>
        <div className={clsx(styles.aboutUs_vendorsLogo)}>
          <img src="https://theplannersvn.com/home/wp-content/uploads/2020/10/Lotte-hanoi.png" />
          <img src="https://theplannersvn.com/home/wp-content/uploads/2020/10/as-seen-white_2018.png" />
          <img src="https://theplannersvn.com/home/wp-content/uploads/2020/10/Pullman-Logo.png" />
          <img src="https://theplannersvn.com/home/wp-content/uploads/2020/10/PhanTien.png" />
          <img src="https://theplannersvn.com/home/wp-content/uploads/2020/10/5fa2618c703fe87591639d60d2a9a50c.png" />
          <img src="https://theplannersvn.com/home/wp-content/uploads/2020/10/logo-tuta-01-2-1-copy.png" />
          <img src="https://theplannersvn.com/home/wp-content/uploads/2020/10/Sheraton.png" />
        </div>
      </div>
      <div className={clsx(styles.aboutUs_name)}>
        <div className={clsx(styles.h1)}>
          Where does the name "Gotoubun" come from?
        </div>
        <p className={clsx(styles.txt_intro)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
          quisque non tellus orci ac auctor augue mauris augue. Metus aliquam
          eleifend mi in nulla posuere sollicitudin aliquam ultrices. Odio eu
          feugiat pretium nibh ipsum. Tempus iaculis urna id volutpat lacus
          laoreet non curabitur. Eget nulla facilisi etiam dignissim diam quis
          enim lobortis scelerisque.
        </p>
      </div>
      <Footer />
    </div>
    // </CommonLayout>
  );
};
