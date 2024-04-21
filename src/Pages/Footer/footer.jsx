import React from "react";
import './footer.css'
import instagram from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import pinterest from '../Assets/pinterest.png'


const Footer =() => {
    return(
    <div className="footer">
        <div className="sb__footer">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/products/Men">
                        <p>Men</p>
                    </a>
                    <a href="/products/women">
                        <p>Women</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <a href="/products/men">
                        <p>Men</p>
                    </a>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/kids">
                        <p>Kids</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <a href="/products/men">
                        <p>Men</p>
                    </a>
                    <a href="/products/women">
                        <p>Employer</p>
                    </a>
                    <a href="/products/kids">
                        <p>Kids</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <a href="/products/men">
                        <p>Men</p>
                    </a>
                    <a href="/products/women">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/employment">
                        <p>Employment</p>
                    </a>
                    <a href="/contact">
                        <p>Contactx</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <div className="socialmedia">
                        <p><img src={facebook}/> facebook</p>
                        <p><img src={twitter}/> twitter</p>
                        <p><img src={instagram}/> instagram</p>
                        <p><img src={pinterest}/> pinterest</p>
                    </div>
                </div>
            </div>
        <hr></hr>

        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} JarMeg.Org All rights reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookies"><div><p>Cookie Declaration</p></div></a>

            </div>
        </div>

        </div>
    </div>
    );
}

export default Footer