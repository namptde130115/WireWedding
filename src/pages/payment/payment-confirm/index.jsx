import clsx from "clsx";
import styles from "./index.module.scss";
import { CommonLayout } from "../../../layout/common/index.jsx";
import { imageUrl } from "../../../assets/images-url/index.js";
import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";
import { Input, Menu, Dropdown, Button } from "antd";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";
import { Header } from "../../../layout/header";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { createPayment, getMyService } from "../../../redux/customerSlice.js";
import { useEffect, useState } from "react";
import { Category } from "../../../components/Category";
import { Link, useNavigate } from "react-router-dom";
// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         TP Bank
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         Techcombank
//       </a>
//     </Menu.Item>
//   </Menu>
// );

export const PaymentConfirm = () => {
  const navigate = useNavigate();
  const [paymentContent, setPaymentContent] = useState();
  const categories = [
    {
      id: 1,
      name: "NCB",
    },
  ];
  const dispatch = useDispatch();

  const myService = useSelector((state) => state.customer?.allMyService);
  console.log("myService: ", myService);
  useEffect(() => {
    const getAllMyService = async () => {
      try {
        const actionResult = await dispatch(getMyService());
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) {}
    };
    getAllMyService();
  }, []);
  const arrMyService = myService
    .map((e) => e["id"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((obj) => myService[obj])
    .map((e) => myService[e]);

  const sumWithInitial = arrMyService
    .map((item) => item.price)
    .reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue),
      0
    );
  const redirectToPay = async () => {
    const body = {
      singlePosts: arrMyService.map((item) => {
        return { id: item.id };
      }),
      // amount: sumWithInitial,
      amount: 10000,
      paymentDescription: paymentContent,
      bankCode: "NCB",
    };
    console.log(body);
    try {
      const actionResult = await dispatch(createPayment(body));
      const response = unwrapResult(actionResult);
      if (response) {
        console.log(response.url);
        // window.open = response.url;
        window.open(response.url, '_blank');
        // <Link to={`${response.url}`}></Link>;
      }
    } catch (error) {}
  };
  return (
    <div>
      <Header />
      <div className={clsx(styles.payment_container)}>
        <div className={clsx(styles.payment_cart)}>
          <div className={clsx(styles.h1)}>Checkout</div>
          {arrMyService?.map((item) => (
            <div className={clsx(styles.cart_item)} key={item.id}>
              <div className={clsx(styles.cart_image)}>
                <img src={item?.photos[0]?.url} />
              </div>
              <div className={clsx(styles.cart_name)}>{item.serviceName}</div>
              <div className={clsx(styles.cart_quantity)}>1</div>
              <div className={clsx(styles.cart_price)}>
                {item.price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                }) + " VND"}
              </div>
            </div>
          ))}
          <div className={clsx(styles.cart_total)}>
            <div className={clsx(styles.back)}>
              <ArrowLeftOutlined />
              <p>Back</p>
            </div>
            <div className={clsx(styles.txtTotal)}>
              <p>Total:</p>
            </div>
            <div className={clsx(styles.numTotal)}>
              <p>
                {sumWithInitial.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                }) + " VND"}
              </p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.payment_method)}>
          <div className={clsx(styles.payment_logoVNPay)}>
            <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vnpayewallet.png" />
          </div>
          <div className={clsx(styles.payment_details)}>
            <div className={clsx(styles.payment_amount)}>
              <p className={clsx(styles.payment_title)}>Amount: </p>
              <p className={clsx(styles.amount)}>{sumWithInitial}</p>
            </div>
            <div className={clsx(styles.payment_content)}>
              <p className={clsx(styles.payment_title)}>Content billing</p>
              <div className={clsx(styles.input_field)}>
                <Input
                  value={paymentContent}
                  onChange={(e) => setPaymentContent(e.target.value)}
                  placeholder="Content"
                  bordered={false}
                  required={true}
                />
              </div>
            </div>
            <div className={clsx(styles.payment_bank)}>
              <p className={clsx(styles.payment_title)}>Choose bank</p>
              <Category
                selectName="NCB"
                categories={categories}
                // handleSelect={handleSelectCategory}
              />
            </div>
          </div>
          <div className={clsx(styles.btnPay)}>
            <ButtonCustom
              type="primary"
              text="Pay redirect"
              onClick={redirectToPay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
