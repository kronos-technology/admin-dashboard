import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCrmCustomers, apPutCrmCustomer, apiGetCrmCustomersStatistic } from 'services/CrmService'

export const getDrivers = createAsyncThunk('administrator/drivers',async () => {
    const response = await apiGetCrmCustomersStatistic()
    return response
})





const dataSlice = createSlice({
    name: 'drivers/data',
    initialState: {
        loading: false,
        driverList: [],
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
        setDriverList: (state, action) => {
            state.driverList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getDrivers.fulfilled]: (state, action) => {
            
            state.driverList = action.payload
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
    setCustomerList,
    setFilterData
} = dataSlice.actions

export default dataSlice.reducer