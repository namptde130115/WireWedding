import clsx from "clsx";
import styles from "./index.module.scss";
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import Icon from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { CardInfor } from "../../components/CardInfor/index.jsx";
import { imageUrl } from "../../assets/images-url/index";

export const ServiceBox = ({ component, category }) => {
  const [isModalVisible, setIsModalVisible] = useState({
    // addNew: false,
    // update: false,
  });
  const handleCancel = () => {
    // formAdd.resetFields();
    // formUpdate.resetFields();
    setIsModalVisible(false);
  };
  const showModal = (method) => {
    setIsModalVisible((prev) => {
      return { ...prev, [method]: true };
    });
  };
  return (
    <div className={styles.serviceBox_container}>
      <div
        className={styles.serviceBox_child}
        onClick={() => showModal("view")}
      >
        <div className={styles.serviceBox_icon}>
          <Icon component={component} />
        </div>
        <div className={clsx(styles.serviceBox_category)}>{category}</div>
        <div className={clsx(styles.btnAdd)}>
          <ButtonCustom
            type="primary"
            text="Add"
            onClick={(event) => {
              event.stopPropagation();
              showModal("add");
            }}
          />
        </div>
      </div>
      <Modal
        className="view_category_child"
        visible={isModalVisible.view}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <div className={clsx(styles.category_child)}>
          <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl={imageUrl.news_img1}
          />
          {/* <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl={imageUrl.news_img1}
          />
          <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl={imageUrl.news_img1}
          /> */}
        </div>
      </Modal>
      <Modal
        className="add_category_child"
        visible={isModalVisible.add}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <div className={clsx(styles.service)}>
          {/* <CardInfor
            title="Service 1"
            location="Location 1"
            imgUrl={imageUrl.news_img1}
          /> */}
          aaaaaaaaaaaa
        </div>
      </Modal>
    </div>
  );
};
