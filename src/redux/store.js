import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import kolSlice from './kolSlice';
import adminSlice from './adminSlice';
import vendorSlice from './vendorSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    kol: kolSlice,
    admin: adminSlice,
    vendor: vendorSlice,
  },
});
