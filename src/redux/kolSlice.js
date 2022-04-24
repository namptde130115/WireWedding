import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import kolApi from '../apis/kol';

const initialState = {
  loading: false,
  registerLoading: false,
  userInfor: {},
  kolServices: [],
  initContent: '',
  packageCategory: [],
  packServices: [],
  packServicesByCatagory: [],
  currentPack: [],
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

export const getAllPackCatagory = createAsyncThunk(
  'kol/getAllPackCatagory',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.getAllPackCatagory();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const createPackageCategory = createAsyncThunk(
  'kol/createPackageCategory',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.createPackageCategory(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const addServiceIntoPack = createAsyncThunk(
  'kol/addServiceIntoPack',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.addServiceIntoPack(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllServiceByPackIdByCatagory = createAsyncThunk(
  'kol/getAllServiceByPackId',
  async (body, { rejectWithValue }) => {
    try {
      const response = await kolApi.getAllServiceByPackIdByCatagory(body);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllPackByKol = createAsyncThunk(
  'kol/getAllPackByKol',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.getAllPackByKol();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getServicePackById = createAsyncThunk(
  'kol/getServicePackById',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.getServicePackById(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const removeServiceFromPack = createAsyncThunk(
  'kol/removeServiceFromPack',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.removeServiceFromPack(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateServiceByPack = createAsyncThunk(
  'kol/updateServiceByPackId',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.updateServiceByPack(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePack = createAsyncThunk(
  'kol/deletePack',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.deletePack(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getInforKol = createAsyncThunk(
  'kol/getInforKol',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.getInforKol(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateInforKol = createAsyncThunk(
  'kol/updateInforKol',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.updateInforKol(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePassword = createAsyncThunk(
  'kol/updatePassword',
  async (params, { rejectWithValue }) => {
    try {
      const response = await kolApi.updatePassword(params);
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
      })
      .addCase(getAllServicesByCategory.rejected, (state) => {
        state.kolServices = [];
      })
      .addCase(getAllPackCatagory.pending, (state) => {
        state.loading = false;
      })
      .addCase(getAllPackCatagory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.packageCategory = payload;
      })
      .addCase(createPackageCategory.pending, (state) => {
        state.loading = false;
      })
      .addCase(createPackageCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.packageCategory = payload;
      })
      .addCase(addServiceIntoPack.pending, (state) => {
        state.loading = false;
      })
      .addCase(addServiceIntoPack.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.packageCategory = payload;
      })
      .addCase(getAllPackByKol.pending, (state) => {
        state.loading = false;
      })
      .addCase(getAllPackByKol.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.packServices = payload;
      })
      .addCase(getAllServiceByPackIdByCatagory.pending, (state) => {
        state.loading = false;
      })
      .addCase(
        getAllServiceByPackIdByCatagory.fulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.packServicesByCatagory = payload;
        }
      )
      .addCase(getServicePackById.pending, (state) => {
        state.loading = false;
      })
      .addCase(getServicePackById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentPack = payload;
      })
      .addCase(removeServiceFromPack.pending, (state) => {
        state.loading = false;
      })
      .addCase(removeServiceFromPack.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentPack = payload;
      })
      .addCase(updateServiceByPack.pending, (state) => {
        state.loading = false;
      })
      .addCase(updateServiceByPack.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentPack = payload;
      })
      .addCase(getInforKol.pending, (state) => {
        state.loading = false;
      })
      .addCase(getInforKol.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateInforKol.pending, (state) => {
        state.loading = false;
      })
      .addCase(updateInforKol.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = false;
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      
      ;
  },
});

export default kolSlice.reducer;
