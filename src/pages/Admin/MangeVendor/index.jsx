import './index.scss';
import { Table, Tag, Space, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllVendors, updateVendor } from '../../../redux/adminSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const { Option } = Select;

export const ManageVendorTable = () => {
  const dataVendors = useSelector((state) => state.admin.vendors);
  const [isLoading, setIsLoading] = useState(true);
  const [currentVendor, setCurrentVendor] = useState({});
  const [currentStatus, setCurrentStatus] = useState();

  // console.log(dataVendors);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAll = async () => {
      try {
        const actionResult = await dispatch(getAllVendors());
        const response = unwrapResult(actionResult);
        if (response) {
          setIsLoading(false);
        }
      } catch (error) {}
    };
    getAll();
  }, []);

  const showModal = (record) => {
    console.log(record);
    setCurrentVendor(record);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const body = {
      id: currentVendor.id,
      status: { status: currentStatus },
    };
    console.log(body);
    try {
      const actionResult = await dispatch(updateVendor(body));
      const response = unwrapResult(actionResult);
      if (response) {
        dispatch(getAllVendors());
        setIsModalVisible(false);
      }
    } catch (error) {}
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function handleChange(value) {
    console.log(`selected `, parseInt(value));
    setCurrentStatus(parseInt(value));
  }

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status, index) => (
        <>
          <Tag color={handleColor(status)} key={index}>
            {status === 0 ? 'Deactive' : 'Active'}
          </Tag>
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          <a onClick={() => showModal(record)} className='more__action'>
            More
          </a>
        </Space>
      ),
    },
  ];

  const handleColor = (status) => {
    if (status === 0) {
      return 'red';
    } else {
      return 'green';
    }
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataVendors}
        rowKey='id'
        loading={isLoading}
      />
      <Modal
        title='Infor Kol'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{currentVendor.username}</p>
        <p>{currentVendor.address}</p>
        <p>Some contents...</p>
        <Select
          defaultValue={currentVendor?.status?.toString()}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value='0'>Deactive</Option>
          <Option value='1'>Active</Option>
        </Select>
      </Modal>
    </>
  );
};
