import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider'; // Import the hook
import './ProductDetails.css';

function ProductDetails() {
    const location = useLocation();
    const history = useHistory();
    const [{ cart, wishlist }, dispatch] = useStateValue(); // Get cart and wishlist state
    const product = location.state?.product; // Get the product from the location state

    if (!product) {
        return <div>No product found!</div>;
    }

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                rating: product.rating,
            }
        });
    };

    const addToWishlist = () => {
        dispatch({
            type: "ADD_TO_WISHLIST",
            item: {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                rating: product.rating,
            }
        });
    };

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
            <button onClick={addToWishlist}>Add to Wishlist</button>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;
