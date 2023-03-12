import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'checkpoints/state',
  initialState: {
    deleteConfirmation: false,
    selectedCheckpoints: '',
    sortedColumn: () => {}
  },
  reducers: {
    setSelectedCheckpoints: (state, action) => {
      state.selectedCheckpoints = action.payload;
    },
    setSortedColumn: (state, action) => {
      state.sortedColumn = action.payload;
    },
    toggleDeleteConfirmation: (state, action) => {
      state.deleteConfirmation = action.payload;
    }
  }
});

export const { setSelectedCheckpoints, setSortedColumn, toggleDeleteConfirmation } =
  stateSlice.actions;

export default stateSlice.reducer;
