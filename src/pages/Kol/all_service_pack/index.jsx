import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, message, Modal, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardInfor } from '../../../components/CardInfor';
import {
  createPackageCategory,
  deletePack,
  getAllPackByKol,
  getAllPackCatagory,
  getServicePackById,
} from '../../../redux/kolSlice';
import './index.scss';

export const AllServicePack = () => {
  const packServices = useSelector((state) => state.kol?.packServices);
  const packageCategory = useSelector((state) => state.kol?.packageCategory);
  const [isVisible, setIsVisible] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('packServices', packServices);

  const handleEditPack = (idPack) => {
    navigate('edit?idPack=' + idPack);
  };

  useEffect(() => {
    const getServicePackageById = async () => {
      try {
        const actionResult = await dispatch(getServicePackById());
        const response = unwrapResult(actionResult);
        if (response) {
          message.success('Get service package success');
        }
      } catch (error) {}
    };
    getServicePackageById();
  }, []);

  useEffect(() => {
    const getPackServices = async () => {
      try {
        const actionResult = await dispatch(getAllPackByKol());
        const response = unwrapResult(actionResult);
        if (response) {
        }
      } catch (error) {}
    };
    getPackServices();
  }, []);

  useEffect(() => {
    const getPackCategory = async () => {
      try {
        const actionResult = await dispatch(getAllPackCatagory());
        const response = unwrapResult(actionResult);
        if (response) {
        }
      } catch (error) {}
    };
    getPackCategory();
  }, []);

  const handleCreatePack = () => {
    setIsVisible(true);
  };

  const onFinish = async (values) => {
    console.log(values);
    try {
      const actionResult = await dispatch(createPackageCategory(values));
      const response = unwrapResult(actionResult);
      if (response) {
        handleEditPack(response.id);

        message.success('Create service pack success');
      }
    } catch (error) {}
  };

  const handleDeletePack = async (packId) => {
    console.log(packId);
    try {
      const actionResult = await dispatch(deletePack(packId));
      const response = unwrapResult(actionResult);
      if (response) {
        dispatch(getAllPackByKol());
        message.success('Delete service pack success');
      }
    } catch (error) {}
  };

  const handleCancel = () => {};
  return (
    <div>
      <Button type='primary' onClick={handleCreatePack}>
        Create
      </Button>
      <div className={'vendor__service__container'}>
        {packServices.map((servive, index) => (
          <CardInfor
            textButton={'Edit'}
            key={index}
            className={'vendor__service__card'}
            handleAdd={() => handleEditPack(servive.id)}
            title={servive?.name}
            location={servive?.kolMiniResponse?.fullName}
            imgUrl={servive?.photo?.url}
            price={
              servive?.price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              }) + ' VND'
            }
            textButtonRemove={'Remove'}
            handleRemove={() => handleDeletePack(servive.id)}
          />
        ))}
      </div>
      <Modal
        className='add_category_child'
        visible={isVisible}
        onCancel={handleCancel}
        title={'Create service package'}
        maskClosable={false}
        okButtonProps={{ form: 'create-servicepack-empty', htmlType: 'submit' }}
      >
        <div className={''}>
          <Form
            id='create-servicepack-empty'
            name='basic'
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.Item
              label='Name'
              name='packTitle'
              rules={[
                { required: true, message: 'Please input service pack name!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Description'
              name='description'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item label='Theme' name='packCategoryId'>
              <Select
                // onChange={onSelectThemeChange}
                placeholder='theme'
                style={{ width: '100%' }}
                allowClear
              >
                {packageCategory &&
                  packageCategory.length > 0 &&
                  packageCategory.map((category) => (
                    <Select.Option value={category.id} key={category.id}>
                      {category.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
