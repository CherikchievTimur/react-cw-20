import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import "./homePage.style.scss"
import CheckOutPage from "../checkoutPage/CheckOutPage";

const HomePage = () => {
    const { allItems, totalItems } = useSelector((state) => state.cart);

    return <>
            <header className="header">
                <h6 className="header__cart">Items in cart {totalItems}</h6>
            </header>
            <div className="product-list">
                {allItems.map((value) => <ProductCard key={value.id} product={value} />)}
            </div>
            <CheckOutPage />
        </>
}

export default HomePage;