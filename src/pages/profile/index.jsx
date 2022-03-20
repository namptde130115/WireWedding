import { ProfileLayout } from '../../layout/profile';
import { PaymentInfor } from '../payment-infor';
import { CheckList } from '../planning-tools-nam';
import { FavoriteProfile } from './favorites/index';
import { InforProfile } from './infor/index';
import { Notification } from './notification';
import { Payment } from './payment-history';

export const ProfilePage = () => {
  return (
    <ProfileLayout title='Profile'>
      {/* <InforProfile /> */}
      <FavoriteProfile />
      <Notification
        title='lorem Ipsum kasjdalksjdlakjdqiwjd'
        day='09/02/2021'
        time='10:00'
      />
      <Payment />
      <PaymentInfor />
      <CheckList />
    </ProfileLayout>
  );
};
