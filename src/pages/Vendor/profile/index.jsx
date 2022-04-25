import { Form, Input, Button, Select, message } from 'antd';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { VendorChangePassModal } from '../modal_changePass';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getInforVendor, updateInforVendor } from '../../../redux/vendorSlice';

const { Option } = Select;

export const VendorProfile = () => {
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    const getInfor = async () => {
      try {
        const actionResult = await dispatch(getInforVendor());
        const response = unwrapResult(actionResult);
        if (response) {
          form.setFieldsValue({
            username: response.username,
            fullName: response.fullName,
            phone: response.phone,
            address: response.address,
            description: response.description,
            companyName: response.company,
            representative: response.fullName,
          });
        }
      } catch (error) {}
    };
    getInfor();
  }, []);

  const handleOk = () => {
    setIsModalEditVisible(false);
  };

  const handleCancel = () => {
    setIsModalEditVisible(false);
  };

  const handleOpenChangePass = () => {
    setIsModalEditVisible(true);
  };

  const onFinish = (values) => {
    const body = {
      companyName: values.companyName,
      representative: values.representative,
      phone: values.phone,
      address: values.address,
      username: values.username,
      categoryId: 1,
    };
    try {
      const actionResult = dispatch(updateInforVendor(body));
      const response = unwrapResult(actionResult);
      if (response === undefined) {
        message.success('update infor kol success');
      }
    } catch (error) {}
  };
  return (
    <div>
      <Form
        name='basic'
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete='off'
        form={form}
      >
        <Form.Item
          label='Company Name'
          name='companyName'
          rules={[
            { required: true, message: 'Please input your company name!' },
          ]}
        >
          <Input className={styles.input__antd} />
        </Form.Item>
        <Form.Item
          label='Representative'
          name='representative'
          rules={[
            {
              required: true,
              message: 'Please input your representative!',
            },
          ]}
        >
          <Input className={styles.input__antd} />
        </Form.Item>
        <Form.Item label='User Name' name='username'>
          <Input className={styles.input__antd} disabled />
        </Form.Item>
        <Form.Item
          label='Phone'
          name='phone'
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input className={styles.input__antd} />
        </Form.Item>
        <Form.Item
          label='Address'
          name='address'
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input className={styles.input__antd} />
        </Form.Item>
        <Form.Item label='Category' name='categoryId'>
          <Select style={{ width: 120 }} disabled>
            <Option value='1'>Studio</Option>
            <Option value='2'>Invitations</Option>
            <Option value='3'>{`Dress & Attire`}</Option>
            <Option value='4'>Jewelry</Option>
            <Option value='5'>Transportation</Option>
            <Option value='6'>Makeup</Option>
            <Option value='7'>{`Musicians & Bands`}</Option>
            <Option value='8'>Venues</Option>
            <Option value='9'>Cakes</Option>
            <Option value='10'>{`Lighting & Decor`}</Option>
            <Option value='11'>Officiants</Option>
            <Option value='12'>Travel Agents</Option>
            <Option value='13'>Event Agents</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Change Infor
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            type='primary'
            onClick={handleOpenChangePass}
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
      <VendorChangePassModal
        isModalEditVisible={isModalEditVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};
