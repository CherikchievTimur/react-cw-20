import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { emptyCart } from "../../redux/slices/cartSlice";

const CheckOutPage = () => {
    const { cartItems, totalPrice } = useSelector((state) => state.cart);
    const dispetch = useDispatch();

    const onClickClearCart = () => dispetch(emptyCart());

    return <div>
        <div className="cart-list">
            {cartItems.map((el) => <CartItem key={el.id} item={el} />)}
        </div>
        <div>
            <button onClick={onClickClearCart}>Clear cart</button>
        </div>
        <div>
            <p>Total price: <strong>$ {totalPrice.toFixed(2)}</strong></p>
            <p>Tax 10%: <strong>$ {(totalPrice * 0.1).toFixed(2)}</strong></p>
            <p>Grand total: <strong>$ {(totalPrice + totalPrice * 0.1).toFixed(2)}</strong></p>
        </div>
    </div>
}

export default CheckOutPage;