import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
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
                {/* CartItem */}
                {/* CartItem */}
                {/* CartItem */}
                {/* CartItem */}
            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal />
            
        </div>
    </div>
  )
}

export default Checkout
