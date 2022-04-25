import { DatePicker, Input, Progress, Button, message } from 'antd';
import { FormItem } from '../../../components/FormItem';
import { CheckListItem } from './check-list-item';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import {
  getCheckList,
  addCheckListTask,
} from '../../../redux/customerSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

export const CheckList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [progress, setProgress] = useState(0);
  const dateFormat = 'YYYY/MM/DD';

  const checkList = useSelector((state) => state.customer?.allTask);

  useEffect(() => {
    const getAllCheckList = async () => {
      try {
        const actionResult = await dispatch(getCheckList());
        const response = await unwrapResult(actionResult);
        if (response) {
          message.success('Get all check list success');
        }
      } catch (error) {}
    };
    getAllCheckList();
  }, []);

  const handleAddTask = async () => {
    const body = {
      name: title,
      deadline: dueDate,
      description: 'huy dep trai',
    };
    try {
      const actionResult = await dispatch(addCheckListTask(body));
      const response = unwrapResult(actionResult);
      if (response) {
        setTitle('');
        dispatch(getCheckList());
      }
    } catch (error) {}
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChange = (date, dateString) => {
    setDueDate(dateString);
  };

  return (
    <div className={clsx(styles.checklist__container)}>
      <p className={clsx(styles.your_service_text)}>Your Check List</p>
      <div className={clsx(styles.checklist)}>
        <div className={styles.progress}>
          <span>Progress: </span>
          <Progress
            percent={
              Array.isArray(checkList)
                ? Math.round(
                    (checkList?.filter((item) => item.status === true).length /
                      checkList.length) *
                      100
                  )
                : 0
            }
            className={clsx(styles.progress)}
          />
        </div>
        <FormItem title='New Todos:' className={clsx(styles.new__todos)}>
          <Input
            value={title}
            onChange={handleChangeTitle}
            type='text'
            placeholder='Input new todos'
          />
          <DatePicker
            format={dateFormat}
            selected={dueDate}
            onChange={onChange}
            className={clsx(styles.time__picker)}
          />
          <Button
            type='primary'
            className={clsx(styles.btn__add)}
            onClick={handleAddTask}
          >
            Add
          </Button>
        </FormItem>

        <div>
          {checkList?.map((item) => (
            <CheckListItem
              key={item?.id}
              isShowCheck={item.status}
              title={item.name}
              day={
                item.dueDate &&
                `${item?.dueDate[0]}/${item?.dueDate[1]}/${item?.dueDate[2]}`
              }
              idCheck={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
