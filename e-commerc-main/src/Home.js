import React, { useEffect, useState } from 'react';
import "./Home.css";
import Product from './Product';
import productsData from './products.json';

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const arrangeProducts = () => {
        const arranged = [];
        let i = 0;

        while (i < products.length) {
            let count;

            if (arranged.length % 4 === 0) {
                count = 2; // (4n+1) - 2 products
            } else if (arranged.length % 4 === 1) {
                count = 3; // (4n+2) - 3 products
            } else if (arranged.length % 4 === 2) {
                count = 2; // (4n+3) - 2 products
            } else {
                count = 1; // (4n) - 1 product
            }

            arranged.push(products.slice(i, i + count));
            i += count; // Move the index forward by the count of products added
        }

        return arranged;
    };

    const arrangedProducts = arrangeProducts();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <div className="home_container">
                <img className='home_image' src="https://www.shutterstock.com/shutterstock/photos/2373695369/display_1500/stock-vector-flash-sale-promotional-labels-templates-set-special-offer-with-thunder-sign-and-hand-lettering-for-2373695369.jpg" alt="" />
                {arrangedProducts.map((row, rowIndex) => (
                    <div className='home_row' key={rowIndex}>
                        {row.map(product => (
                            <Product
                                id={product.id}
                                title={product.name}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                                rating={product.rating} // Default rating if not specified
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;