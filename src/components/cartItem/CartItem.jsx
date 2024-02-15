import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const onClickAddToCart = () => dispatch(addItem(item));

    const onClickRemoveToCart = () => dispatch(removeItem(item));

    return <div>
        <img src={item.imageUrl} alt={item.name} width={"200px"} />
        <h6>{item.name}</h6>
        <div>
            <button onClick={onClickRemoveToCart}>-</button>
            <span>{item.stockCount}</span>
            <button onClick={onClickAddToCart}>+</button>
            <span> = $ {(item.price * item.stockCount).toFixed(2)}</span>
        </div>
        </div>
}

export default CartItem;