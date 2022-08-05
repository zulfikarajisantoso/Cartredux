import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const baseurl = "http://localhost:5000"

export const getcart = createAsyncThunk("cart/getcart", async() => {
    const res = await axios.get(`${baseurl}/cartitem`)
    return res.data
})
export const addcart = createAsyncThunk("cart/addcart", async({id, price, title, quan, totalprice }) => {

    const res = await axios.post(`${baseurl}/cart`, {id, price,title, quan,totalprice})
    return res.data
})


const prodentity = createEntityAdapter({
    selectId: (cartitem) => cartitem.id,     
})
const Cartcoba = createSlice({
    name: 'cartcrud',
    initialState: prodentity.getInitialState(),
    extraReducers: {
        [getcart.fulfilled]: (state, action) => {
            prodentity.setAll(state, action.payload)
        },
        [addcart.fulfilled]: (state, action) => {
            console.log(state.cartitem)
            prodentity.addOne(state.cartitem, action.payload) 
        }
    }
})  

export const cartreduc = prodentity.getSelectors(state => state.cartcrud)
export default Cartcoba.reducer