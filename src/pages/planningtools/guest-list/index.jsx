import styles from './index.module.scss';
import clsx from 'clsx';
import { FormItem } from '../../../components/FormItem';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ButtonCustom } from '../../../components/ButtonCustom';
import { EditModal } from './edit-modal';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { AddGroupModal } from './addGoup-modal';
import { CheckListItem } from '../checklist/check-list-item';
import { useSelector } from 'react-redux';

export const GuestList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const allGroup = useSelector((state) => state.customer.allGroup);

  const handleOnOk = () => {
    setIsVisible(false);
  };

  const handleOpenAddGroup = () => {
    setIsVisible(true);
  };
  return (
    <div className={styles.body}>
      <p className={clsx(styles.your_service_text)}>Your Guest List</p>
      <FormItem title='Group Name:' className={clsx(styles.groupname)}>
        <Input type='text' placeholder='Group Name' />
        <div>
          <Button type='primary'>+ Group</Button>
        </div>
      </FormItem>
      <div className={clsx(styles.guest__container)}>
        <div>
          <CheckListItem />
        </div>
        <div className={clsx(styles.guest)}>
          <label className={clsx(styles.guest__checkbox)}>
            <input type='checkbox' />
            <span className={clsx(styles.checkmark)}></span>
          </label>
          <div className={clsx(styles.guest__name)}>Pham Trung Nam</div>
          <div className={clsx(styles.guest__phone)}>0999777888</div>
          <div className={clsx(styles.guest__controll)}>
            <EditOutlined
              className={clsx(styles.icon__edit, styles.icon)}
              onClick={() => setIsVisible(true)}
            />
            <DeleteOutlined
              className={clsx(styles.icon__delete, styles.icon)}
            />
            <ButtonCustom
              type='primary'
              text='+ Member'
              className={clsx(styles.addguest__btn)}
              onClick={handleOpenAddGroup}
            />
          </div>
        </div>
      </div>
      <EditModal
        title='Edit Guest'
        visible={isVisible}
        onOk={handleOnOk}
        onCancel={handleOnOk}
      />
      <AddGroupModal
        title='Add Group'
        visible={isVisible}
        onOk={handleOnOk}
        onCancel={handleOnOk}
      />
    </div>
  );
};
