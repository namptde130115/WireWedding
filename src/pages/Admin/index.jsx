import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../../layout/admin';
import { ManageKolTable } from './MangeKol';
import { ManageVendorTable } from './MangeVendor';

export const AdminPage = () => {
  return (
    <AdminLayout title='Admin'>
      <Routes>
        <Route path='/kol' element={<ManageKolTable />} />
        <Route path='/vendor' element={<ManageVendorTable />} />
      </Routes>
    </AdminLayout>
  );
};
