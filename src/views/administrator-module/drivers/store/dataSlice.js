import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetDrivers  } from 'services/CrmService'

export const getDrivers = createAsyncThunk('admin/drivers',async () => {
    const response = await apiGetDrivers()
    return response.data
})

const dataSlice = createSlice({
    name: 'drivers/data',
    initialState: {
        loading: false,
        driversList: [],
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
           status: '',
        }
    },
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setDriversList: (state, action) => {
            state.driversList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getDrivers.fulfilled]: (state, action) => {
            
            state.driversList = action.payload
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getDrivers.pending]: (state) => {
            state.loading = true
        },
       
    }
})

export const { 
    setTableData,
    setDriversLIst,
    setFilterData
} = dataSlice.actions

export default dataSlice.reducer