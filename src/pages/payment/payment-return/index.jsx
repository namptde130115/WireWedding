import clsx from "clsx";
import styles from "./index.module.scss";
import { CommonLayout } from "../../../layout/common/index.jsx";
import { imageUrl } from "../../../assets/images-url/index.js";
import { Table, Tag, Space } from "antd";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";
import { Header } from "../../../layout/header";
import { useNavigate } from "react-router-dom";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const packId = urlParams.get("idPack");
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
];
// let payDate = new Date(parseInt(urlParams.get("vnp_PayDate")));
let payDate = urlParams.get("vnp_PayDate");

const data = [
  {
    key: "1",
    name: "Transaction Time",
    // value: `${payDate.getDate()}/${payDate.getMonth()+1}/${payDate.getFullYear()} ${payDate.getHours()}:${payDate.getMinutes()}`,
    value:
      payDate?.substring(0, 4) +
      "/" +
      payDate?.substring(4, 6) +
      "/" +
      payDate?.substring(6, 8) +
      " " +
      payDate?.substring(8, 10) +
      ":" +
      payDate?.substring(10, 12) +
      ":" +
      payDate?.substring(12, 14),
  },
  {
    key: "2",
    name: "Transaction Info",
    value: urlParams.get("vnp_OrderInfo"),
  },
  {
    key: "3",
    name: "Amount",
    value: urlParams.get("vnp_Amount"),
  },
  {
    key: "4",
    name: "Message",
    value: "Thank you for your order",
  },
  {
    key: "5",
    name: "Transaction Number",
    value: urlParams.get("vnp_TransactionNo"),
  },
  {
    key: "6",
    name: "Bank",
    value: urlParams.get("vnp_BankCode"),
  },
];

export const PaymentReturn = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/planning-tools");
  return (
    <div>
      <Header />
      <div className={clsx(styles.paymentReturn_container)}>
        <div className={clsx(styles.h1)}>Thank you for your order!</div>
        <div className={clsx(styles.returnedTable)}>
          <Table pagination={false} columns={columns} dataSource={data} />
        </div>
        <div className={clsx(styles.btnBack)}>
          <ButtonCustom
            type="primary"
            text="Back to Planning Tools"
            onClick={handleBack}
          />
        </div>
      </div>
    </div>
  );
};
