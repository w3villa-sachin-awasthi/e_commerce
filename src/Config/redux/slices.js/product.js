import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},  // This is where selected products or product list can be stored
   // Add a separate field for the selected product
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    selectProduct: (state, action) => {
      // console.log("Product selected:", action.payload);  // Log the selected product
      // state.value.push action.payload;  // Store the selected product in state
      if(action.payload){
        // console.log("push ho gaya")
        state.value={...state.value , ...action.payload};
      }
    },

   
  
  },
});

// Action creators
export const { selectProduct } = productSlice.actions;

// Default export of the reducer
export default productSlice.reducer;
