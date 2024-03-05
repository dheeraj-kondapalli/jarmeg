import React from "react";
import user from '../Assets/user.png'
import menu from '../Assets/menu.png'
import jarmeg from '../Assets/jarmeg1.png'
import cart from '../Assets/cart.png'
import search from '../Assets/search.png'
import "./style.css";

const page = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="banner" />
        <div className="navbar">
          <div className="navbar-2">
            <div className="text-wrapper">Kids</div>
            <img className="user" alt="User" src= {user} />
            <img className="menu" alt="Menu" src= {menu} />
            <img className="jarmeg" alt="Jarmeg" src = {jarmeg} />
            <img className="shopping-cart" alt="Shopping cart" src={cart}/>
            <div className="overlap">
              <img className="search" alt="Search" src= {search} />
            </div>
            <div className="text-wrapper-2">Men</div>
            <div className="text-wrapper-3">Clearance</div>
            <div className="text-wrapper-4">Women</div>
          </div>
        </div>
        <div className="shop-by-category">
          <div className="group">
            <div className="ellipse" />
            <div className="text-wrapper-5">Text 1</div>
          </div>
          <div className="group-2">
            <div className="text-wrapper-5">Text 1</div>
            <div className="ellipse" />
          </div>
          <div className="group-3">
            <div className="ellipse" />
            <div className="text-wrapper-6">Text 1</div>
          </div>
          <div className="group-4">
            <div className="ellipse" />
            <div className="text-wrapper-6">Text 1</div>
          </div>
        </div>
        <div className="feature-photos">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
        </div>
        
      </div>
    </div>
  );
};
export default page;