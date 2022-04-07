import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import kolSlice from './kolSlice';
import adminSlice from './adminSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    kol: kolSlice,
    admin: adminSlice,
  },
});
