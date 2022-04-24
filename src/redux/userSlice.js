import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../apis/user';

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
  allSingleService: [],
  allServicePack: [],
};

export const signIn = createAsyncThunk(
  'user/signIn',
  async (params, { rejectWithValue }) => {
    let response;
    try {
      response = await userApi.login(params);
      const { token, role, username } = response.data;
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('token', token);
      localStorage.setItem('userName', username);
      localStorage.setItem('role', role);
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (params, { rejectWithValue }) => {
    let response;
    try {
      response = await userApi.signUp(params);
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
    return response.data;
  }
);
export const getAllSingleService = createAsyncThunk(
  'user/getAllSingleService',
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.getAllSingleService(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);
export const getAllServicesByCategory = createAsyncThunk(
  'user/getAllServicesByCategory',
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.getAllServicesByCategory(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getAllServicePack = createAsyncThunk(
  'user/getAllServicePack',
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.getAllServicePack(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);
export const getDetailPack = createAsyncThunk(
  'user/getDetailPack',
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.getDetailPack(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
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
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(signUp.pending, (state) => {
        state.registerLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.registerLoading = false;
        state.userInfor = payload;
      })

      .addCase(getAllSingleService.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSingleService.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allSingleService = payload.singleServicePostResponses;
      })

      .addCase(getAllServicesByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllServicesByCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allSingleService = payload;
        console.log(payload);
      })
      .addCase(getAllServicesByCategory.rejected, (state) => {
        state.allSingleService = [];
      })

      .addCase(getAllServicePack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllServicePack.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allServicePack = payload;
      
        console.log(payload);
        state.allServicePack = payload.packagePostResponses;
      })
      .addCase(getDetailPack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetailPack.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
      });
  },
});

export default userSlice.reducer;
