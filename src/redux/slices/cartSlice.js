import { createSlice } from "@reduxjs/toolkit";
import { products } from "./dummiData";

const getTotalPrice = (cartItems) => cartItems.reduce((prev, curr) => prev + curr.price * curr.stockCount, 0);

const getItemsInCart = (cartItems) => cartItems.reduce((prev, curr) => prev + curr.stockCount, 0);

const findItemById = (allItems, id) => allItems.find((el) => el.id === id);

const changeStockCount = (allItems, id, count = 1) => allItems.map((el) => el.id === id ? { ...el, stockCount: el.stockCount + count } : el);

const addToCart = (state, action) => {
    const { payload: item } = action;
    let { allItems, cartItems } = state;

    const itemInItems = findItemById(allItems, item.id);

    if (itemInItems.stockCount <= 0) return state;

    const itemInCart = findItemById(cartItems, item.id); 

    if (itemInCart) {
        cartItems = changeStockCount(cartItems, item.id, 1);
    }
    else {
        cartItems = [...cartItems, { ...item, stockCount: 1 }];
    }

    allItems = changeStockCount(allItems, item.id, -1); 

    return { ...state, allItems, cartItems, totalPrice: getTotalPrice(cartItems), totalItems: getItemsInCart(cartItems) };
}

const removeFromCart = (state, action) => {
    const { payload: item } = action;
    let { allItems, cartItems } = state;

    const itemInCart = findItemById(cartItems, item.id); 

    if(!itemInCart) return state;

    if(item.stockCount <= 1) {
        cartItems = cartItems.filter((el) => el.id !== item.id);
    }
    else {
        cartItems = changeStockCount(cartItems, item.id, -1); 
    }

    allItems = changeStockCount(allItems, item.id, 1); 

    return { ...state, allItems, cartItems, totalPrice: getTotalPrice(cartItems), totalItems: getItemsInCart(cartItems) };
}

const removeAllFromCart = (state) => {
    let { allItems, cartItems } = state;

    if(cartItems.length > 0){
        cartItems.forEach((item) => {
            allItems = changeStockCount(allItems, item.id, item.stockCount); 
        });
    }

    return { ...state, allItems, cartItems: [], totalPrice: 0, totalItems: 0 };
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allItems: products,
        cartItems: [],
        totalItems: 0,
        totalPrice: 0
    },
    reducers:{
        addItem: (state, action) => addToCart(state, action),
        removeItem: (state, action) => removeFromCart(state, action),
        emptyCart: (state) => removeAllFromCart(state)
    }
})

//use inside component
export const { addItem, removeItem, emptyCart } = cartSlice.actions;

//use inside store
export default cartSlice.reducer;