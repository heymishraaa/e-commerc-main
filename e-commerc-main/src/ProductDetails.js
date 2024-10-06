import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
    const location = useLocation();
    const history = useHistory();
    const product = location.state?.product; // Get the product from the location state

    if (!product) {
        return <div>No product found!</div>;
    }

    return (
        <div className="productDetails">
            <button className="backButton" onClick={() => history.goBack()}>
                Back
            </button>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            <p className="product_price">
                <small>$</small>
                <strong>{product.price}</strong>
            </p>
            <div className="product_rating">
                {Array(product.rating).fill().map((_, i) => (
                    <span key={i}>⭐️</span>
                ))}
            </div>
        </div>
    );
}

export default ProductDetails;
