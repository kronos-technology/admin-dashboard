import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetRoutes } from 'services/AdministratorService';

export const getRoutes = createAsyncThunk('admin/routes', async () => {
  const response = await apiGetRoutes();
  return response.data;
});

const dataSlice = createSlice({
  name: 'routes/data',
  initialState: {
    loading: false,
    routesList: [],
    tableData: {
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      query: '',
      sort: {
        order: '',
        key: ''
      }
    },
    filterData: {
      status: ''
    }
  },
  reducers: {
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setRoutesList: (state, action) => {
      state.routesList = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    }
  },
  extraReducers: {
    [getRoutes.fulfilled]: (state, action) => {
      state.routesList = action.payload;
      state.tableData.total = action.payload.total;
      state.loading = false;
    },
    [getRoutes.pending]: (state) => {
      state.loading = true;
    }
  }
});

export const { setTableData, setRoutesList, setFilterData } = dataSlice.actions;

export default dataSlice.reducer;
