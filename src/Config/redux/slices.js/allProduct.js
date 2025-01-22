import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],  // This is where selected products or product list can be stored
   // Add a separate field for the selected product
};

export const addproductSlice = createSlice({
  name: 'allProduct',
  initialState,
  reducers: {

    addAllProduct: (state, action) => {
     
      if(action.payload){
       
        state.value=[...action.payload];
        
      }
    },

   
  
  },
});

// Action creators
export const { addAllProduct } = addproductSlice.actions;

// Default export of the reducer
export default addproductSlice.reducer;
