import React, { useState } from "react";
import './LoginandSignUp.css'
import email from '../Assets/mail.png'
import password from '../Assets/key.png'
import user from '../Assets/icon.png'

const LoginandSignUp = () => {

    const [action, setAction] = useState("Login");
    return (
        <div className = "container">
            <div className = "header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputsforthisform">
                {action==="Login"?<div></div>:                
                <div className="input">            
                    <img src={user} alt="" />
                    <input type="text" placeholder="FirstName" />
                </div>}
                {action==="Login"?<div></div>:
                    <div className="input">
                        <img src={user} alt="" />
                        <input type="text" placeholder="LastName" />
                    </div>}
                <div className="input">            
                    <img src={email} alt="" />
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">            
                    <img src={password} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action === "Sign Up"? <div></div>:<div className="forgot-password">forgot password? <span>Click here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action=== "Sign Up"? "submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginandSignUp