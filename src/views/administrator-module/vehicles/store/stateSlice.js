import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'Vehicles/state',
  initialState: {
    deleteConfirmation: false,
    selectedVehicles: '',
    sortedColumn: () => {}
  },
  reducers: {
    setSelectedVehicles: (state, action) => {
      state.selectedVehicles = action.payload;
    },
    setSortedColumn: (state, action) => {
      state.sortedColumn = action.payload;
    },
    toggleDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    }
  }
});

export const { setSelectedVehicles, setSortedColumn, toggleDeleteConfirmation } =
  stateSlice.actions;

export default stateSlice.reducer;
