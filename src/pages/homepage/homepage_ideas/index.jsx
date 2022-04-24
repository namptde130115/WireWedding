import { HomeLayout } from '../../../layout/homepage/index.jsx';
import { Feedback_Contact } from '../../../components/Feedback_Contact/index.jsx';
import { CardBlog } from '../../../components/CardBlog/index.jsx';
import { MyBlog } from '../../../components/MyBlog/index.jsx';
import clsx from 'clsx';
import styles from './index.module.scss';
import { imageUrl } from '../../../assets/images-url/index.js';
import { Paging } from '../../../components/Pagination/index.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllBlog } from '../../../redux/vendorSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export const HomePage_ideas = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allBlog = useSelector((state) => state.vendor.allBlog);
  useEffect(() => {
    const getAllBlogForCustomer = async () => {
      try {
        const actionResult = await dispatch(getAllBlog());
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) {}
    };
    getAllBlogForCustomer();
  }, []);
  
  const hanleShowDetail = (id) => {
    navigate(`blog-details/${id}`);
  };

  return (
    <HomeLayout>
      <div className={clsx(styles.h1)}>Ideas for your wonderful moment</div>
      <div className={clsx(styles.ideas_child)}>
        {allBlog?.map((item) => (
          <CardBlog
            key={item.id}
            handleClick={() => hanleShowDetail(item.id)}
            imgUrl={imageUrl.studio_01}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className={clsx(styles.paging)}></div>
      <MyBlog />
      {/* <Feedback_Contact /> */}
    </HomeLayout>
  );
};
