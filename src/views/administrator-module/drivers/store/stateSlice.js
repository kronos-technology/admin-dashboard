import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'drivers/state',
    initialState: {
        drawerOpen: false,
        selectedDriver: {},
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedDriver: (state, action) => {
            state.selectedDriver = action.payload
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
    setSelectedDriver, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn
} = stateSlice.actions

export default stateSlice.reducer