import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetTickets} from 'services/AdministratorService'


export const getTickets = createAsyncThunk(
    'admin/tickets',async () => {
    const response = await apiGetTickets()
    return response.data
})

const dataSlice = createSlice({
    name: 'tickets/data',
    initialState: {
        loading: false,
        ticketsList: [],
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
        setTicketsList: (state, action) => {
            state.ticketsList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getTickets.fulfilled]: (state, action) => {
            state.ticketsList = action.payload
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getTickets.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setTableData,
    setTicketsList,
    setFilterData
} = dataSlice.actions

export default dataSlice.reducer