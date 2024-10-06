import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Product({ id, title, image, price, description, rating }) {
    const [{ cart, wishlist }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };

    const addToWishlist = () => {
        dispatch({
            type: "ADD_TO_WISHLIST",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };

    return (
        <div className='product'>
          <Link to={{
                pathname: `/product/${id}`,
                state: { product: { id, title, image, price, description, rating } },
            }}>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (<p key={i}>⭐️</p>))}
                </div>
            </div>
            </Link>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={addToWishlist}>Add to Wishlist</button>
        </div>
    );
    
}

export default Product;
