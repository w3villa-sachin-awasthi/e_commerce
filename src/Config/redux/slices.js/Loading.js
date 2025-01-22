import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,  // This is where selected products or product list can be stored
   // Add a separate field for the selected product
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {

    addLoading: (state, action) => {

      state.value=action.payload;
    },

   
  
  },
});

// Action creators
export const { addLoading } = loadingSlice.actions;

// Default export of the reducer
export default loadingSlice.reducer;
