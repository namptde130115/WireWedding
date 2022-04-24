import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import { Divider, Card, Col, Row, List, message } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import VirtualList from 'rc-virtual-list';
const ContainerHeight = 400;

export const Overall = () => {
  const [data, setData] = useState([]);

  return (
    <div className={styles.body}>
      {/* Your Progress */}
      <div className={styles.progress}>
        <p className={styles.progress_text}>Your Progress</p>
        <div className={styles.progress_menu}>
          <Row gutter={16} className={styles.progress_menu_inner}>
            <Col span={8}>
              <Card bordered={false} className={styles.detail} hoverable>
                <div>
                  <h1>H &amp; M </h1>
                  <p>I'm attending a wedding on</p>
                  <div>
                    <span>07-</span>
                    <span>07-</span>
                    <span>2022</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={5}>
              <Card bordered={false} className={styles.detail} hoverable>
                <div>
                  <img
                    class='svgIcon svgIcon__notebook homeToolsLoggedTile__icon'
                    src='https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg'
                  />
                  <div>
                    <p>
                      <strong>0</strong> out of 21
                    </p>
                    <span>Services hired</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={5}>
              <Card bordered={false} className={styles.detail} hoverable>
                <div>
                  <img
                    class='svgIcon svgIcon__to_do homeToolsLoggedTile__icon'
                    src='https://cdn1.weddingwire.com/assets/svg/original/illustration/to_do.svg'
                  />
                  <div>
                    <p>
                      <strong>0</strong> out of 81
                    </p>
                    <span>Tasks completed</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={5}>
              <Card bordered={false} className={styles.detail} hoverable>
                <div>
                  <img
                    class='svgIcon svgIcon__calculator homeToolsLoggedTile__icon'
                    src='https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg'
                  />
                  <div>
                    <p>
                      <strong>$0</strong>
                    </p>
                    <span>Budget spent</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        <Divider className={styles.divider} />

        {/* Upcomming Task */}
        <p className={styles.upcomming_title}>Upcomming Tasks</p>
        <List className={styles.task_list}>
          <VirtualList
            data={data}
            height={ContainerHeight}
            itemHeight={47}
            itemKey='email'
          >
            {(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<CheckCircleOutlined />}
                  title='05/03/2022'
                  description='Đến 360 Studio để chụp hình đám cưới'
                />
                <div>Done</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
      </div>
    </div>
  );
};
