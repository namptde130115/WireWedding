import React from "react";
import { HomeCustomerLayout } from "../../../layout/homepage_customer/index.jsx";
import clsx from "clsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../../assets/images-url/index.js";
import { CardBlog } from "../../../components/CardBlog/index.jsx";
import { Paging } from "../../../components/Pagination/index.jsx";
import { Menu, Dropdown, message, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const HomePage_myBlogs = () => {
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <HomeCustomerLayout>
      <div className={clsx(styles.h1)}>My blogs</div>
      <div className={clsx(styles.blogs_child)}>
        <div className={clsx(styles.blogsCard)}>
          <CardBlog imgUrl={imageUrl.studio_01} />
          <div className={clsx(styles.dropdown)}>
            <Dropdown.Button overlay={menu}></Dropdown.Button>
          </div>
        </div>
        <div className={clsx(styles.blogsCard)}>
          <CardBlog imgUrl={imageUrl.studio_02} />
          <div className={clsx(styles.dropdown)}>
            <Dropdown.Button overlay={menu}></Dropdown.Button>
          </div>
        </div>
        <div className={clsx(styles.blogsCard)}>
          <CardBlog imgUrl={imageUrl.decoration_01} />
          <div className={clsx(styles.dropdown)}>
            <Dropdown.Button overlay={menu}></Dropdown.Button>
          </div>
        </div>
        <div className={clsx(styles.blogsCard)}>
          <CardBlog imgUrl={imageUrl.decoration_02} />
          <div className={clsx(styles.dropdown)}>
            <Dropdown.Button overlay={menu}></Dropdown.Button>
          </div>
        </div>
        <div className={clsx(styles.blogsCard)}>
          <CardBlog imgUrl={imageUrl.invitation_01} />
          <div className={clsx(styles.dropdown)}>
            <Dropdown.Button overlay={menu}></Dropdown.Button>
          </div>
        </div>
        <div className={clsx(styles.blogsCard)}>
          <CardBlog imgUrl={imageUrl.invitation_02} />
          <div className={clsx(styles.dropdown)}>
            <Dropdown.Button overlay={menu}></Dropdown.Button>
          </div>
        </div>
      </div>
      <Paging />
    </HomeCustomerLayout>
  );
};
