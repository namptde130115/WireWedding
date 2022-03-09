import clsx from "clsx";
import styles from "./index.module.scss";
import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
export const CardInfor = ({ card_img, title, rate, location }) => {
  return (
    <div className="site-card-wrapper">
      <Card
        className={clsx(styles.card)}
        hoverable
        cover={
        <img
          className={clsx(styles.image)}
          src={card_img}
        />
        }>
        <Meta
          title={title}
          description={
          <div>
            {rate}
            <StarFilled className={clsx(styles.icons)} />
            <img
            className={clsx(styles.icons_location)}
            src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af"
            />
            {location}
            </div>
            }/>
      </Card>
    </div>
  );
};