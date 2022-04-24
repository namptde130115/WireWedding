import clsx from "clsx";
import styles from "./index.module.scss";
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import Icon from "@ant-design/icons";
import React, { useState } from "react";
import { iconUrl } from "../../assets/icons/index.js";

export const ServiceBox = ({ data, handleOpenModal }) => {
  const iconComponent = () => {
    switch (data?.name) {
      case "Studio":
        return iconUrl.icon_studio;
      case "Invitations":
        return iconUrl.icon_invitation;
      case "Dress & Attire":
        return iconUrl.icon_costume;
      case "Jewelry":
        return iconUrl.icon_jewelry;
      case "Transportation":
        return iconUrl.icon_transportation;
      case "Makeup":
        return iconUrl.icon_makeUp;
      case "Musicians & Bands":
        return iconUrl.icon_music;
      case "Venues":
        return iconUrl.icon_venue;
      case "Cakes":
        return iconUrl.icon_cakes;
      case "Lighting & Decor":
        return iconUrl.icon_decoration;
      case "Officiants":
        return iconUrl.icon_officiant;
      case "Travel Agents":
        return iconUrl.icon_travel;
      case "Event Agents":
        return iconUrl.icon_event;
    }
  };

  return (
    <div className={styles.serviceBox_container}>
      <div className={styles.serviceBox_child}>
        <div className={styles.serviceBox_icon}>
          <Icon component={iconComponent} />
        </div>
        <div className={clsx(styles.serviceBox_category)}>{data?.name}</div>
        <div className={clsx(styles.btnAdd)}>
          <ButtonCustom
            type="primary"
            text="Add"
            onClick={(event) => handleOpenModal(event)}
          />
        </div>
      </div>
    </div>
  );
};
