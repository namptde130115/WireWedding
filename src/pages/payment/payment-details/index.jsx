import clsx from "clsx";
import styles from "./index.module.scss";
import { CommonLayout } from "../../../layout/common/index.jsx";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";
import { Table, Rate, Input } from "antd";
import { imageUrl } from "../../../assets/images-url/index.js";
import React, { useState } from "react";
import { Header } from "../../../layout/header";

const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};
const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "20%",
  },
  {
    title: "Purchase ID",
    dataIndex: "purchaseId",
    key: "purchaseId",
    width: "30%",
  },
  {
    title: "Payment method",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
    width: "30%",
  },
  {
    title: "Total price",
    dataIndex: "totalPrice",
    key: "totalPrice",
    width: "20%",
    align: "right",
  },
];

const data = [
  {
    key: "1",
    date: "11/11/2022",
    purchaseId: 123456,
    paymentMethod: "VNPay",
    totalPrice: "₫1.000.000",
  },
];

export const PaymentDetails = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className={clsx(styles.paymentDetails_container)}>
        <div className={clsx(styles.h1)}>Order details</div>
        <div className={clsx(styles.returnedTable)}>
          <Table pagination={false} columns={columns} dataSource={data} />
        </div>
        <div className={clsx(styles.paymentDetails_cart)}>
          <div className={clsx(styles.cart_item)}>
            <div className={clsx(styles.cart_image)}>
              <img src={imageUrl.decoration_02} />
            </div>
            <div className={clsx(styles.cart_name)}>Service's name</div>
            <div className={clsx(styles.cart_quantity)}>1</div>
            <div className={clsx(styles.cart_price)}>₫1.000.000</div>
            <ButtonCustom
              type="link"
              text="Feedback"
              open={open}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            className={clsx(styles.paymentDetails_feedback)}
            hidden={open ? false : true}
          >
            <div>
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <div className={clsx(styles.input_feedback)}>
              <TextArea placeholder="Feedback here" onChange={onChange} />
            </div>
            <div className={clsx(styles.btnSend)}>
              <ButtonCustom type="ghost" text="Send" />
            </div>
          </div>

          <div className={clsx(styles.cart_item)}>
            <div className={clsx(styles.cart_image)}>
              <img src={imageUrl.invitation_02} />
            </div>
            <div className={clsx(styles.cart_name)}>Service's name</div>
            <div className={clsx(styles.cart_quantity)}>1</div>
            <div className={clsx(styles.cart_price)}>₫1.000.000</div>
            <ButtonCustom
              type="link"
              text="Feedback"
              open={open}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            className={clsx(styles.paymentDetails_feedback)}
            hidden={open ? false : true}
          >
            <div>
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <div className={clsx(styles.input_feedback)}>
              <TextArea placeholder="Feedback here" onChange={onChange} />
            </div>
            <div className={clsx(styles.btnSend)}>
              <ButtonCustom type="ghost" text="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
