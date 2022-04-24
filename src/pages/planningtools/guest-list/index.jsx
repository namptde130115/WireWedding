import styles from './index.module.scss';
import clsx from 'clsx';
import { FormItem } from '../../../components/FormItem';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ButtonCustom } from '../../../components/ButtonCustom';
import { EditModal } from './edit-modal';
import { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
import { AddGroupModal } from './addGoup-modal';
import { CheckListItem } from '../checklist/check-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { createGroup, getAllGroup } from '../../../redux/customerSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { GroupItem, GuestItem } from './guest-item';

export const GuestList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);
  const [isNoResult, setNoResult] = useState(true);
  const [currentGuest, setCurrentGuest] = useState(null);
  const [currentIdGroupGuest, setCurrentIdGroupGuest] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [currentId, setCurrentId] = useState('');
  const dispatch = useDispatch();
  const allGroup = useSelector((state) => state.customer.allGroup);

  useEffect(() => {
    const getAllGuestList = async () => {
      try {
        const actionResult = await dispatch(getAllGroup());
        const response = unwrapResult(actionResult);
        if (response.message === 'No results') {
          setNoResult = true;
        } else {
          setNoResult(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllGuestList();
  }, []);

  const createGroupGuest = async () => {
    try {
      const actionResult = await dispatch(createGroup({ name: groupName }));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Create group success');
        setGroupName('');
        dispatch(getAllGroup());
      }
    } catch (error) {
      message.error('Some thing wrong, try again');
    }
  };

  const handleDeleteGuest = () => {
    console.log('aaaaa');
  };

  const handleGetGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleOnOk = () => {
    setIsVisible(false);
  };

  const handleOpenAddGroup = (id) => {
    setIsVisible(true);
    setCurrentId(id);
  };

  const handleOpenModalEdit = (guest, id) => {
    setCurrentGuest(guest);
    setCurrentIdGroupGuest(id);
    setIsVisibleEdit(true);
  };

  const handleCancelEdit = () => {
    setIsVisibleEdit(false);
  };
  return (
    <div className={styles.body}>
      <p className={clsx(styles.your_service_text)}>Your Guest List</p>
      <FormItem title='Group Name:' className={clsx(styles.groupname)}>
        <Input
          type='text'
          placeholder='Group Name'
          value={groupName}
          onChange={handleGetGroupName}
        />
        <div>
          <Button type='primary' onClick={createGroupGuest}>
            + Group
          </Button>
        </div>
      </FormItem>
      {isNoResult ? (
        <div className={clsx(styles.nogroup_text)}>
          Let's make your own guest list !
        </div>
      ) : (
        allGroup.map((item, index) => (
          <div className={clsx(styles.guest__container)} key={index}>
            <div className={clsx(styles.guest__group)}>
              <GroupItem
                title={item.name}
                isGuestList={true}
                idCheck={item.id}
              />
              <ButtonCustom
                type='primary'
                text='+ Member'
                className={clsx(styles.addguest__btn)}
                onClick={() => handleOpenAddGroup(item.id)}
              />
            </div>
            {item?.guestResponses.length > 0 ? (
              item?.guestResponses.map((guest, index) => (
                <div className={clsx(styles.guest)} key={index}>
                  <div className={clsx(styles.guest__name)}>
                    {guest.fullName}
                  </div>
                  <div className={clsx(styles.guest__phone)}>{guest.phone}</div>
                  <div className={clsx(styles.guest__controll)}>
                    <EditOutlined
                      className={clsx(styles.icon__edit, styles.icon)}
                      onClick={() => handleOpenModalEdit(guest, item.id)}
                    />
                    <DeleteOutlined
                      className={clsx(styles.icon__delete, styles.icon)}
                      onClick={handleDeleteGuest}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>No guest here</div>
            )}
          </div>
        ))
      )}
      {isVisibleEdit && (
        <EditModal
          title='Edit Guest'
          visible={isVisibleEdit}
          onOk={handleOnOk}
          onCancel={handleCancelEdit}
          guest={currentGuest}
          idGroup={currentIdGroupGuest}
          rerenderList={() => dispatch(getAllGroup())}
        />
      )}
      <AddGroupModal
        rerenderList={() => dispatch(getAllGroup())}
        idGroup={currentId}
        title='Add Group'
        visible={isVisible}
        onOk={handleOnOk}
        onCancel={handleOnOk}
      />
    </div>
  );
};
