import React from "react";
import PropTypes from "prop-types"
import "./productCard.style.scss"

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, stockCount } = product;

    return <div className="product">
        <img className="product__img" src={imageUrl} width={"200px"}/>
        <h6 className="product__name">{name}</h6>
        <p className="product__price">{price}</p>
        <p className="product__stockCount">{stockCount}</p>
        {stockCount ? 
            <button className="product__btn product__btn_active" >Add</button> :
            <button className="product__btn product__btn_muted" >Out</button>
        }
    </div>
}

/*ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    stockCount: PropTypes.number.isRequired
}*/

export default ProductCard;