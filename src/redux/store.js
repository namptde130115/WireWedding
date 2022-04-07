import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import kolSlice from './kolSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    kol: kolSlice,
  },
});
