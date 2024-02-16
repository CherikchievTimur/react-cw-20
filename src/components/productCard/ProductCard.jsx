import React from "react"
import PropTypes from "prop-types"
import "./productCard.style.scss"
import { useDispatch } from "react-redux"
import { addItem } from "../../redux/slices/cartSlice"
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Badge } from "@mui/material";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, stockCount } = product;
    const dispatch = useDispatch()

    const onClickAddToCart = () => {
        dispatch(addItem(product));
    }

    return <Card sx={{ width: 245 }}>
        <CardMedia sx={{ height: 140 }} 
            image={imageUrl}
            title={name}/>
        <CardContent>
            <Typography gutterBottom variant="h6" component="div" align="left">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>            
            <Badge badgeContent={stockCount} color="error">
                <Button onClick={onClickAddToCart} disabled={!stockCount} size="small" variant="contained">Add to cart </Button>
            </Badge>
        </CardActions>
    </Card>
}

/*ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    stockCount: PropTypes.number.isRequired
}*/

export default ProductCard;

/*
<Button size="small" onClick={onClickAddToCart}>Add to cart</Button>
    
    <div className="product">
        <img className="product__img" src={imageUrl} width={"200px"}/>
        <h6 className="product__name">{name}</h6>
        <p className="product__price">{price}</p>
        <p className="product__stockCount">{stockCount}</p>
        {stockCount ? 
            <button className="product__btn product__btn_active" onClick={onClickAddToCart} >Add</button> :
            <button className="product__btn product__btn_muted" >Out</button>
        }
    </div>

*/