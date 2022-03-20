import styles from './index.module.scss';
import clsx from 'clsx';

import { Rate } from 'antd';

export const PaymentInfor = () => {
  return (
    <div className={clsx(styles.payment__page)}>
      <p>Your Cart</p>
      <div className={clsx(styles.content__container)}>
        <div className={clsx(styles.card__payment)}>
          <div className={clsx(styles.image)}>image</div>
          <div className={clsx(styles.content)}>
            <Rate allowHalf value={5} />
            <p>service name</p>
            <p>location</p>
          </div>
          <div className={clsx(styles.price)}>
            <p>100.000 vnd</p>
          </div>
        </div>
      </div>
      <div className={clsx(styles.totals__payment)}>
        <p>Total</p>
        <p>100.000 vnd</p>
      </div>
    </div>
  );
};
