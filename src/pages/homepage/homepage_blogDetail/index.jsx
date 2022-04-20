import clsx from 'clsx';
import styles from './index.module.scss';
import { Input } from 'antd';
import { imageUrl } from '../../../assets/images-url/index.js';
import React, { useEffect, useState } from 'react';
import { ShareAltOutlined } from '@ant-design/icons';
import { BlogComment } from '../../../components/BlogComment/index.jsx';
import { ButtonCustom } from '../../../components/ButtonCustom/index.jsx';
import { CommonLayout } from '../../../layout/common/index.jsx';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getDetailBlog } from '../../../redux/vendorSlice';
import parse from 'html-react-parser';

const { TextArea } = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};
export const HomePageBlogDetail = () => {
  const dispatch = useDispatch();
  const [blogDetail, setBlogDetail] = useState();
  let idBlog = window.location.pathname.split('/')[3];
  console.log(idBlog);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const actionResult = await dispatch(getDetailBlog(parseInt(idBlog)));
        const response = unwrapResult(actionResult);
        if (response) {
          console.log(response);
          setBlogDetail(response);
        }
      } catch (error) {}
    };
    getDetail();
  }, []);

  console.log(blogDetail);
  return (
    <CommonLayout>
      <div className={clsx(styles.h1)}>{blogDetail?.title}</div>
      <div className={clsx(styles.blog_container)}>
        <div className={clsx(styles.blog_detail)}>
          <p>By {blogDetail?.createdBy}</p>
          <p>March 9th, 2022</p>
        </div>
        <div className={clsx(styles.blog_child)}>
          {blogDetail && parse(blogDetail.content)}
          <div className={clsx(styles.blog_share)}>
            <p>Share now</p>
            <ShareAltOutlined />
          </div>
        </div>
        <div className={clsx(styles.comment_container)}>
          <h4>Comment</h4>
          <div className={clsx(styles.your_comment)}>
            <div className={clsx(styles.input_comment)}>
              <TextArea placeholder='Comment here' onChange={onChange} />
            </div>
            <div className={clsx(styles.btnSend)}>
              <ButtonCustom type='ghost' text='Send' />
            </div>
          </div>
          <BlogComment />
          <BlogComment />
          <BlogComment />
        </div>
        <div className={clsx(styles.btnViewMore)}>
          <ButtonCustom type='link' text='View more' />
        </div>
      </div>
    </CommonLayout>
  );
};
