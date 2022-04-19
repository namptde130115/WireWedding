import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import kolApi from '../apis/kol';

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
  kolServices: [],
  initContent: '',
};

export const signUpKol = createAsyncThunk(
  'kol/signUpKol',
  async (params, { rejectWithValue }) => {
    let response;
    try {
      response = await kolApi.signUpKol(params);
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
    return response.data;
  }
);
/////////////
export const getAllServicesByCategory = createAsyncThunk(
  'kol/getAllServicesByCategory',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.getAllServicesByCategory(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const kolSlice = createSlice({
  name: 'kol',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getListAsync: (state, { payload }) => {
      state.listAsync = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpKol.pending, (state) => {
        state.registerLoading = true;
      })
      .addCase(signUpKol.fulfilled, (state, { payload }) => {
        state.registerLoading = false;
        state.userInfor = payload;
      })

      .addCase(getAllServicesByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllServicesByCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.kolServices = payload;
        console.log(payload);
      })
      .addCase(getAllServicesByCategory.rejected, (state) => {
        state.kolServices = [];
      });
  },
});

export default kolSlice.reducer;
