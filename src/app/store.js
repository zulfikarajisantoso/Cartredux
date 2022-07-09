import { configureStore } from '@reduxjs/toolkit';
import prodreduce from "../features/Crudslice" 
import cartaksi from "../features/Cartslice" 
export const store = configureStore({
  reducer: {
    product: prodreduce,
    cart: cartaksi
  },
});
