import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'checkpoints/state',
    initialState: {
        drawerOpen: false,
        selectedCheckpoints: {},
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedCheckpoints: (state, action) => {
            state.selectedCheckpoints = action.payload
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
    setSelectedCheckpoints, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn
} = stateSlice.actions

export default stateSlice.reducer