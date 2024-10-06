import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
    const [{ cart, wishlist }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className="header_logo"
                    src="https://freepnglogo.com/images/all_img/1715487998amazon-logo-transparent.png"
                    alt="Amazon" />
            </Link>
            <div className="header_search">
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_option1'>Hello Guest</span>
                    <span className='header_option2'>Sign in</span>
                </div>
                <div className='header_option'>
                    <span className='header_option1'>Returns</span>
                    <span className='header_option2'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_option1'>Your</span>
                    <span className='header_option2'>Prime</span>
                </div>
                <Link to="/product-list">
                  <div className='header_option'>
                      <span className='header_option1'>Product</span>
                      <span className='header_option2'>List</span>
                  </div>
              </Link>
                <Link to="/wishlist">
                    <div className='header_optionWishlist'>
                        <FavoriteIcon />
                        <span className='header_option2 header_wishlistCount'>{wishlist?.length}</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className='header_optionCart'>
                        <ShoppingBasketIcon />
                        <span className='header_option2 header_cartCount'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;