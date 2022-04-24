import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";
import clsx from "clsx";
import { CardInfor } from "../../../components/CardInfor";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  deleteServiceFromList,
  getMyService,
} from "../../../redux/customerSlice.js";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const MyService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleRemoveFromMyList = async (id) => {
    try {
      const actionResult = await dispatch(deleteServiceFromList(id));
      const response = await unwrapResult(actionResult);
      if (response) {
        console.log(response);
        dispatch(getMyService());
        message.success("Removed");
      }
    } catch (error) {}
  };
  const arrMyService = myService
    .map((e) => e["id"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((obj) => myService[obj])
    .map((e) => myService[e]);

  const handleNavigatePayment = () => navigate("/payment/payment-confirm");
  return (
    <div className={clsx(styles.body)}>
      {/* Your Progress */}
      <div className={clsx(styles.services)}>
        <p className={clsx(styles.your_service_text)}>Added Services</p>
        <div className={clsx(styles.btnHireAll)}>
          <ButtonCustom
            type="primary"
            text="Hire All"
            onClick={handleNavigatePayment}
          />
        </div>
        {/* <div className={clsx(styles.services_list)}>
          <ServiceBox data={{ name: 'Studio' }} handleOpenModal={openModal} />
          <ServiceBox data={{ name: 'Dress & Attire' }} />
          <ServiceBox data={{ name: 'Jewelry' }} />
          <ServiceBox data={{ name: 'Transportation' }} />
          <ServiceBox data={{ name: 'Musicians & Bands' }} />
          <ServiceBox data={{ name: 'Venues' }} />
          <ServiceBox data={{ name: 'Cakes' }} />
          <ServiceBox data={{ name: 'Makeup' }} />
          <ServiceBox data={{ name: 'Lighting & Decor' }} />
        </div> */}
        <div className={clsx(styles.services_list)}>
          {arrMyService?.map((item) => (
            <CardInfor
              key={item.id}
              showRate="5"
              imgUrl={item?.photos[0]?.url}
              avatar="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af"
              title={item.serviceName}
              location={item.vendorAddress}
              price={
                item.price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                }) + " VND"
              }
              textButton="Remove"
              handleAdd={() => handleRemoveFromMyList(item.id)}
            />
          ))}
        </div>
      </div>
      {/* <Modal
        title='Infor Kol'
        visible={isModalEditVisible}
        onCancel={handleCancelModal}
        maskClosable={false}
        width={1000}
      >
        <CardInfor
          textButton={'+ Add'}
          key={1}
          className={'vendor__service__card'}
          // handleAdd={() => openModalEdit(servive.id)}
          title={'take photo'}
          location={'tho quang'}
          imgUrl={
            'https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Slider_images%2Fslider_01.PNG?alt=media&token=9e33e61a-e1d3-4bc8-a446-835bf609c994'
          }
        />
        <CardInfor
          textButton={'+ Add'}
          key={1}
          className={'vendor__service__card'}
          // handleAdd={() => openModalEdit(servive.id)}
          title={'take photo'}
          location={'tho quang'}
          imgUrl={
            'https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Slider_images%2Fslider_01.PNG?alt=media&token=9e33e61a-e1d3-4bc8-a446-835bf609c994'
          }
        />
        <CardInfor
          textButton={'+ Add'}
          key={1}
          className={'vendor__service__card'}
          // handleAdd={() => openModalEdit(servive.id)}
          title={'take photo'}
          location={'tho quang'}
          imgUrl={
            'https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Slider_images%2Fslider_01.PNG?alt=media&token=9e33e61a-e1d3-4bc8-a446-835bf609c994'
          }
        />
      </Modal> */}
    </div>
  );
};
