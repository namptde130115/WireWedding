import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../apis/user';

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
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

export const faceBookSignIn = createAsyncThunk(
  'user/faceBookSignIn',
  async (params, { rejectWithValue }) => {
    let response;
    try {
      const {accessToken, userID} = params
      const URL = `https://graph.facebook.com/${userID}?fields=id,name,email,picture&access_token=${accessToken}`      
      const datafb = await fetch(URL).then(res => res.json()).then(res => {return res});
      const {email, name} = datafb
      console.log('response', datafb)
      response = await userApi.facebooklogin(datafb);

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
  }
);

export const googleSignIn = createAsyncThunk(
  'user/googleSignIn',
  async (params, { rejectWithValue }) => {
    let response;
    try {
      const { profileObj } = params;
      console.log(params.profileObj.name, params.profileObj.email);
      const email = params.profileObj.email;
      const name = params.profileObj.name;
      response = await userApi.googleLogin({email, name});

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
      });
  },
});


export default userSlice.reducer;
