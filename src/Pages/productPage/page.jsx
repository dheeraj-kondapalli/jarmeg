import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "./style.css";
import productimg from '../../Pages/Assets/shoe1.jpg'
import { getProduct } from "../../Services/ProductService";
import { addToCart } from '../../Services/CartService';
import axios from "axios";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(productId)
    .then((response) => {
      console.log(response);
      setProduct(response.data)
    });
  }, []);

  const [selectedQuantity, setSelectedQuantity] = useState('');

  const handleChange = (e) => {
    setSelectedQuantity(e.target.value);
  };

  const inventoryRequest = {
    productId: productId,
    quantity: selectedQuantity
  };
  console.log(JSON.stringify(inventoryRequest))
  const headers = {
    'Content-Type': 'application/json',
    'userId': '1'
  };

  const handleAddToCart = () => {
    axios.post("http://localhost:8082/cart/addToCart",JSON.stringify(inventoryRequest), {headers})
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })
  }


  return (
  <div className="outerProductContainer">
  <div className="productImg"><img src={productimg}/></div>
  <div className="productDetails">
    <h1>{product.productName}</h1>
    <h2>${product.price}</h2>
    <p>size: {product.size}</p>
    <select value={selectedQuantity} onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  </div>

  );
};
export default ProductPage;