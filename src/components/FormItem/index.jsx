import clsx from 'clsx';
import styles from './index.module.scss';

export const FormItem = ({ title, children, className }) => {
  return (
    <div className={clsx(styles.form__item__container, className)}>
      <label>{title}</label>
      {children}
    </div>
  );
};
