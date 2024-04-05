import React, { useEffect, useState } from "react";
import productimg from '../../Pages/Assets/shoe1.jpg'
import './productTab.css'
import { getProduct } from "../../Services/ProductService";

const Tab = ({ product, isSelected, onSelect, removeOneItem, subTotalCalc}) => {
    const [productDetails, setProductDetails] = useState({
            "productId": '',
            "productName": "",
            "model": {
                "modelId": "",
                "modelName": "",
                "design": "",
                "gender": "",
                "company": ""
            },
            "size": "",
            "colour": "",
            "price": 0,
            "img": null
    })


    const subTotal = () => {
        let subTotal = (productDetails.price)*(product.quantity)
        subTotalCalc(subTotal)
    }

    useEffect(() => {
        getProduct(product.productId)
        .then((response) => {
            setProductDetails((response.data))
        }).catch((e) => {
            console.log(e)
        })
        subTotal();
    }, [])

    return (
            <div className="tabouter">
                <input className="itemCheckbox" type="checkbox" checked={isSelected} onChange={onSelect} />
                <div className="imgholder">
                    <img src={productimg} alt="" />
                </div>
                <div className="textComponent">
                    <a className="cardlink"  href = {`/product/${product.productId}`} >
                        <p className="title">{productDetails.productName}</p>
                        <p className="quantity">quantity: {product.quantity}</p>
                        <p className="category">{productDetails.model.modelName}</p>
                        <p className="price">${productDetails.price}</p>
                    </a>
                    <button className="removeButton" onClick={removeOneItem}>Remove item</button>
                </div>
            </div>

    );
}

export default Tab;