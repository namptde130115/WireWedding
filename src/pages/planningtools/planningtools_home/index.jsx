import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Layout, Avatar, Divider, Card, Col, Row, List, message, Input } from 'antd';
import { CameraOutlined, CheckCircleOutlined } from '@ant-design/icons';
import VirtualList from 'rc-virtual-list';
import { PlanningToolsHeader } from '../../../layout/planningtools-header';
import { Footer } from '../../../layout/footer';
import clsx from 'clsx';

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

export const PlanningTools = () => {

  const [data, setData] = useState([]);
  const { Search } = Input;

  const hired_data = [
    {
      title: 'Studio',
    },
    {
      title: 'Venue',
    },
    {
      title: 'Decor',
    },
    {
      title: 'Transport',
    },
    {
      title: 'Officiant',
    },
    {
      title: 'Restarant',
    },
  ];

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(body => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = e => {
    if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  return (
    <Layout>
      <PlanningToolsHeader />
      <div className={styles.body}>

        {/* Avatar */}
        <Avatar.Group className={styles.ava_group} size={200}>
          <Avatar className={styles.my_ava}><CameraOutlined className={styles.inner_camera} /></Avatar>
          <Avatar className={styles.anata_av}><CameraOutlined className={styles.inner_camera} /></Avatar>
        </Avatar.Group>

        {/* Your Progress */}
        <div className={styles.progress}>
          <p className={styles.progress_text}>Your Progress</p>
          <div className={styles.progress_menu}>
            <Row gutter={16} className={styles.progress_menu_inner}>
              <Col span={8}>
                <Card bordered={false} className={styles.detail} hoverable>
                  <div>
                    <h1>
                      H             &amp; M       </h1>
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
                    <img class="svgIcon svgIcon__notebook homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg" />
                    <div>
                      <p><strong>0</strong> out of 21</p>
                      <a href="https://www.weddingwire.com/tools/Vendors" class="app-tool-cards-tile-link" title="Services hired">Services hired</a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={5}>
                <Card bordered={false} className={styles.detail} hoverable>
                  <div>
                    <img class="svgIcon svgIcon__to_do homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/to_do.svg" />
                    <div>
                      <p><strong>0</strong> out of 81</p>
                      <a href="https://www.weddingwire.com/tools/Checklist" class="app-tool-cards-tile-link" title="Tasks completed">Tasks completed</a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={5}>
                <Card bordered={false} className={styles.detail} hoverable>
                  <div>
                    <img class="svgIcon svgIcon__calculator homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg" />
                    <div>
                      <p><strong>$0</strong></p>
                      <a href="https://www.weddingwire.com/tools/Budget" class="app-tool-cards-tile-link" title="Budget spent">Budget spent</a>
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
              itemKey="email"
              onScroll={onScroll}
            >
              {item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<CheckCircleOutlined />}
                    title="05/03/2022"
                    description="Đến 360 Studio để chụp hình đám cưới"
                  />
                  <div>Done</div>
                </List.Item>
              )}
            </VirtualList>
          </List>

          <Divider className={styles.divider} />

          {/* Hired Services */}
          <div className={styles.hired_services}>

            <p className={styles.upcomming_title}>Hired Servives <span><Search className={styles.search_bar} placeholder="Input your search theme" enterButton="Search" size="large" /></span></p>

            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
              dataSource={hired_data}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title} hoverable>Card content</Card>
                </List.Item>
              )}
            />
            <a className={styles.view_all}>View all</a>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
