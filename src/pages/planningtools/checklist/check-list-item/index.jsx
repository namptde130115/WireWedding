import styles from './index.module.scss';
import clsx from 'clsx';

import {
  CloseSquareOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckSquareOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Input } from 'antd';

export const CheckListItem = ({ isShowCheck, title, day }) => {
  const [isEdit, setIsEdit] = useState(title);
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const handleEdit = (e) => {
    setIsEdit(e.target.value);
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleUnChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={clsx(styles.checklist__items)}>
      {isShowCheck && (
        <CheckSquareOutlined
          onClick={handleUnChecked}
          className={clsx(
            {
              [styles.is__checked]: isChecked,
            },
            styles.icon__check,
            styles.icon
          )}
        />
      )}
      <div className={clsx(styles.content)}>
        <Input
          className={clsx({ [styles.visible__input]: isVisible }, styles.input)}
          value={isEdit}
          onChange={handleEdit}
          type='text'
          readOnly={isVisible}
        />
      </div>
      {day && <div className={clsx(styles.day)}>{day}</div>}
      <div>
        {isVisible ? (
          <EditOutlined
            className={clsx(styles.icon__edit, styles.icon)}
            onClick={handleVisible}
          />
        ) : (
          <SaveOutlined
            onClick={handleVisible}
            className={clsx(styles.icon, styles.icon__save)}
          />
        )}
        <DeleteOutlined className={clsx(styles.icon__delete, styles.icon)} />
      </div>
    </div>
  );
};
