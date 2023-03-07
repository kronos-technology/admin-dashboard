import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetVehicles} from 'services/AdministratorService'


export const getVehicles = createAsyncThunk(
    'admin/vehicles',async () => {
    const response = await apiGetVehicles()
    return response.data
})

const dataSlice = createSlice({
    name: 'vehicles/data',
    initialState: {
        loading: false,
        vehicleList: [],
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
        setVehicleListList: (state, action) => {
            state.vehicleList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getVehicles.fulfilled]: (state, action) => {
            state.vehiclesList = action.payload
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getVehicles.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setTableData,
    setVehiclesList,
    setFilterData
} = dataSlice.actions

export default dataSlice.reducer