import React from 'react';
import './WishlistProduct.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

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
            <Link to={{
                pathname: `/product/${id}`,
                state: { product: { id, title, image, price, rating } },
            }}>
                <img className='wishlistProduct_image' src={image} alt="" />
            </Link>
            <div className='wishlistProduct_info'>
                <Link to={{
                    pathname: `/product/${id}`,
                    state: { product: { id, title, image, price, rating } },
                }}>
                    <p className='wishlistProduct_title'>{title}</p>
                </Link>
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
