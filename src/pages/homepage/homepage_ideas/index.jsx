import { HomeLayout } from "../../../layout/homepage/index.jsx";
import { Feedback_Contact } from "../../../components/Feedback_Contact/index.jsx";
import { CardBlog } from "../../../components/CardBlog/index.jsx";
import { MyBlog } from "../../../components/MyBlog/index.jsx";
import clsx from "clsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../../assets/images-url/index.js";
import { Paging } from "../../../components/Pagination/index.jsx";
import { useParams, useNavigate } from "react-router-dom";

export const HomePage_ideas = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const handleBlogDetails = (id) => navigate("ideas/blog-details/" + id);
  return (
    <HomeLayout>
      <div className={clsx(styles.h1)}>Ideas for your wonderful moment</div>
      <div className={clsx(styles.ideas_child)}>
        {/* <CardBlog imgUrl={imageUrl.studio_01} onClick={()=>handleBlogDetails(id)} /> */}
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
      {/* <Feedback_Contact /> */}
    </HomeLayout>
  );
};
