import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(action);
      state = { ...action.payload };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = weatherSlice.actions;

export default weatherSlice.reducer;
