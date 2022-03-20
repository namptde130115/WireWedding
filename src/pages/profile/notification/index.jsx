import styles from './index.module.scss';
import clsx from 'clsx';

export const Notification = ({ title, day, time }) => {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.title)}>{title}</div>
      <div className={clsx(styles.time)}>
        <p>{day}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
