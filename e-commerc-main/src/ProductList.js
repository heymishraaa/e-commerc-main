// ProductList.js
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import Product from './Product';
import productsData from './products.json';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Assuming productsData is an array of product objects
        setProducts(productsData);
    }, []);

    return (
        <div className="productList">
            <h2>All Products</h2>
            <div className="productList_container">
                {products.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                        rating={product.rating || 3} // Default rating if not specified
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
