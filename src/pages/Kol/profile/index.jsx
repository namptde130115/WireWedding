import { Form, Input, Button, Select, message, Upload } from 'antd';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { VendorChangePassModal } from '../modal_changePass';
import { getInforKol, updateInforKol } from '../../../redux/kolSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const { Option } = Select;

export const KolProfile = () => {
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const constGetInforKol = async () => {
      try {
        const actionResult = await dispatch(getInforKol());
        const response = unwrapResult(actionResult);
        if (response) {
          form.setFieldsValue({
            username: response.username,
            fullName: response.fullName,
            phone: response.phone,
            address: response.address,
            description: response.description,
          });
        }
      } catch (error) {}
    };
    constGetInforKol();
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

  const onFinish = async (values) => {
    try {
      const actionResult = await dispatch(
        updateInforKol({ ...values, email: values.username })
      );
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('update infor kol success');
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item label='User Name' name='username'>
          <Input className={styles.input__antd} disabled />
        </Form.Item>
        <Form.Item label='Full Name' name='fullName'>
          <Input className={styles.input__antd} />
        </Form.Item>
        <Form.Item label='Phone' name='phone'>
          <Input className={styles.input__antd} />
        </Form.Item>
        <Form.Item label='Address' name='address'>
          <Input className={styles.input__antd} />
        </Form.Item>
        <Form.Item label='Description' name='description'>
          <Input className={styles.input__antd} />
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
