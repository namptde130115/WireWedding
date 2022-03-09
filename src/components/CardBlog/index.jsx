import clsx from "clsx";
import styles from "./index.module.scss";

export const CardBlog = ({ imgUrl }) => {
  return (
    <div className={styles.card_blog}>
      <img src={imgUrl} />
      <div className={styles.blog_content}>
        <p className={clsx(styles.blog_tittle)}>Title</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
