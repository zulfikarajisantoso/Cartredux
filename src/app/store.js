import { configureStore } from '@reduxjs/toolkit';
import keranjangreducer from "../features/Keranjangslice" 
import userreducer from "../features/Userslice" 
export const store = configureStore({
  reducer: {
    keranjang: keranjangreducer,
    user: userreducer
  },
});
