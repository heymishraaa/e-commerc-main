import React from 'react';
import './WishlistProduct.css';
import { useStateValue } from './StateProvider';

function WishlistProduct({ id, image, title, price, rating }) {
    const [{ wishlist }, dispatch] = useStateValue();

    const removeFromWishlist = () => {
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            id: id,
        });
    };

    const moveToCart = () => {
        dispatch({
            type: "MOVE_TO_CART",
            id: id,
        });
    };

    return (
        <div className='wishlistProduct'>
            <img className='wishlistProduct_image' src={image} alt="" />
            <div className='wishlistProduct_info'>
                <p className='wishlistProduct_title'>{title}</p>
                <p className='wishlistProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='wishlistProduct_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐️</p>
                    ))}
                </div>
                <button onClick={moveToCart}>Move to Cart</button>
                <button onClick={removeFromWishlist}>Remove from Wishlist</button>
            </div>
        </div>
    );
}

export default WishlistProduct;
