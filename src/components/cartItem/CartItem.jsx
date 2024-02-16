import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";
import { Box, Avatar, Typography, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const onClickAddToCart = () => dispatch(addItem(item));

    const onClickRemoveToCart = () => dispatch(removeItem(item));

    return <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
        <Avatar src={item.imageUrl} alt={item.name} />
        <Typography variant="h6" color="text.secondary">{item.name}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button onClick={onClickAddToCart} size="small" variant="contained"><AddIcon /></Button>
            <Typography variant="h6">{item.stockCount}</Typography>
            <Button onClick={onClickRemoveToCart} size="small" variant="contained"><RemoveIcon /></Button>
            <Typography variant="h6">= $ {(item.price * item.stockCount).toFixed(2)}</Typography>
        </Box>
    </Box>
}

export default CartItem;