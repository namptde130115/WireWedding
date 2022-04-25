import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Input, message, Modal } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateGuest } from '../../../../redux/customerSlice';

export const EditModal = ({
  title,
  visible,
  onOk,
  onCancel,
  guest,
  idGroup,
  rerenderList,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    if (guest) {
      form.setFieldsValue({
        fullName: guest?.fullName,
        phone: guest?.phone,
        mail: guest?.mail,
        address: guest?.address,
      });
    }
  }, [visible]);

  const onFinish = async (values) => {
    const body = {
      guestListId: idGroup,
      guestId: guest.id,
      data: values,
    };
    console.log(body);
    try {
      const actionResult = await dispatch(updateGuest(body));
      const respone = unwrapResult(actionResult);
      if (respone) {
        message.success('update guest success');
        // form.resetFields();
        rerenderList();
        onCancel();
      }
    } catch (error) {}
    console.log('Success:', values);
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      maskClosable={false}
      okButtonProps={{ form: 'update-member-form', htmlType: 'submit' }}
    >
      <Form
        form={form}
        id='update-member-form'
        name='basic'
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label='Full Name'
          name='fullName'
          rules={[{ required: true, message: 'Please input Full Name!' }]}
        >
          <Input type='text' />
        </Form.Item>
        <Form.Item
          label='Phone Number'
          name='phone'
          rules={[{ required: true, message: 'Please input service name!' }]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item
          label='Mail'
          name='mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input type='text' />
        </Form.Item>
        <Form.Item
          label='Address'
          name='address'
          rules={[{ required: true, message: 'Please input Address!' }]}
        >
          <Input type='text' />
        </Form.Item>
      </Form>
    </Modal>
  );
};
