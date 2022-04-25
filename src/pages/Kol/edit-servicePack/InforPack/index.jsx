import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Input, message, Select, Button } from 'antd';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCustom } from '../../../../components/ButtonCustom';
import {
  getAllPackCatagory,
  getServicePackById,
  updateServiceByPack,
} from '../../../../redux/kolSlice';
import styles from './index.module.scss';
const { TextArea } = Input;

export const PackInfor = () => {
  const dispatch = useDispatch();

  const packageCategory = useSelector((state) => state.kol?.packageCategory);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const packId = urlParams.get('idPack');
  const currentPack = useSelector((state) => state.kol?.currentPack);

  console.log(currentPack);

  const [form] = Form.useForm();

  useEffect(() => {
    const getCurrentPack = async () => {
      try {
        const actionResult = await dispatch(getServicePackById(packId));
        const response = unwrapResult(actionResult);
        if (response) {
          form.setFieldsValue({
            packTitle: response.name,
            description: response.description,
            packCategoryId: response.packageCategoryId,
          });
        }
      } catch (error) {}
    };
    getCurrentPack();
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

  const onFinish = async (values) => {
    // updateServiceByPack
    const body = {
      packId: packId,
      data: values,
    };
    try {
      const actionResult = await dispatch(updateServiceByPack(body));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Update category success');
      }
    } catch (error) {}
  };

  return (
    <div className={clsx(styles.createPack_details)}>
      <Form
        form={form}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
        className={styles.form_updatePack}
      >
        <div className={clsx(styles.pack_name)}>
          <label>Service pack name</label>
          <Form.Item name='packTitle'>
            <Input placeholder='Service pack name' />
          </Form.Item>
        </div>
        <div className={clsx(styles.pack_amount)}>
          <p className={clsx(styles.title)}>Total price: </p>
          <p className={clsx(styles.amount)}>1000000</p>
        </div>
        <div className={clsx(styles.pack_description)}>
          <p className={clsx(styles.title)}>Description</p>
          <div className={clsx(styles.input_description)}>
            <Form.Item name='description'>
              <TextArea rows={4} placeholder='Description here' />
            </Form.Item>
          </div>
        </div>
        <div className={clsx(styles.pack_theme)}>
          <p className={clsx(styles.title)}>Choose theme</p>
          <Form.Item name='packCategoryId'>
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
        </div>
        <div className={clsx(styles.button_container)}>
          <Button
            type='primary'
            htmlType='submit'
            // onClick={handleCreateServicePack}
          >
            Save
          </Button>
          <Button type='ghost'>Cancel</Button>
        </div>
      </Form>
    </div>
  );
};
