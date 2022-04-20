import './index.scss';
import { Table, Tag, Space, Modal, Select, message } from 'antd';
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
  console.log(currentVendor);

  const handleOk = async () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = async (value) => {
    console.log(`selected `, value);
    try {
      const actionResult = await dispatch(updateVendor(currentVendor.id));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Update Successfully');
        dispatch(getAllVendors());
        setIsModalVisible(false);
      }
    } catch (error) {
      message.error('Update Failed');
    }
  };

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
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
        dataSource={dataVendors?.vendorProviderResponses}
        rowKey='id'
        loading={isLoading}
        pagination={false}
      />
      <Modal
        title='Infor Kol'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>UserName: {currentVendor.username}</p>
        <p>Full Name: {currentVendor.fullName}</p>
        <p>Address: {currentVendor.address}</p>
        <p>Company: {currentVendor.company}</p>
        <p>Phone: {currentVendor.phone}</p>
        <p>Desciption: </p>
        <p style={{ display: 'inline' }}>Status: </p>
        <Select
          defaultValue={currentVendor?.status}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value={false}>Deactive</Option>
          <Option value={true}>Active</Option>
        </Select>
      </Modal>
    </>
  );
};
