import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import kolApi from '../apis/kol';

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
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
      });
  },
});

export default kolSlice.reducer;
