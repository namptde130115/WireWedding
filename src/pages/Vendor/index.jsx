import { Route, Routes } from 'react-router-dom';
import { VendorLayout } from '../../layout/vendor';
import { VendorSevice } from './service';
import { VendorProfile } from './profile';
import { VendorBlogs } from './blogs';

export const VendorPage = () => {
  return (
    <VendorLayout title='Kol'>
      <Routes>
        <Route index element={<VendorSevice />} />
        <Route path='/service' element={<VendorSevice />} />
        <Route path='/infor' element={<VendorProfile />} />
        <Route path='/blogs' element={<VendorBlogs />} />
      </Routes>
    </VendorLayout>
  );
};
