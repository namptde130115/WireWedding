import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";
import { Card, Col, Row, Space, Button, Modal } from 'antd';
import clsx from 'clsx';
import { ServiceBox } from '../../../components/ServiceBox';
import { CardInfor } from '../../../components/CardInfor';

export const MyService = () => {
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);

  const handleCancelModal = () => {
    setIsModalEditVisible(false);
  };
  const openModal = () => {
    setIsModalEditVisible(true);
  };
  return (
    <div className={clsx(styles.body)}>
      {/* Your Progress */}
      <div className={clsx(styles.services)}>
        <p className={clsx(styles.your_service_text)}>Your Added Services</p>
        <div className={clsx(styles.btnHireAll)}>
          <ButtonCustom type="primary" text="Hire All" />
        </div>
        <div className={clsx(styles.services_list)}>
          <ServiceBox data={{ name: 'Studio' }} handleOpenModal={openModal} />
          <ServiceBox data={{ name: 'Dress & Attire' }} />
          <ServiceBox data={{ name: 'Jewelry' }} />
          <ServiceBox data={{ name: 'Transportation' }} />
          <ServiceBox data={{ name: 'Musicians & Bands' }} />
          <ServiceBox data={{ name: 'Venues' }} />
          <ServiceBox data={{ name: 'Cakes' }} />
          <ServiceBox data={{ name: 'Makeup' }} />
          <ServiceBox data={{ name: 'Lighting & Decor' }} />
        </div>
      </div>
      <Modal
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
      </Modal>
    </div>
  );
};
