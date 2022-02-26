import { Menu, Carousel } from 'antd';
import { useState } from 'react';
import styles from './index.module.scss';
import { MailOutlined } from '@ant-design/icons';

export const HomeLayout = ({ children }) => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
          <Menu.Item key='mail' icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key='mail2' icon={<MailOutlined />}>
            Navigation 2
          </Menu.Item>
          <Menu.Item key='mail3' icon={<MailOutlined />}>
            Navigation 3
          </Menu.Item>
          <Menu.Item key='mail4' icon={<MailOutlined />}>
            Navigation 4
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.carousel}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>this is footer</div>
    </div>
  );
};
