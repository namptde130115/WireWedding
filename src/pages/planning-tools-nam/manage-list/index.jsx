import styles from './index.module.scss';
import clsx from 'clsx';
import { FormItem } from '../../../components/FormItem';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ButtonCustom } from '../../../components/ButtonCustom';
import { EditModal } from '../edit-modal';
import { useState } from 'react';

export const ManageListItems = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnOk = () => {
    setIsVisible(false);
  };
  return (
    <div>
      <FormItem title='Group Name:' className={clsx(styles.groupname)}>
        <input type='text' placeholder='Group Name' />
        <div>
          <EditOutlined
            className={clsx(styles.icon__edit, styles.icon)}
            // onClick={handleVisible}
          />
          <DeleteOutlined className={clsx(styles.icon__delete, styles.icon)} />
        </div>
      </FormItem>
      <div className={clsx(styles.guest__container)}>
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
              text='Create'
              className={clsx(styles.addguest__btn)}
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
    </div>
  );
};
