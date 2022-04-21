import React, { useState } from 'react';
import styles from './index.module.scss';
import { Card, Col, Row, List, Input, Modal, Button, Divider } from 'antd';
import {
  PlusCircleOutlined,
  EllipsisOutlined,
  CalculatorOutlined,
} from '@ant-design/icons';
import clsx from 'clsx';
import { Radar, Pie } from '@ant-design/plots';
import VirtualList from 'rc-virtual-list';
import Popup from 'reactjs-popup';

export const Budget = () => {
  const ContainerHeight = 1050;
  const [save, setSave] = useState(false);
  const [isModalVisible_add, setIsModalVisible_add] = useState(false);
  const [isModalVisible_edit, setIsModalVisible_edit] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const category = [
    {
      type: 'Catering',
      value: 27,
    },
    {
      type: 'Photography',
      value: 25,
    },
    {
      type: 'Flowers',
      value: 18,
    },
    {
      type: 'Cake',
      value: 15,
    },
    {
      type: 'Dress and Attire',
      value: 10,
    },
    {
      type: 'Band',
      value: 5,
    },
    {
      type: 'DJ',
      value: 5,
    },
    {
      type: 'Videography',
      value: 5,
    },
    {
      type: 'Invitations',
      value: 5,
    },
    {
      type: 'Favors and Gifts',
      value: 5,
    },
    {
      type: 'Officiant',
      value: 5,
    },
    {
      type: 'Transportation',
      value: 5,
    },
    {
      type: 'Beauty and Health',
      value: 5,
    },
    {
      type: 'Jewelry',
      value: 5,
    },
    {
      type: 'Rentals',
      value: 5,
    },
    {
      type: 'Planning',
      value: 5,
    },
  ];

  const [array, setArray] = useState(category);

  const DemoRadar = () => {
    // 数据更新于 2021.01.09
    const data = [
      {
        name: 'Catering',
        star: 10371,
      },
      {
        name: 'Photography',
        star: 7380,
      },
      {
        name: 'Flowers',
        star: 7414,
      },
      {
        name: 'Cake',
        star: 2140,
      },
      {
        name: 'Dress and Attire',
        star: 660,
      },
      {
        name: 'Band',
        star: 885,
      },
      {
        name: 'DJ',
        star: 1626,
      },
      {
        name: 'Videography',
        star: 1626,
      },
      {
        name: 'Invitations',
        star: 1626,
      },
      {
        name: 'Favors and Gifts',
        star: 1626,
      },
      {
        name: 'Officiant',
        star: 1626,
      },
      {
        name: 'Transportation',
        star: 1626,
      },
      {
        name: 'Beauty and Health',
        star: 1626,
      },
      {
        name: 'Jewelry',
        star: 1626,
      },
      {
        name: 'Rentals',
        star: 1626,
      },
      {
        name: 'Planning',
        star: 1626,
      },
    ];
    const config = {
      data: data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 10, 0, 10],
      meta: {
        star: {
          alias: 'star 数量',
          min: 0,
          nice: true,
          formatter: (v) => Number(v).toFixed(2),
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
    };
    return <Radar {...config} />;
  };

  const DemoPie = () => {
    const data = [
      {
        type: 'Catering',
        value: 27,
      },
      {
        type: 'Photography',
        value: 25,
      },
      {
        type: 'Flowers',
        value: 18,
      },
      {
        type: 'Cake',
        value: 15,
      },
      {
        type: 'Dress and Attire',
        value: 10,
      },
      {
        type: 'Band',
        value: 5,
      },
      {
        type: 'DJ',
        value: 5,
      },
      {
        type: 'Videography',
        value: 5,
      },
      {
        type: 'Invitations',
        value: 5,
      },
      {
        type: 'Favors and Gifts',
        value: 5,
      },
      {
        type: 'Officiant',
        value: 5,
      },
      {
        type: 'Transportation',
        value: 5,
      },
      {
        type: 'Beauty and Health',
        value: 5,
      },
      {
        type: 'Jewelry',
        value: 5,
      },
      {
        type: 'Rentals',
        value: 5,
      },
      {
        type: 'Planning',
        value: 5,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          content: 'EXPENSES',
        },
      },
    };
    return <Pie {...config} />;
  };

  //Sum estimating function
  const sum_of_array = 0;
  const sumWithInitial = category.reduce(
    (previousValue, currentValue) => previousValue + currentValue.value,
    sum_of_array
  );
  const [sum, setSum] = useState(sumWithInitial);

  const reEstimating = () => {
    const new_cost = category.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      sum_of_array
    );
    setSum(new_cost);
  };

  //show modal js
  const showModalAdd = () => {
    setIsModalVisible_add(true);
  };

  const showModalEdit = () => {
    setIsModalVisible_edit(true);
  };

  //scroll js
  const onScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
      setArray(category);
    }
  };

  //add category js
  const handleAdd = () => {
    var type = name;
    var value = parseInt(cost);
    if (type != null && value != null) {
      category.push({ type, value });
      console.log(category);
      setArray(category);
      reEstimating();
      setName(null);
      setCost(null);
    }
    setIsModalVisible_add(false);
  };

  //edit category js
  const getItem = (props) => category.indexOf(props);
  const handleEdit = () => {
    console.log(name, cost);
    var type = name;
    var value = parseInt(cost);
    console.log(getItem);
    if (type != null && value != null) {
      category.splice(getItem, 1);
      category.splice(getItem, 0, { type, value });
      console.log();
      setArray(category);
      reEstimating();
      setName(null);
      setCost(null);
    }
    setIsModalVisible_edit(false);
  };

  //delete category js
  const Remove = (props) => {
    // console.log(props.type)
    //console.log(category.indexOf(props))
    category.splice(category.indexOf(props), 1);
    setArray(category);
    reEstimating();
    setIsPopup(false);
  };

  //close modal js
  const handleCancelAdd = () => {
    setIsModalVisible_add(false);
  };

  const handleCancelEdit = () => {
    setIsModalVisible_edit(false);
  };

  return (
    <>
      <div className={clsx(styles.body)}>
        {/* Your Progress */}
        <div className={clsx(styles.services)}>
          <p className={clsx(styles.your_budget_text)}>Your Budget</p>
          <div className={clsx(styles.budget_list)}>
            {/* Row 1 */}
            <Row gutter={16} className={clsx(styles.budget_inner)}>
              <Col span={8} className={clsx(styles.col_line)}>
                <Card bordered={false} className={clsx(styles.detail)}>
                  <div className={clsx(styles.add_category_group)}>
                    <PlusCircleOutlined
                      className={clsx(styles.add_category)}
                      onClick={showModalAdd}
                    />
                    <p className={clsx(styles.add_text)} onClick={showModalAdd}>
                      Add new category
                    </p>
                  </div>

                  <List size='small' className={clsx(styles.list_category)}>
                    <VirtualList
                      data={array}
                      height={ContainerHeight}
                      itemHeight={47}
                      itemKey='category_item'
                      onScroll={onScroll}
                    >
                      {(item) => (
                        <List.Item className={clsx(styles.list_content)}>
                          <Card className={clsx(styles.list_item)}>
                            {item.type}{' '}
                            <span>
                              {item.value}00K vnd{' '}
                              <Popup
                                trigger={
                                  <EllipsisOutlined
                                    className={clsx(styles.edit_dot)}
                                  />
                                }
                                position='right center'
                                nested
                                disabled={isPopup}
                              >
                                <div className={clsx(styles.edit_button)}>
                                  <div className={clsx(styles.inner)}>
                                    <a
                                      onClick={() => {
                                        showModalEdit();
                                        getItem(item);
                                      }}
                                    >
                                      Edit
                                    </a>
                                    <br />
                                    <Divider
                                      className={clsx(styles.divider_edit)}
                                    />
                                    <a onClick={() => Remove(item)}>Remove</a>
                                  </div>
                                </div>
                              </Popup>
                            </span>
                          </Card>
                        </List.Item>
                      )}
                    </VirtualList>
                  </List>
                </Card>
              </Col>
              <Col span={15} className={clsx(styles.col_line)}>
                <Card bordered={false} className={clsx(styles.detail)}>
                  <div className={clsx(styles.budget_right_title)}>
                    <CalculatorOutlined
                      className={clsx(styles.estimating_icon)}
                    />
                    <p className={clsx(styles.chart_text)}>
                      Estimating cost: <t />
                      <span>{sum}</span>
                    </p>
                    <p className={clsx(styles.chart_text)}>
                      Target budget: <t />
                      <span>{sum}</span>
                    </p>
                  </div>

                  <div className={clsx(styles.target__group)}>
                    <Input
                      className={clsx(styles.input_budget)}
                      placeholder='Input your target budget'
                      type='number'
                      onChange={() => setSave(true)}
                    />

                    <Button
                      type='primary'
                      className={clsx(styles.save_btn)}
                      onClick={() => setSave(false)}
                    >
                      Save
                    </Button>
                  </div>
                  <div className={clsx(styles.chart_content)}>
                    <DemoPie className={clsx(styles.pie_chart)} />

                    <DemoRadar className={clsx(styles.radar_chart)} />
                    <p className={clsx(styles.chart_text)}>
                      Expenses tendency radar chart
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Modal
        className={clsx(styles.modal_add_category)}
        title='Add Category'
        visible={isModalVisible_add}
        onCancel={handleCancelAdd}
        onOk={handleAdd}
        okText='Add'
      >
        <Input
          className={clsx(styles.input_name_category)}
          placeholder='Input category name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className={clsx(styles.input_cost_category)}
          placeholder='Input Category Cost'
          type='number'
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </Modal>

      <Modal
        className={clsx(styles.modal_edit_category)}
        title='Edit Category'
        visible={isModalVisible_edit}
        onCancel={handleCancelEdit}
        onOk={handleEdit}
        okText='Save'
      >
        <Input
          className={clsx(styles.input_name_category)}
          placeholder='Edit Category Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className={clsx(styles.input_cost_category)}
          placeholder='Edit Category Cost'
          type='number'
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </Modal>
    </>
  );
};
