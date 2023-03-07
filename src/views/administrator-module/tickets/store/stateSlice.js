import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'Tickets/state',
    initialState: {
        drawerOpen: false,
        selectedTickets: {},
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedTickets: (state, action) => {
            state.selectedTickets = action.payload
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
    setSelectedTickets, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn
} = stateSlice.actions

export default stateSlice.reducer