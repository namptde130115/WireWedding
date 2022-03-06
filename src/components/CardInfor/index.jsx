// import { Card } from "antd";
import clsx from "clsx";
import styles from "./index.module.scss";
import { StarFilled } from "@ant-design/icons";
import { Card, Rate } from "antd";
const { Meta } = Card;
export const CardInfor = ({ imgUrl, title, location }) => {
  return (
    <Card
      className={clsx(styles.card)}
      hoverable
      style={{ width: 200 }}
      cover={<img alt="example" src={imgUrl} />}
    >
      <Rate disabled defaultValue={4} />
      <Meta
        title={title}
        description={
          <div>
            {/* <StarFilled className={clsx(styles.icons)} /> */}
            <img
              className={clsx(styles.icons_location)}
              src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af"
            />
            {location}
          </div>
        }
      />
    </Card>
  );
};
