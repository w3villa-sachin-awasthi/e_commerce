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
      console.log("loading selected:", action.payload);  // Log the selected product
      // state.value.push action.payload;  // Store the selected product in state
      state.value=action.payload;
    },

   
  
  },
});

// Action creators
export const { addLoading } = loadingSlice.actions;

// Default export of the reducer
export default loadingSlice.reducer;
