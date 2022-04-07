import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Footer } from "../../../layout/footer";
import clsx from "clsx";
import { Input, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ServiceBox } from "../../../components/ServiceBox/index.jsx";
import { imageUrl } from "../../../assets/images-url/index.js";
import { iconUrl } from "../../../assets/icons/index.js";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";

const { TextArea } = Input;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Winter
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Beach
      </a>
    </Menu.Item>
  </Menu>
);
const onChange = (e) => {
  console.log("Change:", e.target.value);
};
export const CreateServicePack = () => {
  return (
    <div className={clsx(styles.createPack_container)}>
      <div className={clsx(styles.createPack_details)}>
        <div className={clsx(styles.pack_name)}>
          <Input placeholder="Service pack name" bordered={false} />
        </div>
        <div className={clsx(styles.pack_amount)}>
          <p className={clsx(styles.title)}>Total price: </p>
          <p className={clsx(styles.amount)}>1000000</p>
        </div>
        <div className={clsx(styles.pack_description)}>
          <p className={clsx(styles.title)}>Description</p>
          <div className={clsx(styles.input_description)}>
            <TextArea
              placeholder="Description here"
              onChange={onChange}
              autoSize
            />
          </div>
        </div>
        <div className={clsx(styles.pack_theme)}>
          <p className={clsx(styles.title)}>Choose theme</p>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Button className={clsx(styles.dropdownTheme)}>
              Spring
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className={clsx(styles.button_container)}>
          <ButtonCustom type="primary" text="Save" />
          <ButtonCustom type="ghost" text="Cancel" />
        </div>
      </div>

      <div className={clsx(styles.createPack_serviceBox)}>
        <ServiceBox
          component={() => {
            return iconUrl.icon_venue;
          }}
          category="Venue"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_studio;
          }}
          category="Studio"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_ceremonyMusic;
          }}
          category="Ceremony Music"
        />

        <ServiceBox
          component={() => {
            return iconUrl.icon_invitation;
          }}
          category="Invitation"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_makeUp;
          }}
          category="Make Up"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_jewelry;
          }}
          category="Jewelry"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_officiant;
          }}
          category="Officiant"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_decoration;
          }}
          category="Decoration"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_costume;
          }}
          category="Costume"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_transportation;
          }}
          category="Transportation"
        />
        <ServiceBox
          component={() => {
            return iconUrl.icon_travel;
          }}
          category="Travel"
        />
      </div>
    </div>
  );
};
