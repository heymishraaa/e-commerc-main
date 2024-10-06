import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
                className='checkout_ad' 
                src="https://i0.wp.com/worldairlinenews.com/wp-content/uploads/2024/08/455301929_903702208467002_2720426010796048072_n.jpg?ssl=1" 
                alt='' 
            />
            <div>
                <h2 className='checkout_title'>
                    Your Cart:
                </h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty!</p>
                ) : (
                    cart.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))
            )}

            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal />
            
        </div>
    </div>
  )
}

export default Checkout
