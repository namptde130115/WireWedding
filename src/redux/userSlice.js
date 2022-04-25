import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../apis/user";

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
  allSingleService: [],
  allServicePack: [],
  packDetail: {},
  allSingleInPack: {},
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async (params, { rejectWithValue }) => {
    let response;
    try {
      response = await userApi.login(params);
      const { token, role, username } = response.data;
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", token);
      localStorage.setItem("userName", username);
      localStorage.setItem("role", role);
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
  "user/signUp",
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
  "user/getAllSingleService",
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
  "user/getAllServicesByCategory",
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
  "user/getAllServicePack",
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
  "user/getDetailPack",
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
export const getAllServicesInPack = createAsyncThunk(
  "user/getAllServicesInPack",
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.getAllServicesInPack(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const signUpCustomer = createAsyncThunk(
  "user/signUpCustomer",
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.signUpCustomer(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);
export const faceBookSignIn = createAsyncThunk(
  "user/faceBookSignIn",
  async (params, { rejectWithValue }) => {
    let response;
    try {
      const { accessToken, userID } = params;
      const URL = `https://graph.facebook.com/${userID}?fields=id,name,email,picture&access_token=${accessToken}`;
      const datafb = await fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          return res;
        });
      const { email, name } = datafb;
      console.log("response", datafb);
      response = await userApi.facebooklogin(datafb);

      const { token, role, username } = response.data;
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", token);
      localStorage.setItem("userName", username);
      localStorage.setItem("role", role);
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
// getFilterPackByParams
export const getFilterPackByParams = createAsyncThunk(
  "user/getFilterPackByParams",
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.getFilterPackByParams(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);
export const googleSignIn = createAsyncThunk(
  "user/googleSignIn",
  async (params, { rejectWithValue }) => {
    let response;
    try {
      const { profileObj } = params;
      console.log(params.profileObj.name, params.profileObj.email);
      const email = params.profileObj.email;
      const name = params.profileObj.name;
      response = await userApi.googleLogin({ email, name });

      const { token, role, username } = response.data;
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", token);
      localStorage.setItem("userName", username);
      localStorage.setItem("role", role);
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
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
        state.packDetail = payload;
      })

      .addCase(getAllServicesInPack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllServicesInPack.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allSingleInPack = payload;
        console.log(payload);
      })
      .addCase(getAllServicesInPack.rejected, (state) => {
        state.allSingleInPack = [];
      })

      .addCase(signUpCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpCustomer.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
      })
      .addCase(getFilterPackByParams.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilterPackByParams.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
      });
  },
});

export default userSlice.reducer;
