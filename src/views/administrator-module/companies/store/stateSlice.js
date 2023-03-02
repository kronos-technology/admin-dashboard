import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'companies/state',
    initialState: {
        drawerOpen: false,
        selectedCompanie: {},
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedCompanie: (state, action) => {
            state.selectedCompanie = action.payload
        },
        setSortedColumn: (state, action) => {
            state.sortedColumn = action.payload
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false
        },
    },
})

export const { 
    setSelectedCompanies, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn
} = stateSlice.actions

export default stateSlice.reducer