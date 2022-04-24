import './index.scss';
import { Table, Tag, Space, Modal, Select, message, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllVendors, updateVendor } from '../../../redux/adminSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const ManageVendorTable = () => {
  const dataVendors = useSelector((state) => state.admin.vendors);
  const [isLoading, setIsLoading] = useState(true);
  const [switchLoading, setSwitchLoading] = useState(false);
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
    setCurrentVendor(record);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
            {status ? 'Active' : 'Deactive'}
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
    if (status) {
      return 'green';
    } else {
      return 'red';
    }
  };

  const onChange = async (checked) => {
    setSwitchLoading(true);
    try {
      const actionResult = await dispatch(updateVendor(currentVendor.id));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Update Successfully');
        dispatch(getAllVendors());
        setSwitchLoading(false);
        setIsModalVisible(false);
      }
    } catch (error) {
      message.error('Update Failed');
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
        scroll={{ y: 'calc(100vh - 180px)' }}
        // width={'100%'}
      />
      {isModalVisible && (
        <Modal
          title='Infor Kol'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <p>UserName: {currentVendor.username}</p>
          <p>Full Name: {currentVendor.fullName}</p>
          <p>Address: {currentVendor.address}</p>
          <p>Company: {currentVendor.company}</p>
          <p>Phone: {currentVendor.phone}</p>
          <p>Desciption: </p>
          <p style={{ display: 'inline' }}>Status: </p>
          <Switch
            onChange={onChange}
            defaultChecked={currentVendor.status}
            loading={switchLoading}
          />
        </Modal>
      )}
    </>
  );
};
