import { createSlice } from "@reduxjs/toolkit";
import { products } from "./dummiData";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allItems: products,
        cartItems: [],
        totalPrice: 0
    },
    reducers:{
        addItem: (state, action) => {},
        removeItem: (state, action) => { },
        emptyCart: (state) => { },
    }
})

//use inside component
export const { addItem, removeItem, emptyCart } = cartSlice.actions;

//use inside store
export default cartSlice.reducer;