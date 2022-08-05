import { createSlice  } from "@reduxjs/toolkit";

const keranjangslice = createSlice({
    name: 'keranjang',
    initialState: {
        keranjang: false,
      },
    reducers: {
        opencart(state, action){
            state.keranjang = !state.keranjang;
            
        },
    }
})

export const {opencart} = keranjangslice.actions
export const keran = (state) => state.keranjang.keranjang
export default keranjangslice.reducer