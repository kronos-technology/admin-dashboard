import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'Routes/state',
  initialState: {
    deleteConfirmation: false,
    selectedRoutes: {},
    sortedColumn: () => {}
  },
  reducers: {
    setSelectedRoutes: (state, action) => {
      state.selectedRoutes = action.payload;
    },
    setSortedColumn: (state, action) => {
      state.sortedColumn = action.payload;
    },
    toggleDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    }
  }
});

export const { setSelectedRoutes, toggleDeleteConfirmation, setSortedColumn } = stateSlice.actions;

export default stateSlice.reducer;
