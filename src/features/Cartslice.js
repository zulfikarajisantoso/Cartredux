import { createSlice  } from "@reduxjs/toolkit";


const initialState  = {
    cartItems: [],
    totquantity: 0,
    totamount: 0
}

const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart(state, action){
            const newitem = action.payload;
            const exitingindex = state.cartItems.find(item => item.id === action.payload.id)
            state.totquantity++;
            if(!exitingindex){                
                
                state.cartItems.push({
                    id: newitem.id,
                    title: newitem.title,
                    price: newitem.price,
                    quan : 1,
                    totalprice: newitem.price
                })  
            }else{
                exitingindex.quan++
                exitingindex.totalprice = (Number(exitingindex.totalprice) + Number(newitem.price))
            }
            state.totamount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quan), 0)
        },
        removeitem(state, action) {
            const id= action.payload.id;
            const cariid = state.cartItems.find(item => item.id === id)
            state.totquantity--
            if(cariid.quan === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            }else {
                cariid.quan--
                cariid.totalprice = cariid.totalprice - cariid.price
            }
            state.totamount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quan), 0)
        },
        deleteitem(state, action) {
            const id= action.payload.id;
            const cariid = state.cartItems.find(item => item.id === id)
            if(cariid){
                state.cartItems = state.cartItems.filter(item => item.id !== cariid.id)
                state.totquantity = state.totquantity - cariid.quan
            }
         
            state.totamount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quan), 0)
        }
    }
})

export const {addtocart, removeitem, deleteitem} = cartslice.actions

export default cartslice.reducer