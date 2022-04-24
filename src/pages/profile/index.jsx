import { ProfileLayout } from '../../layout/profile';
import { FavoriteProfile } from './favorites/index';
import { InforProfile } from './infor/index';
import { Notification } from './notification';
import { Payment } from './payment-history';
import { Route, Routes } from 'react-router-dom';

export const ProfilePage = () => {
  return (
    <ProfileLayout title='Profile'>
      <Routes>
        <Route path='/infor' element={<InforProfile />} />
        <Route path='/favorites' element={<FavoriteProfile />} />
        <Route
          path='/notification'
          element={
            <Notification
              title='lorem Ipsum kasjdalksjdlakjdqiwjd'
              day='09/02/2021'
              time='10:00'
            />
          }
        />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </ProfileLayout>
  );
};
