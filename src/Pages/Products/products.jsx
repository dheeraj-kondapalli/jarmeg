import React, { useEffect, useState } from 'react';
import Card from '../../Components/card/card';
import './products.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data here and setProducts with the fetched data
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8083/products');
            const data = await response.json();
            console.log(data)
            setProducts(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    return (
        <div className='border'>
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
