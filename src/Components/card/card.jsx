import React from "react";
import productimg from '../../Pages/Assets/shoe1.jpg'
import './card.css'

const Card = ({ product }) => {
    return (

            <div className="cardouter">
                <div className="imageholder">
                    <img src={productimg} alt="" />
                </div>
                <div className="textcomponent">
                    <a className="cardlink" href={product.link}>
                        <p className="title">{product.productName}</p>
                        <p className="category">{product.model.modelName}</p>
                        <p className="price">${product.price}</p>
                    </a>
                </div>
            </div>

    );
}

export default Card;