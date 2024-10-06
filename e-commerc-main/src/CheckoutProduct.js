import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    };

    const moveToWishlist = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
        dispatch({
            type: 'ADD_TO_WISHLIST',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt='' />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐️</p>
                        ))}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
                <button onClick={moveToWishlist}>Move to Wishlist</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
