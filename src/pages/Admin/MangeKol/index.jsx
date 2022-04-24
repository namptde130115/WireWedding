import './index.scss';
import { Table, Tag, Space, Modal, Select, message, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllKols, updateKol } from '../../../redux/adminSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const ManageKolTable = () => {
  const dataKols = useSelector((state) => state.admin.kols);
  const [isLoading, setIsLoading] = useState(true);
  const [currentVendor, setCurrentVendor] = useState({});
  const [switchLoading, setSwitchLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState();

  // console.log(dataVendors);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAll = async () => {
      try {
        const actionResult = await dispatch(getAllKols());
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
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = async (checked) => {
    console.log(`switch to ${checked}`);
    setSwitchLoading(true);
    try {
      const actionResult = await dispatch(updateKol(currentVendor.id));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Update Successfully');
        dispatch(getAllKols());
        setSwitchLoading(false);
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

  const arr = [{ key: '1', value: 'Active' }, { key: '2', value: 'Deactive' }];
  arr.map((item) =>  {return })

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataKols?.kolResponses}
        rowKey='id'
        loading={isLoading}
        pagination={false}
        scroll={{ y: 'calc(100vh - 180px)' }}
      />
      {isModalVisible && (
        <Modal
          title='Infor Kol'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <p>User Name: {currentVendor.username}</p>
          <p>Full Name: {currentVendor.fullName}</p>
          <p>Address: {currentVendor.address}</p>
          <p>Phone: {currentVendor.phone}</p>
          <p>Desciption: </p>
          <p>Some contents...</p>
          <p style={{ display: 'inline' }}>Status: </p>
          <Switch
            onChange={onChange}
            loading={switchLoading}
            defaultChecked={currentVendor.status}
          />
        </Modal>
      )}
    </>
  );
};
