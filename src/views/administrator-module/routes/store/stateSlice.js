import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'Routes/state',
    initialState: {
        drawerOpen: false,
        selectedRoutes: {},
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedRoutes: (state, action) => {
            state.selectedRoutes = action.payload
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
    setSelectedRoutes, 
    setDrawerOpen, 
    setDrawerClose,
    setSortedColumn
} = stateSlice.actions

export default stateSlice.reducer