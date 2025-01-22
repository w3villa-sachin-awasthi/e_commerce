import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './slices.js/addTocartReducer';
import  productSlice from './slices.js/product';
import  addAllProduct  from './slices.js/allProduct';
import  loadingSlice  from './slices.js/Loading';
export const store = configureStore({
  reducer: {
    cart:CartSlice,
    product:productSlice,
    allProduct:addAllProduct,
    loading:loadingSlice
  },
})