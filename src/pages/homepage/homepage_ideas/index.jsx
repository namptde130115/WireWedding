import { HomeCustomerLayout } from "../../../layout/homepage_customer/index.jsx";
import { Feedback_Contact } from "../../../components/Feedback_Contact/index.jsx";
import { CardBlog } from "../../../components/CardBlog/index.jsx";
import { MyBlog } from "../../../components/MyBlog/index.jsx";
import clsx from "clsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../../assets/images-url/index.js";
import { Paging } from "../../../components/Pagination/index.jsx";

export const HomePage_ideas = () => {
  return (
    <HomeCustomerLayout>
      <div className={clsx(styles.h1)}>Ideas for your wonderful moment</div>
      <div className={clsx(styles.ideas_child)}>
        <CardBlog imgUrl={imageUrl.studio_01} />
        <CardBlog imgUrl={imageUrl.studio_02} />
        <CardBlog imgUrl={imageUrl.decoration_01} />
        <CardBlog imgUrl={imageUrl.decoration_02} />
        <CardBlog imgUrl={imageUrl.invitation_01} />
        <CardBlog imgUrl={imageUrl.invitation_02} />
      </div>
      <div className={clsx(styles.paging)}>
        <Paging />
      </div>
      <MyBlog />
      <Feedback_Contact />
    </HomeCustomerLayout>
  );
};
