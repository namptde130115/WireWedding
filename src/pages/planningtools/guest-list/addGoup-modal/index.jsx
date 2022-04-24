import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Input, message, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { updateGroupName } from '../../../../redux/customerSlice';

export const AddGroupModal = ({
  title,
  visible,
  onOk,
  onCancel,
  idGroup,
  rerenderList,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const body = {
      id: idGroup,
      data: values,
    };
    try {
      const actionResult = await dispatch(updateGroupName(body));
      const respone = unwrapResult(actionResult);
      if (respone) {
        message.success('add guest success');
        form.resetFields();
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
      okButtonProps={{ form: 'crete-member-form', htmlType: 'submit' }}
    >
      <Form
        form={form}
        id='crete-member-form'
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
