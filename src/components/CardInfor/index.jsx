// import { Card } from "antd";
import clsx from 'clsx';
import styles from './index.module.scss';
import { StarFilled } from '@ant-design/icons';
import { Card, Rate } from 'antd';
import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';

const { Meta } = Card;
export const CardInfor = ({
  imgUrl,
  avatar,
  title,
  location,
  price,
  disabled,
  handleAdd,
  className,
  textButton,
  showRate,
  textButtonRemove,
  handleRemove,
  handleClick,
}) => {
  return (
    <Card
      onClick={handleClick}
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
              <img className={clsx(styles.icons_location)} src={avatar} />
              {location}
              <ButtonCustom
                type='ghost'
                text={textButtonRemove}
                onClick={handleRemove}
              />
              <ButtonCustom
                type='primary'
                text={textButton}
                onClick={handleAdd}
              />
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
