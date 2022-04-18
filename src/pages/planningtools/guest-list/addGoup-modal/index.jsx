import { Input, Modal } from 'antd';
import { FormItem } from '../../../../components/FormItem';

export const AddGroupModal = ({ title, visible, onOk, onCancel }) => {
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
      <FormItem title='Name'>
        <Input type='text' />
      </FormItem>
      <FormItem title='Phone Number'>
        <Input type='text' />
      </FormItem>
      <FormItem title='Mail'>
        <Input type='text' />
      </FormItem>
      <FormItem title='Age'>
        <Input type='text' />
      </FormItem>
    </Modal>
  );
};
