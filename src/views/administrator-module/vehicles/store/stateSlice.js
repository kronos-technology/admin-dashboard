import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'Vehicles/state',
    initialState: {
        drawerOpen: false,
        selectedVehicles: {},
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedVehicles: (state, action) => {
            state.selectedVehicles = action.payload
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
    setSelectedVehicles, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn
} = stateSlice.actions

export default stateSlice.reducer