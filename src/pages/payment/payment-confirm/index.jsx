import clsx from "clsx";
import styles from "./index.module.scss";
import { CommonLayout } from "../../../layout/common/index.jsx";
import { imageUrl } from "../../../assets/images-url/index.js";
import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";
import { Input, Menu, Dropdown, Button } from "antd";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        TP Bank
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Techcombank
      </a>
    </Menu.Item>
  </Menu>
);

export const PaymentConfirm = () => {
  return (
    // <CommonLayout>
    <div className={clsx(styles.payment_container)}>
      <div className={clsx(styles.payment_cart)}>
        <div className={clsx(styles.h1)}>Services Ordered</div>
        <div className={clsx(styles.cart_item)}>
          <div className={clsx(styles.cart_image)}>
            <img src={imageUrl.decoration_02} />
          </div>
          <div className={clsx(styles.cart_name)}>Service's name</div>
          <div className={clsx(styles.cart_quantity)}>1</div>
          <div className={clsx(styles.cart_price)}>₫1.000.000</div>
        </div>

        <div className={clsx(styles.cart_item)}>
          <div className={clsx(styles.cart_image)}>
            <img src={imageUrl.studio_02} />
          </div>
          <div className={clsx(styles.cart_name)}>Service's name</div>
          <div className={clsx(styles.cart_quantity)}>1</div>
          <div className={clsx(styles.cart_price)}>₫1.000.000</div>
        </div>
        <div className={clsx(styles.cart_item)}>
          <div className={clsx(styles.cart_image)}>
            <img src={imageUrl.studio_02} />
          </div>
          <div className={clsx(styles.cart_name)}>Service's name</div>
          <div className={clsx(styles.cart_quantity)}>1</div>
          <div className={clsx(styles.cart_price)}>₫1.000.000</div>
        </div>
        <div className={clsx(styles.cart_item)}>
          <div className={clsx(styles.cart_image)}>
            <img src={imageUrl.studio_02} />
          </div>
          <div className={clsx(styles.cart_name)}>Service's name</div>
          <div className={clsx(styles.cart_quantity)}>1</div>
          <div className={clsx(styles.cart_price)}>₫1.000.000</div>
        </div>
        <div className={clsx(styles.cart_item)}>
          <div className={clsx(styles.cart_image)}>
            <img src={imageUrl.studio_02} />
          </div>
          <div className={clsx(styles.cart_name)}>Service's name</div>
          <div className={clsx(styles.cart_quantity)}>1</div>
          <div className={clsx(styles.cart_price)}>₫1.000.000</div>
        </div>
        <div className={clsx(styles.cart_item)}>
          <div className={clsx(styles.cart_image)}>
            <img src={imageUrl.studio_02} />
          </div>
          <div className={clsx(styles.cart_name)}>Service's name</div>
          <div className={clsx(styles.cart_quantity)}>1</div>
          <div className={clsx(styles.cart_price)}>₫1.000.000</div>
        </div>
        <div className={clsx(styles.cart_item)}>
          <div className={clsx(styles.cart_image)}>
            <img src={imageUrl.studio_02} />
          </div>
          <div className={clsx(styles.cart_name)}>Service's name</div>
          <div className={clsx(styles.cart_quantity)}>1</div>
          <div className={clsx(styles.cart_price)}>₫1.000.000</div>
        </div>
        <div className={clsx(styles.cart_total)}>
          <div className={clsx(styles.back)}>
            <ArrowLeftOutlined />
            <p>Back</p>
          </div>
          <div className={clsx(styles.txtTotal)}>
            <p>Total:</p>
          </div>
          <div className={clsx(styles.numTotal)}>
            <p>₫1.000.000</p>
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
            <p className={clsx(styles.amount)}>1000000</p>
            {/* <div className={clsx(styles.input_field)}> */}
              {/* <Input placeholder="Amount" bordered={false} required={true} /> */}
              {/* <p>1000000</p> */}
            {/* </div> */}
          </div>
          <div className={clsx(styles.payment_content)}>
            <p className={clsx(styles.payment_title)}>Content billing</p>
            <div className={clsx(styles.input_field)}>
              <Input placeholder="Content" bordered={false} required={true} />
            </div>
          </div>
          <div className={clsx(styles.payment_bank)}>
            <p className={clsx(styles.payment_title)}>Choose bank</p>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button className={clsx(styles.btnChooseBank)}>
                Không chọn
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className={clsx(styles.btnPay)}>
          <ButtonCustom type="primary" text="Pay redirect" />
        </div>
      </div>
    </div>
    // </CommonLayout>
  );
};
