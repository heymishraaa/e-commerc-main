import React from 'react';
import './Wishlist.css';
import { useStateValue } from './StateProvider';
import WishlistProduct from './WishlistProduct';


function Wishlist() {
    const [{ wishlist }, dispatch] = useStateValue();

    return (
        <div className='wishlist'>
            <h2>Your Wishlist:</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty!</p>
            ) : (
                wishlist.map(item => (
                    <WishlistProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))
            )}
        </div>
    );
}

export default Wishlist;
