import { DatePicker, Input, Progress, Button } from "antd";
import { FormItem } from "../../../components/FormItem";
import { CheckListItem } from "./check-list-item";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";
import {
  getCheckList,
  addCheckListTask,
} from "../../../redux/customerSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

export const CheckList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState('');useState(new Date());

  const checkList = useSelector((state) => state.customer?.allTask);
  console.log("checkList: ", checkList);
  useEffect(() => {
    const getAllCheckList = async () => {
      try {
        const actionResult = await dispatch(getCheckList());
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) {}
    };
    getAllCheckList();
  }, []);

  const handleAddTask = async () => {
    const body = {
      name: title,
      deadline: dueDate,
    };
    try {
      const actionResult = await dispatch(addCheckListTask(body));
      const response = unwrapResult(actionResult);
      if (response) {
        dispatch(getCheckList());
      }
    } catch (error) {}
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChange = (date, dateString) => {
    console.log(dateString);
    // setDueDate(dateString);
  };
  // const onChange = (e) => {
  //   setValue("dueDate", e.target.value);
  // };

  return (
    <div className={clsx(styles.checklist__container)}>
      <p className={clsx(styles.your_service_text)}>Your Check List</p>
      <div className={clsx(styles.checklist)}>
        <div className={styles.progress}>
          <span>Progress: </span>
          <Progress percent={30} className={clsx(styles.progress)} />
        </div>
        <FormItem title="New Todos:" className={clsx(styles.new__todos)}>
          <Input
            value={title}
            onChange={handleChangeTitle}
            type="text"
            placeholder="Input new todos"
          />
          <DatePicker
            // value={dueDate}
            // onChange={onChange}
            selected={dueDate} 
            onChange={dueDate => setDueDate(dueDate)} 
            className={clsx(styles.time__picker)}
          />
          <Button
            type="primary"
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
              title="mmmmmmmm"
              day={item.dueDate}
            />
          ))}
          {/* <CheckListItem
            isShowCheck={true}
            title={'check item 1'}
            day={'20/11/2022'}
          />
          <CheckListItem
            isShowCheck={true}
            title={'check item 1'}
            day={'20/11/2022'}
          /> */}
        </div>
      </div>
    </div>
  );
};
