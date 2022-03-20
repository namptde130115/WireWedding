import styles from './index.module.scss';
import clsx from 'clsx';

export const Payment = ({ day, list }) => {
  return (
    <div className={clsx(styles.container)}>
      <div>11/11/1111</div>
      <div className={clsx(styles.service)}>
        <div>
          <div>service name</div>
          <div>100.000 vnd</div>
        </div>
        <div>
          <div>service name</div>
          <div>100.000 vnd</div>
        </div>
        <div>
          <div>service name</div>
          <div>100.000 vnd</div>
        </div>
      </div>
    </div>
  );
};
