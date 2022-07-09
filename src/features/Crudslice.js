import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getprod = createAsyncThunk("products/getprod", async() => {
    const res = await axios.get("http://localhost:5000/products")
    return res.data
})


const prodentity = createEntityAdapter({
    selectId: (product) => product.id, 
})


const prodsslice = createSlice({
    name: "product",
    initialState: prodentity.getInitialState(),
    extraReducers : {
        [getprod.fulfilled] : (state, action) => {
            prodentity.setAll(state, action.payload);
        },
        
    }
    

})
export const productselect = prodentity.getSelectors(state => state.product)
export default prodsslice.reducer