import React from "react";
import PropTypes from "prop-types"

const ProductCard = (props) => {
    const { name, price, imageUrl, stockCount } = props.product;

    return <div className="product">
        <img className="product__img" src={imageUrl} />
        <h6 className="product__name">{name}</h6>
        <p className="product__price">{price}</p>
        <button className="product__btn product__btn_active" >Add</button>
        <button className="product__btn product__btn_muted" >Add</button>
    </div>
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    stockCount: PropTypes.number.isRequired
}

export default ProductCard;