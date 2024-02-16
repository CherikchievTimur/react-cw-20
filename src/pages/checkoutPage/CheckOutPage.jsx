import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { emptyCart } from "../../redux/slices/cartSlice";
import { Card, Box, Button, Typography } from "@mui/material";

const CheckOutPage = () => {
    const { cartItems, totalPrice } = useSelector((state) => state.cart);
    const dispetch = useDispatch();

    const onClickClearCart = () => dispetch(emptyCart());

    return <Card sx={{ width: 545, margin: "15px", padding: "10px" }}>
        <Box sx={{display: "flex", flexDirection: "column", gap: "10px", marginTop:"10px"}}>
            <Box>
                {cartItems.map((el) => <CartItem key={el.id} item={el} />)}
            </Box>
            <Box>
                <Button onClick={onClickClearCart} size="small" variant="contained">Clear cart</Button>            
            </Box>
            <Box>
                <Typography>Total price: $ {totalPrice.toFixed(2)}</Typography>
                <Typography>Tax 10%: $ {(totalPrice * 0.1).toFixed(2)}</Typography>
                <Typography>Grand total: $ {(totalPrice + totalPrice * 0.1).toFixed(2)}</Typography>
            </Box>
        </Box>
    </Card>
}

export default CheckOutPage;