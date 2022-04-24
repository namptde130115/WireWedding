import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerApi from '../apis/customer';

const initialState = {
  loading: false,
  registerLoading: false,
  allTask: [],
  allMyService: [],
};

export const getCheckList = createAsyncThunk(
  'customer/getCheckList',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.getCheckList();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);
export const addCheckListTask = createAsyncThunk(
  'customer/addCheckListTask',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.addCheckListTask(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getMyService = createAsyncThunk(
  'customer/getMyService',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.getMyService();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);
export const addServiceToList = createAsyncThunk(
  'customer/addServiceToList',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.addServiceToList(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteServiceFromList = createAsyncThunk(
  'customer/deleteServiceFromList',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.deleteServiceFromList(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const createPayment = createAsyncThunk(
  'customer/createPayment',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.createPayment(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getListAsync: (state, { payload }) => {
      state.listAsync = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCheckList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCheckList.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
        state.allTask = payload.checkListTaskResponseList;
      })

      .addCase(addCheckListTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCheckListTask.fulfilled, (state, { payload }) => {
        state.loading = false;
      })

      .addCase(getMyService.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyService.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
        state.allMyService = payload;
      })
      .addCase(addServiceToList.pending, (state) => {
        state.loading = true;
      })
      .addCase(addServiceToList.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deleteServiceFromList.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteServiceFromList.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPayment.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
  },
});

export default customerSlice.reducer;
