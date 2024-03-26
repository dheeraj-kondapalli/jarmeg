import React, { useEffect, useState } from "react";
import productimg from '../../Pages/Assets/shoe1.jpg'
import './productTab.css'
import { getProduct } from "../../Services/ProductService";

const Tab = ({ product, isSelected, onSelect}) => {
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
            "price": '',
            "img": null
    })

    useEffect(() => {
        getProduct(product.productId)
        .then((response) => {
            setProductDetails((response.data))
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
            <div className="tabouter">
                <div className="imgholder">
                    <img src={productimg} alt="" />
                </div>
                <div className="textcomponent">
                    <input type="checkbox" checked={isSelected} onChange={onSelect} />
                    <a className="cardlink"  href = {`/product/${product.productId}`} >
                        <p className="title">{productDetails.productName}</p>
                        <p className="quantity">quantity: {product.quantity}</p>
                        <p className="category">{productDetails.model.modelName}</p>
                        <p className="price">${productDetails.price}</p>
                    </a>
                </div>
            </div>

    );
}

export default Tab;