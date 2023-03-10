import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'companies/state',
  initialState: {
    drawerOpen: false,
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

export const { setSelectedCompanies, toggleDeleteConfirmation, setSortedColumn } =
  stateSlice.actions;

export default stateSlice.reducer;
