import React, { useEffect, useState } from 'react';
import Card from '../../Components/card/card';
import './products.css'
import { useLocation } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Fetch product data here and setProducts with the fetched data
        fetchProducts();
    }, []);

    console.log(location)
    const pathname = location.pathname;
    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8083/products/filter${pathname}`);
            const data = await response.json();
            console.log(data)
            setProducts(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    const [show, setShow] = useState(false);
  
    const handleToggle = () => setShow(prevShow => !prevShow);

    const [showButtons, setShowButtons] = useState(false);
  
    const handleToggleButtons = () => setShowButtons(prevShowButtons => !prevShowButtons);



    return (
        <div className="outer">
        <div className="banner">
            <div className="imgcontainer"><img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwc45b577d/images/page-designer/2023/june_2/15471_Comp_X8_Desktop_Image1.jpg" alt="" /></div>
            <div className="imgcontainer"><img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwa5e748b4/images/page-designer/2023/june_2/15471_Comp_X8_Desktop_Image2.jpg" alt="" /></div>
            <div className="imgcontainer"><img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw6ef55660/images/page-designer/2023/june_2/15471_Comp_X8_Desktop_Image3.jpg" alt="" /></div>
        </div>
        <div className='border'>
            {show===true?<div className="sidebar">
            there!
            <div className="filterbox">
            <div className="filterboxheader">
                <button className='' onClick={handleToggleButtons}><span>Filter1</span><a>+</a></button>
            </div>
            {showButtons === true ? 
            <div className="filterbody">
                <ul className="values">
                    <li><button className='filtervalue'>Button 1</button></li>
                    <li><button className='filtervalue'>Button 2</button></li>
                    <li><button className='filtervalue'>Button 3</button></li>
                </ul>
            </div>
            :
            <div></div>
            }
            </div>
            
            </div>:<div></div>}
            <div className="filtercontent col 8">
                <div className='cards' >
                <button onClick={handleToggle} >show sidebar</button>
                {products.map(product => (
                <Card key={product.id} product={product} />
            ))}</div></div>
        </div>
        <div className="banner"></div>
        </div>
    );
}

export default ProductList;
