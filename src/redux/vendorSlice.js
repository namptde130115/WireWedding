import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import vendorApi from '../apis/vendor';

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
  services: [],
  allBlogByPerson: [],
  allBlog: [],
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

export const vendorCreateSingleService = createAsyncThunk(
  'vendor/signUp',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.createSingleService(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const editSingleService = createAsyncThunk(
  'vendor/signUp',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.editSingleService(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getListSingleService = createAsyncThunk(
  'vendor/getMyService',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.getListSingleService(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const createBlog = createAsyncThunk(
  'vendor/createBlog',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.createBlog(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllBogsByPerson = createAsyncThunk(
  'vendor/getAllBogsByPerson',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.getAllByPerson();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const editBlog = createAsyncThunk(
  'vendor/editBlog',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.editBlog(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  'vendor/deleteBlog',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.deleteBlog(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const getAllBlog = createAsyncThunk(
  'vendor/getAllBlog',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.getAllBlog();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const getDetailBlog = createAsyncThunk(
  'vendor/getDetailBlog',
  async (params, { rejectWithValue }) => {
    try {
      const response = await vendorApi.getDetailBlog(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const vendorSlice = createSlice({
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
      })
      .addCase(getListSingleService.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListSingleService.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services = payload;
      })
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAllBogsByPerson.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBogsByPerson.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allBlogByPerson = payload;
      })
      .addCase(editBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(editBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAllBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allBlog = payload;
      })
      .addCase(getDetailBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetailBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
      });
  },
});

export default vendorSlice.reducer;
