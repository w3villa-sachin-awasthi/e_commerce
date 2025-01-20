import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './slices.js/addTocartReducer';
import  productSlice from './slices.js/product';
export const store = configureStore({
  reducer: {
    cart:CartSlice,
    product:productSlice,
  },
})