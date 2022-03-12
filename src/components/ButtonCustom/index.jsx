import { Button } from 'antd';
import clsx from 'clsx';
import styles from './index.module.scss';

export const ButtonCustom = ({
  type,
  text,
  icon,
  className,
  color,
  onClick,
}) => {
  return (
    <Button
      type={type}
      className={clsx(className, styles.general, {
        [styles.primary]: type === 'primary',
        [styles.like]: type === 'like',
        [styles.ghost]: type === 'ghost',
        [styles.link]: type === 'link',
        [styles.color]: color === 'red',
      })}
      icon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
