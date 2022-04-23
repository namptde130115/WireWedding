import { Route, Routes } from 'react-router-dom';
import { KolProfile } from './profile';
import { KolBlogs } from './blogs';
import { KolLayout } from '../../layout/kol';
import { CreateServicePack } from '../manageservice/create-servicePack';

export const KolPage = () => {
  return (
    <KolLayout title='Kol'>
      <Routes>
        <Route index element={<CreateServicePack />} />
        <Route path='/service-pack' element={<CreateServicePack />} />
        <Route path='/infor' element={<KolProfile />} />
        <Route path='/blogs' element={<KolBlogs />} />
      </Routes>
    </KolLayout>
  );
};
