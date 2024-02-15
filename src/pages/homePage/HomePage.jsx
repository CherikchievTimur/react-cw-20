import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import "./homePage.style.scss"

const HomePage = () => {
    const { allItems } = useSelector((state) => state.cart);

    return <div className="product-list">
        {allItems.map((value) => <ProductCard key={value.id} product={value} />)}
    </div>
}

export default HomePage;