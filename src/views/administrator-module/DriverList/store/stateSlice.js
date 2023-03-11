import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'adminDriverList/state',
    initialState: {
        deleteConfirmation: false,
        selectedDriver: '',
        sortedColumn: () => {},
    },
    reducers: {
        setSelectedDriver: (state, action) => {
            state.selectedDriver = action.payload
        },
        setSortedColumn: (state, action) => {
            state.sortedColumn = action.payload
        },
        toggleDeleteConfirmation: (state, action) => {
            state.deleteConfirmation = action.payload
        },
    },
})

export const { 
    setSelectedDriver, 
    setSortedColumn,
    toggleDeleteConfirmation,
} = stateSlice.actions

export default stateSlice.reducer