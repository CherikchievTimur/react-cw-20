import { createSlice } from "@reduxjs/toolkit";
import { products } from "./dummiData";

const getTotalPrice = (cartItems) => cartItems.reduce((prev, curr) => prev + curr.price * curr.stockCount, 0);

const addToCartItems = (state, action) => {
    if(action.payload.stockCount <= 0) return state;

    let { allItems, cartItems } = state;
    const { payload } = action;
    const itemInCart = cartItems.find((value) => value.id === payload.id);

    allItems = allItems.map((value) => value.id === payload.id ? { ...value, stockCount: value.stockCount - 1 } : value);

    if (itemInCart) {
        cartItems = cartItems.map((value) => value.id === payload.id ? { ...value, stockCount: value.stockCount + 1 } : value);
    }
    else {
        cartItems = [...cartItems, { ...payload, stockCount: 1 }]
    }

    console.log(state)

    return { ...state, allItems: allItems, cartItems: cartItems, totalPrice: getTotalPrice(cartItems) };
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allItems: products,
        cartItems: [],
        totalPrice: 0
    },
    reducers:{
        addItem: (state, action) => { return addToCartItems(state, action) },
        removeItem: (state, action) => { },
        emptyCart: (state) => { },
    }
})

//use inside component
export const { addItem, removeItem, emptyCart } = cartSlice.actions;

//use inside store
export default cartSlice.reducer;