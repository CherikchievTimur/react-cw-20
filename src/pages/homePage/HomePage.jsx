import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import "./homePage.style.scss"
import CheckOutPage from "../checkoutPage/CheckOutPage";
import { Box, AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HomePage = () => {
    const { allItems, totalItems } = useSelector((state) => state.cart);

    return <>
            <header className="header">
                <Box sx={{flexGrow:1}}>
                    <AppBar position="static">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                            <Typography variant="h6" component="div" >Shop</Typography>
                        
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={totalItems} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
            <div className="product-list">
                {allItems.map((value) => <ProductCard key={value.id} product={value} />)}
            </div>
            <CheckOutPage />
        </>
}

export default HomePage;