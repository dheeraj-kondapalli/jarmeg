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
  const [subTotal, setSubTotal] = useState(0);


  useEffect(() =>{
    getCart()
    .then((response) => {
      setCartItems(response.data)
      console.log(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
    totalCaluclation();
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
      setTimeout(() => {
        removeItem(selectedProductIds)
        .then((response) => {
          console.log(response)
          setUpdateCart(prevValue => prevValue + 1)
        }).catch((e)=>{
          console.log(e)
        })
      });
  }

  const removeOneItem = (productId) => {
    setTimeout(() => {
      removeItem(productId)
      .then((response) => {
        console.log(response)
        setUpdateCart(prevValue => prevValue + 1)
      }).catch((e)=>{
        console.log(e)
      })
    });
}

const totalCaluclation = () => {
  let totalItems = 0
  const products = cartItems.productQuantity;
  products.forEach(product => {totalItems += product.quantity})
  return totalItems;
}

const subTotalCalc = (subtotal) => {
  console.log(subtotal)
  let price = 0;
  price += subtotal;
  console.log(price)
  setSubTotal(price)
}

  return (
    <div className='outerCartContainer'>
      <div className="productsList">
      {cartItems.productQuantity.map((product) => (
        <Tab className="productsTab" key={product.productId} product = {product} isSelected={selectedProductIds.includes(product.productId)}
        onSelect={() => toggleSelection(product.productId)} removeOneItem={() => removeOneItem(product.productId)} subTotalCalc = {subTotalCalc}/>
      ))}
      <div className='removeCheckout'style={{ display: cartItems.productQuantity.length === 0 ? 'none' : 'flex' }}>
      <button onClick={removeItems}>Remove Selected Items</button>
      <button>Checkout</button>
      </div>
      </div>
      <div className="checkout">
        <h1>Checkout</h1>
        <h3>Sub Total ({totalCaluclation()}) items: {subTotal} </h3>
      </div>
    </div>
  );
}

export default Cart;