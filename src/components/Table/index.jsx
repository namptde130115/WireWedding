import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'chup anh',
    category: 'photo',
    price: 234000,
  },
  {
    key: '2',
    name: 'chup anh sieu pro',
    category: 'photo',
    price: 456000,
  },
  {
    key: '3',
    name: 'chup anh ga',
    category: 'photo',
    price: 123000,
  },
];

export const ServiceTable = ({}) => {
    return (
        <Table columns={columns} dataSource={data} />
    );
}