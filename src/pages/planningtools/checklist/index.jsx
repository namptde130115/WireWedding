import { DatePicker, Input, Progress, Button } from 'antd';
import { FormItem } from '../../../components/FormItem';
import { CheckListItem } from './check-list-item';
import styles from './index.module.scss';
import clsx from 'clsx';

export const CheckList = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className={clsx(styles.checklist__container)}>
      <p className={clsx(styles.your_service_text)}>Your Check List</p>
      <div className={clsx(styles.checklist)}>
        <div className={styles.progress}>
          <span>Progress: </span>
          <Progress percent={30} className={clsx(styles.progress)} />
        </div>
        <FormItem title='New Todos:' className={clsx(styles.new__todos)}>
          <Input type='text' placeholder='Input new todos' />
          <DatePicker
            onChange={onChange}
            className={clsx(styles.time__picker)}
          />
          <Button type='primary' className={clsx(styles.btn__add)}>
            Add
          </Button>
        </FormItem>

        <div>
          <CheckListItem
            isShowCheck={true}
            title={'check item 1'}
            day={'20/11/2022'}
          />
          <CheckListItem
            isShowCheck={true}
            title={'check item 1'}
            day={'20/11/2022'}
          />
          <CheckListItem
            isShowCheck={true}
            title={'check item 1'}
            day={'20/11/2022'}
          />
        </div>
      </div>
    </div>
  );
};
