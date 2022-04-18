import clsx from "clsx";
import styles from "./index.module.scss";
import { CommonLayout } from "../../../layout/common/index.jsx";
import { imageUrl } from "../../../assets/images-url/index.js";
import { Table, Tag, Space } from "antd";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "25%",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    width: "45%",
  },
  // {
  //   title: "Description",
  //   dataIndex: "description",
  //   key: "description",
  //   width: "30%",
  // },
];

const data = [
  {
    key: "1",
    name: "Transaction Time",
    value: "2022-04-04 11:16:17",
    // description: "Thông tin mô tả từ website merchant",
  },
  {
    key: "2",
    name: "Transaction Info",
    value: "Abc gui tien service 1",
    // description: "Thông tin mô tả từ website merchant",
  },
  {
    key: "3",
    name: "Amount",
    value: "100000",
    // description: "London No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Message",
    value: "Giao dich duoc thuc hien thanh cong",
    // description: "Thông báo từ cổng thanh toán",
  },
  {
    key: "5",
    name: "Transaction Number",
    value: "13710622",
    // description: "Mã GD trên cổng thanh toán",
  },
  {
    key: "6",
    name: "Bank",
    value: "NCB",
    // description: "Ngân hàng GD",
  },
];

export const PaymentReturn = () => {
  return (
    // <CommonLayout>
    <div className={clsx(styles.paymentReturn_container)}>
      <div className={clsx(styles.h1)}>Thank you for your order!</div>
      <div className={clsx(styles.returnedTable)}>
        <Table pagination={false} columns={columns} dataSource={data} />
      </div>
      <div className={clsx(styles.btnBack)}>
        <ButtonCustom type="primary" text="Back to Planning Tools" />
      </div>
    </div>
    // </CommonLayout>
  );
};
