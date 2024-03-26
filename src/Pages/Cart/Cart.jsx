import React, { useEffect, useState } from 'react';
import './Cart.css'
import { getCart, removeItem } from '../../Services/CartService';
import Tab from '../../Components/ProductTab/productTab'

const Cart = () => {

  const [cartItems, setCartItems] = useState({
    cartId: null,
    userId: null,
    productQuantity: []
  });

  const [updateCart, setUpdateCart] = useState(1)

  useEffect(() =>{
    getCart()
    .then((response) => {
      setCartItems(response.data)
      console.log(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [updateCart])

  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const toggleSelection = (productId) => {
    console.log(productId)
      if (selectedProductIds.includes(productId)) {
          setSelectedProductIds(selectedProductIds.filter(id => id !== productId));
      } else {
          setSelectedProductIds([...selectedProductIds, productId]);
      }
    console.log(selectedProductIds)
  };

  const removeItems = () => {
      console.log(JSON.stringify(selectedProductIds))
      setTimeout(() => {
        removeItem(selectedProductIds)
        .then((response) => {
          console.log(response)
          setSelectedProductIds([])
          setUpdateCart(prevValue => prevValue + 1)
        }).catch((e)=>{
          console.log(e)
        })
      });
  }

  return (
    <div className='outerCartContainer'>
      <div className="productsList">
      {cartItems.productQuantity.map((product) => (
        <Tab key={product.productId} product = {product} isSelected={selectedProductIds.includes(product.productId)}
        onSelect={() => toggleSelection(product.productId)}/>
      ))}
      </div>
      <button onClick={removeItems}>Remove Items</button>
      <div className="checkout">chechkout</div>
    </div>
  );
}

export default Cart;