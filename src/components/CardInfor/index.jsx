// import { Card } from "antd";
import clsx from 'clsx';
import styles from './index.module.scss';
import { StarFilled } from '@ant-design/icons';
import { Card, Rate } from 'antd';
import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';

const { Meta } = Card;
<<<<<<< HEAD
export const CardInfor = ({ imgUrl, title, location, onclick }) => {
=======
export const CardInfor = ({
  imgUrl,
  title,
  location,
  disabled,
  handleAdd,
  className,
  textButton,
  showRate,
}) => {
>>>>>>> d659dfbdf1769afa1390c19886754857c7d2bd9c
  return (
    <Card
      className={clsx(styles.card, className)}
      hoverable
      cover={<img className={clsx(styles.image)} alt='example' src={imgUrl} />}
    >
      {showRate && <Rate disabled defaultValue={4} />}
      <Meta
        title={title}
        description={
          <div className={clsx(styles.card_bottom)}>
            {/* <StarFilled className={clsx(styles.icons)} /> */}
            <div className={clsx(styles.card_description)}>
              <img
                className={clsx(styles.icons_location)}
                src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af'
              />
              {location}
            </div>
<<<<<<< HEAD
            <ButtonCustom type="primary" text="+ Add" onclick={onclick}/>
=======
            <ButtonCustom
              type='primary'
              text={textButton}
              onClick={handleAdd}
            />
>>>>>>> d659dfbdf1769afa1390c19886754857c7d2bd9c
          </div>
        }
      />
    </Card>
  );
};
