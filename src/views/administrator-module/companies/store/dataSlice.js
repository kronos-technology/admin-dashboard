import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCompanies} from 'services/AdministratorService'

export const getCompanies = createAsyncThunk(
    'admin/companies',async () => {
    const response = await apiGetCompanies()
    return response.data
})

const dataSlice = createSlice({
    name: 'companies/data',
    initialState: {
        loading: false,
        companiesList: [],
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
        setCompaniesList: (state, action) => {
            state.companiesList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getCompanies.fulfilled]: (state, action) => {
            state.companiesList = action.payload
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCompanies.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { 
    setTableData,
    setCompaniesList,
    setFilterData
} = dataSlice.actions

export default dataSlice.reducer