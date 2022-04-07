import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminApi from '../apis/admin';

const initialState = {
  loading: false,
  registerLoading: false,
  vendors: null,
  kols: null,
};

export const getAllVendors = createAsyncThunk(
  'admin/getAllVendors',
  async (params, { rejectWithValue }) => {
    try {
      const response = await adminApi.getAllVendors();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllKols = createAsyncThunk(
  'admin/getAllKols',
  async (params, { rejectWithValue }) => {
    try {
      const response = await adminApi.getAllKols();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateVendor = createAsyncThunk(
  'admin/updateVendorStatus',
  async (params, { rejectWithValue }) => {
    try {
      const response = await adminApi.updateStatus(params);
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
      .addCase(getAllVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVendors.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.vendors = payload;
      })
      .addCase(getAllKols.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllKols.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.kols = payload;
      })
      .addCase(updateVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVendor.fulfilled, (state, { payload }) => {
        state.loading = false;
        // state.vendors = payload;
      });
  },
});

export default userSlice.reducer;
