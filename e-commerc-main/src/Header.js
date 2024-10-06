import React, { useState, useEffect } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import productsData from './products.json'; // Import your product data

function Header() {
    const [{ cart, wishlist }, dispatch] = useStateValue();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (searchTerm.length >= 3) {
            const filteredSuggestions = productsData.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            history.push(`/product-list?search=${searchTerm}`);
            setSearchTerm('');
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (product) => {
        // Redirect to the product details page with the product data
        history.push({
            pathname: `/product/${product.id}`,
            state: { product } // Pass the whole product object
        });
        setSearchTerm('');
        setSuggestions([]);
    };

    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className="header_logo"
                    src="https://freepnglogo.com/images/all_img/1715487998amazon-logo-transparent.png"
                    alt="Amazon" />
            </Link>
            <form className="header_search" onSubmit={handleSearch}>
                <input 
                    className='header_searchInput' 
                    type='text' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button type="submit">
                    <SearchIcon className='header_searchIcon' />
                </button>
                {suggestions.length > 0 && (
                    <div className="suggestions_dropdown">
                        {suggestions.map((product) => (
                            <div 
                                key={product.id} 
                                className="suggestion_item"
                                onClick={() => handleSuggestionClick(product)} // Pass the whole product object
                            >
                                {product.name}
                            </div>
                        ))}
                    </div>
                )}
            </form>
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
