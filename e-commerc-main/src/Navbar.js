import React from 'react';
import './Navbar.css'; // Create this CSS file for styling the Navbar
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Navbar() {
    const [{ cart, wishlist }] = useStateValue();

    return (
        <div className='navbar'>
            <div className='navbar_search'>
                <input className='navbar_searchInput' type='text' />
                <SearchIcon className='navbar_searchIcon' />
            </div>
            <div className='navbar_links'>
                <Link to="/wishlist" className='navbar_link'>
                    <div className='navbar_optionWishlist'>
                        <FavoriteIcon className='MuiSvgIcon-root' />
                        <span className='navbar_optionCount'>{wishlist?.length}</span>
                    </div>
                </Link>
                <Link to="/checkout" className='navbar_link'>
                    <div className='navbar_optionCart'>
                        <ShoppingBasketIcon />
                        <span className='navbar_optionCount'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
