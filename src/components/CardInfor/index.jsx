import { Card } from 'antd';
import clsx from 'clsx';
import styles from './index.module.scss';
import { StarFilled } from '@ant-design/icons';

const { Meta } = Card;
export const CardInfor = ({ title, title2 }) => {
  return (
    <Card
      className={clsx(styles.card)}
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt='example'
          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
      }
    >
      <Meta
        title={title}
        description={
          <div>
            <StarFilled className={clsx(styles.icons)} />
            {title2}
          </div>
        }
      />
    </Card>
  );
};
