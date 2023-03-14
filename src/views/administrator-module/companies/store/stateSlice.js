import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'adminCompanies/state',
  initialState: {
    deleteConfirmation: false,
    selectedCompanie: '',
    sortedColumn: () => {}
  },
  reducers: {
    setSelectedCompanie: (state, action) => {
      state.selectedCompanie = action.payload;
    },
    setSortedColumn: (state, action) => {
      state.sortedColumn = action.payload;
    },
    toggleDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    }
  }
});

export const { setSelectedCompanie, toggleDeleteConfirmation, setSortedColumn } =
  stateSlice.actions;

export default stateSlice.reducer;
