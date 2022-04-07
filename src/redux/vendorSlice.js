import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import vendorApi from '../apis/vendor';

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
};

export const vendorSignUp = createAsyncThunk(
  'vendor/signUp',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.signUp(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getListAsync: (state, { payload }) => {
      state.listAsync = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(vendorSignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(vendorSignUp.fulfilled, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
