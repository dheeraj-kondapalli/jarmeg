import React from "react";
import product from '../../Pages/Assets/shoe1.jpg'

const Card = () => {

    return(
        <div className="border">
        <div className="cardouter">
            <div className="imageholder">
                <img src={product} alt="" />
            </div>
            <div className="textcomponent">
            <a href="/men">
                <p>Nike Dunk Burgundy<br></br>
                Men's Shoes<br></br>
                $112</p>            
                </a>
            </div>
        </div>
        </div>
    );
}

export default Card