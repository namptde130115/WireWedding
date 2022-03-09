import { Menu} from 'antd';
import { useState } from 'react';
import styles from './index.module.scss';
import { MailOutlined } from '@ant-design/icons';
import clsx from 'clsx';

export const ServiceLayout = ({ children }) => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e);
  };

  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>{children}</div>
    </div>
  )
};
