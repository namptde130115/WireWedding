// import { Card } from "antd";
import clsx from 'clsx';
import styles from './index.module.scss';
import { StarFilled } from '@ant-design/icons';
import { Button, Card, Rate } from 'antd';

const { Meta } = Card;
export const CardInforPack = ({
  imgUrl,
  title,
  location,
  price,
  disabled,
  handleAdd,
  className,
  textButton,
  showRate,
}) => {
  return (
    <Card
      className={clsx(styles.card, className)}
      hoverable
      cover={<img className={clsx(styles.image)} alt='example' src={imgUrl} />}
    >
      {showRate && <Rate disabled defaultValue={5} />}
      <Meta
        title={title}
        description={
          <div className={clsx(styles.card_bottom)}>
            <div className={clsx(styles.card_price)}>{price} </div>
            <div className={clsx(styles.card_location)}>
              <img
                className={clsx(styles.icons_location)}
                src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af'
              />
              {location}
              <Button type='primary' onClick={handleAdd}>
                {textButton}
              </Button>
            </div>
            {/* <ButtonCustom
              type='primary'
              text={textButton}
              onClick={handleAdd}
            /> */}
          </div>
        }
      />
    </Card>
  );
};
