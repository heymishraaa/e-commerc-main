import React, { useEffect, useState } from 'react';
import './ProductList.css';
import Product from './Product';
import productsData from './products.json';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

    useEffect(() => {
        setProducts(productsData);
        setFilteredProducts(productsData); // Initialize with all products
    }, []);

    useEffect(() => {
        let updatedProducts = [...products];

        // Filter by price
        if (minPrice || maxPrice) {
            updatedProducts = updatedProducts.filter(product => {
                const price = product.price;
                const min = minPrice ? parseFloat(minPrice) : 0;
                const max = maxPrice ? parseFloat(maxPrice) : Infinity;
                return price >= min && price <= max;
            });
        }

        // Sort products
        updatedProducts.sort((a, b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });

        setFilteredProducts(updatedProducts);
    }, [minPrice, maxPrice, sortOrder, products]);

    return (
        <div className="productList">
            <h2>All Products</h2>
            <div className="filter-options">
                <input 
                    type="number" 
                    placeholder="Min Price" 
                    value={minPrice} 
                    onChange={e => setMinPrice(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Max Price" 
                    value={maxPrice} 
                    onChange={e => setMaxPrice(e.target.value)} 
                />
                <select onChange={e => setSortOrder(e.target.value)}>
                    <option value="asc">Sort by Price: Low to High</option>
                    <option value="desc">Sort by Price: High to Low</option>
                </select>
            </div>
            <div className="productList_container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.name}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                            rating={product.rating || 3} // Default rating if not specified
                        />
                    ))
                ) : (
                    <p>No products match the criteria.</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;
