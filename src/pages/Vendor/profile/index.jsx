import { Form, Input, Button, Select, message, Upload } from 'antd';
import styles from './index.module.scss';
import { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { VendorChangePassModal } from '../modal_changePass';

const { Option } = Select;

export const VendorProfile = () => {
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);

  const [imageUrl, setImageUrl] = useState(
    'https://vcdn-thethao.vnecdn.net/2022/04/08/ronaldo-2-20000991-jpeg-164938-7316-3087-1649389677.jpg'
  );
  const [loading, setLoading] = useState();

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  const handleOk = () => {
    setIsModalEditVisible(false);
  };

  const handleCancel = () => {
    setIsModalEditVisible(false);
  };

  const handleOpenChangePass = () => {
    setIsModalEditVisible(true);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <div>
      <Upload
        name='avatar'
        listType='picture-card'
        className='avatar-uploader'
        showUploadList={false}
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <Form
        name='basic'
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete='off'
        initialValues={{
          categoryId: '1',
        }}
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
        <Form.Item
          label='User Name'
          name='username'
          rules={[{ required: true, message: 'Please input your user name!' }]}
        >
          <Input className={styles.input__antd} />
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
          <Select style={{ width: 120 }}>
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
