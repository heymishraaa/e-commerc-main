import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

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
            <Link to={{
                pathname: `/product/${id}`,
                state: { product: { id, title, image, price, rating } },
            }}>
                <img className='checkoutProduct_image' src={image} alt='' />
            </Link>

            <div className='checkoutProduct_info'>
                <Link to={{
                    pathname: `/product/${id}`,
                    state: { product: { id, title, image, price, rating } },
                }}>
                    <p className='checkoutProduct_title'>{title}</p>
                </Link>
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
