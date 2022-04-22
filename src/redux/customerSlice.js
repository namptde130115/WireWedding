import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerApi from '../apis/customer';

const initialState = {
  loading: false,
  registerLoading: false,
  allTask: [],
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
  },
});

export default customerSlice.reducer;
