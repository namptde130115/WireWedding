import { Route, Routes } from 'react-router-dom';
import { VendorLayout } from '../../layout/vendor';
import { VendorSevice } from './service';
import { VendorProfile } from './profile';

export const VendorPage = () => {
  return (
    <VendorLayout title='Vendor'>
      <Routes>
        <Route index element={<VendorSevice />} />
        <Route path='/service' element={<VendorSevice />} />
        <Route path='/infor' element={<VendorProfile />} />
      </Routes>
    </VendorLayout>
  );
};
