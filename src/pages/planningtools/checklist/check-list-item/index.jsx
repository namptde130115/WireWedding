import styles from './index.module.scss';
import clsx from 'clsx';

import {
  EditOutlined,
  DeleteOutlined,
  CheckSquareOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { DatePicker, message } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { Input } from 'antd';
import {
  deleteCheckList,
  editContentCheckList,
  editStatusChecklist,
  getCheckList,
} from '../../../../redux/customerSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

export const CheckListItem = ({
  idCheck,
  isShowCheck,
  title,
  day,
  titleChange,
}) => {
  const [isEdit, setIsEdit] = useState(title);
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [deadline, setDeadline] = useState();
  const dispatch = useDispatch();

  const dateFormat = 'YYYY/MM/DD';

  const handleEditInput = (e) => {
    setIsEdit(e.target.value);
  };

  const handleSaveChecklist = async (e) => {
    e.stopPropagation();
    const body = {
      id: idCheck,
      data: {
        name: isEdit,
        deadline: deadline,
        description: 'huy dep trai',
      },
    };

    try {
      const actionResult = await dispatch(editContentCheckList(body));
      const response = unwrapResult(actionResult);
      if (response) {
        dispatch(getCheckList());
        setIsVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const onChangePicker = (date, dateString) => {
    setDeadline(dateString);
  };

  const handleUnChecked = async () => {
    try {
      const actionResult = await dispatch(editStatusChecklist(idCheck));
      const response = unwrapResult(actionResult);
      if (response) {
        dispatch(getCheckList());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteChecklist = async () => {
    try {
      const actionResult = await dispatch(deleteCheckList(idCheck));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Delete checklist success');
        dispatch(getCheckList());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={clsx(styles.checklist__items)}>
      <CheckSquareOutlined
        onClick={handleUnChecked}
        className={clsx(
          {
            [styles.is__checked]: !isShowCheck,
          },
          styles.icon__check,
          styles.icon
        )}
      />

      <div className={clsx(styles.content)}>
        <Input
          className={clsx({ [styles.visible__input]: isVisible }, styles.input)}
          value={isEdit}
          onChange={handleEditInput}
          type='text'
          readOnly={isVisible}
        />
      </div>
      <DatePicker
        className={clsx(styles.time__picker)}
        format={dateFormat}
        disabled={isVisible}
        onChange={onChangePicker}
        defaultValue={moment(day, dateFormat)}
      />
      <div className={clsx(styles.control)}>
        {isVisible ? (
          <EditOutlined
            className={clsx(styles.icon__edit, styles.icon)}
            onClick={handleEdit}
          />
        ) : (
          <SaveOutlined
            className={clsx(styles.icon, styles.icon__save)}
            onClick={handleSaveChecklist}
          />
        )}
        <DeleteOutlined
          className={clsx(styles.icon__delete, styles.icon)}
          onClick={handleDeleteChecklist}
        />
      </div>
    </div>
  );
};
