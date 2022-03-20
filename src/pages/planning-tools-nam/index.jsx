import { DatePicker, Progress } from 'antd';
import { FormItem } from '../../components/FormItem';
import { CheckListItem } from './check-list-item';
import styles from './index.module.scss';
import clsx from 'clsx';
import { ManageListItems } from './manage-list';

export const CheckList = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <Progress percent={30} className={clsx(styles.progress)} />
      <FormItem title='New Todos:' className={clsx(styles.new__todos)}>
        <input type='text' placeholder='Input new todos' />
        <DatePicker onChange={onChange} className={clsx(styles.time__picker)} />
      </FormItem>

      <div>
        <CheckListItem title={'check item 1'} day={'20/11/2022'} />
        <CheckListItem title={'check item 1'} day={'20/11/2022'} />
        <CheckListItem title={'check item 1'} day={'20/11/2022'} />
      </div>

      <div>
        <ManageListItems />
      </div>
    </div>
  );
};
