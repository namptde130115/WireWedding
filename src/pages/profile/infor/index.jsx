import { FormItem } from '../../../components/FormItem';
import { DatePicker } from 'antd';
import styles from './index.module.scss';
import clsx from 'clsx';

export const InforProfile = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div>
      <form action='' className={clsx(styles.form__container)}>
        <p>ACCOUNT INFORMATION</p>
        <FormItem title='Full name'>
          <input type='text' />
        </FormItem>
        <FormItem title='Email'>
          <input type='text' />
        </FormItem>
        <FormItem title='Phone'>
          <input type='text' />
        </FormItem>
        <FormItem title='Address'>
          <input type='text' />
        </FormItem>
        <FormItem title='Weeding date'>
          <DatePicker onChange={onChange} />
        </FormItem>
      </form>

      <form action='' className={clsx(styles.form__container)}>
        <p>CHANGE PASSWORD</p>
        <FormItem title='Current password'>
          <input type='text' />
        </FormItem>
        <FormItem title='New password'>
          <input type='text' />
        </FormItem>
        <FormItem title='Confirm password'>
          <input type='text' />
        </FormItem>
      </form>
    </div>
  );
};
