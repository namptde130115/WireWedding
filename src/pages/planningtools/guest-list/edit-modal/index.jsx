import { Modal } from 'antd';
import { FormItem } from '../../../../components/FormItem';

export const EditModal = ({ title, visible, onOk, onCancel }) => {
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
      <FormItem title='Name'>
        <input type='text' />
      </FormItem>
      <FormItem title='Phone Number'>
        <input type='text' />
      </FormItem>
      <FormItem title='Mail'>
        <input type='text' />
      </FormItem>
      <FormItem title='Age'>
        <input type='text' />
      </FormItem>
    </Modal>
  );
};
