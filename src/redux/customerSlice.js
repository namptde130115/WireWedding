import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerApi from '../apis/customer';

const initialState = {
  loading: false,
  registerLoading: false,
  allTask: [],
  allGroup: [],
  allMyService: [],
  singleServiceById: {}
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

export const editContentCheckList = createAsyncThunk(
  'customer/editContentCheckList',
  async (body, { rejectWithValue }) => {
    try {
      const response = await customerApi.editContentCheckList(body);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const editStatusChecklist = createAsyncThunk(
  'customer/editStatusChecklist',
  async (id, { rejectWithValue }) => {
    try {
      const response = await customerApi.editStatusChecklist(id);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteCheckList = createAsyncThunk(
  'customer/deleteCheckList',
  async (id, { rejectWithValue }) => {
    try {
      const response = await customerApi.deleteCheckList(id);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const createGroup = createAsyncThunk(
  'customer/createGroup',
  async (body, { rejectWithValue }) => {
    try {
      const response = await customerApi.createGroup(body);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllGroup = createAsyncThunk(
  'customer/getAllGroup',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.getAllGroup();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
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
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteGroup = createAsyncThunk(
  'customer/deleteGroup',
  async (id, { rejectWithValue }) => {
    try {
      const response = await customerApi.deleteGroup(id);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateGroupName = createAsyncThunk(
  'customer/updateGroupName',
  async (body, { rejectWithValue }) => {
    try {
      const response = await customerApi.updateGroupName(body);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
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

export const updateGuest = createAsyncThunk(
  'customer/updateGuest',
  async (body, { rejectWithValue }) => {
    try {
      const response = await customerApi.updateGuest(body);
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

export const updateGuestList = createAsyncThunk(
  'customer/updateGuestList',
  async (body, { rejectWithValue }) => {
    try {
      const response = await customerApi.updateGuestList(body);
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

export const deleteGuest = createAsyncThunk(
  // deleteGuest
  'customer/deleteGuest',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.deleteGuest(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
)

// getSingleServiceById
export const getSingleServiceById = createAsyncThunk(
  'customer/getSingleServiceById',
  async (params, { rejectWithValue }) => {
    try {
      const response = await customerApi.getSingleServiceById(params);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
)

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
        state.allTask = payload.checkListTaskResponseList;
      })
      .addCase(addCheckListTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCheckListTask.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(editContentCheckList.pending, (state) => {
        state.loading = true;
      })
      .addCase(editContentCheckList.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deleteCheckList.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCheckList.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAllGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllGroup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allGroup = payload;
      })
      .addCase(createGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGroup.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deleteGroup.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteGroup.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateGroupName.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateGroupName.fulfilled, (state, { payload }) => {
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
      .addCase(deleteGuest.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteGuest.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getSingleServiceById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleServiceById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.singleServiceById = payload;
      })
      ;
  },
});

export default customerSlice.reducer;
