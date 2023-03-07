import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCheckpoints} from 'services/AdministratorService'

export const getCheckpoints = createAsyncThunk(
    'admin/checkpoints',async () => {
    const response = await apiGetCheckpoints()
    return response.data
})

const dataSlice = createSlice({
    name: 'checkpoints/data',
    initialState: {
        loading: false,
        checkpointsList: [],
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
        setCheckpointsList: (state, action) => {
            state.checkpointsList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getCheckpoints.fulfilled]: (state, action) => {
            state.checkpointsList = action.payload
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCheckpoints.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setTableData,
    setCheckpointsList,
    setFilterData
} = dataSlice.actions

export default dataSlice.reducer