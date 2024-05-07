import React, { useEffect, useState } from 'react';
import Card from '../../Components/card/card';
import './products.css'
import { useLocation } from 'react-router-dom';
import ToggleFilter from './togglefilter';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();

    const [filters, setFilters] = useState({
        Gender: [],
        Size: [],
        Model: []
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
      applyFilters();
  }, [filters]);

    console.log(location)
    const pathname = location.pathname;
    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8083${pathname}`);
            const data = await response.json();
            console.log(data)
            setProducts(data);
            setFilteredProducts(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

const handleFilterChange = (filters) => {
  setFilters(filters);
};


    const applyFilters = () => {
      let filteredData = [...products];
      console.log(filteredData)
      Object.keys(filters).forEach(filterKey => {
          const selectedOptions = filters[filterKey];
          console.log(filterKey);
          console.log(selectedOptions)
          if (selectedOptions && selectedOptions.length > 0) {
              filteredData = filteredData.filter(product =>
                  selectedOptions.some(option => product.model.gender === option)
              );
          }
      });
      console.log(filteredData); 
      setFilteredProducts(filteredData); 
  }  

    const [show, setShow] = useState(false);
  
    const handleToggle = () => setShow(prevShow => !prevShow);

    return (
        <div className="outer">
        <div className="banner">
            <div className="imgcontainer"><img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwc45b577d/images/page-designer/2023/june_2/15471_Comp_X8_Desktop_Image1.jpg" alt="" /></div>
            <div className="imgcontainer"><img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwa5e748b4/images/page-designer/2023/june_2/15471_Comp_X8_Desktop_Image2.jpg" alt="" /></div>
            <div className="imgcontainer"><img src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw6ef55660/images/page-designer/2023/june_2/15471_Comp_X8_Desktop_Image3.jpg" alt="" /></div>
        </div>
        <div className='border'>
            {show===true?<div className="sidebar">
            Filters
            <div className="filterbox">
            <ToggleFilter title="Gender" options={['men', 'women', 'kids']} filters={filters} onFilterChange={handleFilterChange}/>
            <ToggleFilter title="Size" options={['Small', 'Medium', 'Large', 'XLarge', 'XXLarge']} filters={filters} onFilterChange={handleFilterChange}/>
            <ToggleFilter title="Model" options={['Pants', 'Jackets', 'Shirts']} filters={filters} onFilterChange={handleFilterChange}/>
            </div>
            </div>:<div></div>}
            <div className="filtercontent col 8">
                <div className='cards' >
                <button onClick={handleToggle} >show sidebar</button>
                {filteredProducts.map(product => (
                    <Card key={product.id} product={product} />
                ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductList;
