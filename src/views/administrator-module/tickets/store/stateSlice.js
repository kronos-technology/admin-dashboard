import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'tickets/state',
  initialState: {
    deleteConfirmation: false,
    selectedTickets: '',
    sortedColumn: () => {}
  },
  reducers: {
    setSelectedTickets: (state, action) => {
      state.selectedTickets = action.payload;
    },
    setSortedColumn: (state, action) => {
      state.sortedColumn = action.payload;
    },

    toggleDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    }
  }
});

export const { setSelectedTickets, setSortedColumn, toggleDeleteConfirmation } = stateSlice.actions;

export default stateSlice.reducer;
