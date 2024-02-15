import { createSlice } from "@reduxjs/toolkit";
import { products } from "./dummiData";

const getTotalPrice = (cartItems) => cartItems.reduce((prev, curr) => prev + curr.price * curr.stockCount, 0);

const addToCart = (state, action) => {
    const { payload: item } = action;

    if (item.stockCount <= 0) return state;

    let { allItems, cartItems } = state;
    const itemInCart = cartItems.find((el) => el.id === item.id);

    if (itemInCart) {
        cartItems = cartItems.map((el) => el.id === item.id ? { ...el, stockCount: el.stockCount + 1 } : el);
    }
    else {
        cartItems = [...cartItems, { ...item, stockCount: 1 }];
    }

    allItems = allItems.map((el) => el.id === item.id ? { ...el, stockCount: el.stockCount - 1 } : el);

    return { ...state, allItems, cartItems, totalPrice: getTotalPrice(cartItems) };
}

const removeFromCart = (state, action) => {
    const { payload: item } = action;
    let { allItems, cartItems } = state;

    const itemInCart = cartItems.find((el) => el.id === item.id);

    if(!itemInCart) return state;

    if(item.stockCount <= 1) {
        cartItems.filter((el) => el.id !== item.id);
    }
    else {
        cartItems = cartItems.map((el) => el.id === item.id ? { ...el, stockCount: el.stockCount - 1 } : el);
    }

    allItems = allItems.map((el) => el.id === item.id ? { ...el, stockCount: el.stockCount + 1 } : el);

    return { ...state, allItems, cartItems, totalPrice: getTotalPrice(cartItems) };
}

const removeAllFromCart = (state) => {
    let { allItems, cartItems } = state;

    if(cartItems.length > 0){
        cartItems.forEach((item) => {
            allItems = allItems.map((el) => el.id === item.id ? { ...el, stockCount: el.stockCount + item.stockCount } : el);
        });
    }

    return { ...state, allItems, cartItems: [], totalPrice: 0 };
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allItems: products,
        cartItems: [],
        totalPrice: 0
    },
    reducers:{
        addItem: (state, action) => addToCart(state, action),
        removeItem: (state, action) => removeFromCart(state, action),
        emptyCart: (state) => removeAllFromCart(state),
    }
})

//use inside component
export const { addItem, removeItem, emptyCart } = cartSlice.actions;

//use inside store
export default cartSlice.reducer;