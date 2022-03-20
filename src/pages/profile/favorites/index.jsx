import styles from './index.module.scss';
import clsx from 'clsx';
import { Button } from 'antd';
import { Card } from 'antd';
import { useState } from 'react';

export const FavoriteProfile = () => {
  const [changeColor, setChangeColor] = useState(false);
  const handleClick = () => {
    setChangeColor(!changeColor);
  };
  return (
    <div>
      <Button
        type='primary'
        className={clsx({ [styles.btn]: changeColor })}
        onClick={handleClick}
      >
        asdasdasd
      </Button>
      <Card
        className={clsx(styles.card)}
        size='small'
        title='Small size card'
        extra={<a href='#'>More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};
