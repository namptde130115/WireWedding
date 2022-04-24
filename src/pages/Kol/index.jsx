import { Route, Routes } from 'react-router-dom';
import { KolProfile } from './profile';
import { KolBlogs } from './blogs';
import { KolLayout } from '../../layout/kol';
import { AllServicePack } from './all_service_pack';
import { EditServicePack } from './edit-servicePack';

export const KolPage = () => {
  return (
    <KolLayout title='Kol'>
      <Routes>
        <Route index element={<AllServicePack />} />
        <Route path='/myservive-pack' element={<AllServicePack />} />
        <Route path='/myservive-pack/edit' element={<EditServicePack />} />
        <Route path='/infor' element={<KolProfile />} />
        <Route path='/blogs' element={<KolBlogs />} />
      </Routes>
    </KolLayout>
  );
};
