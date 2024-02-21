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

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="outer">
        <div className="banner"></div>
        <div className='border'>
            {show===true?<div className="sidebar">
            there!
            </div>:<div></div>}
            <div className="filtercontent col 8">
                <div className='cards' >
                <button onClick={handleShow} >open sidebar</button>
                <button onClick={handleClose} >close sidebar</button>
                {products.map(product => (
                <Card key={product.id} product={product} />
            ))}</div></div>
        </div>
        <div className="banner"></div>
        </div>
    );
}

export default ProductList;
