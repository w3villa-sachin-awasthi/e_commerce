import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './slices.js/addTocartReducer'
export const store = configureStore({
  reducer: {
    cart:CartSlice
  },
})