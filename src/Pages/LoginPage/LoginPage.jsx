import { React, useState } from "react";
import './LoginPage.css'
import img from '../Assets/logo1.png'
import glogo from '../Assets/google logo.png'
import {loginUser} from "../../Services/UserService";

const LoginPage = () => {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const submitForm = (e, action) => {
        e.preventDefault();
        loginUser(user, action)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };
        
    const handleInputChange = (e) => {
    // Update form data when input values change
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        });
        console.log(user)
    };

    const [action, setAction] = useState("Sign up");
    return (
            <div className="outer-container row rounded-5 p-3 bg-white shadow-box-area d-flex justify-content-center align-items-center">
                <div class="background col-md-5 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" >
                    <div class="featured-image">
                        <img src={img} class="img-fluid"></img>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center right-box col-md-7">
                    <div class="row align-items-center">
                        <form className="cont"> 
                            <div class="header align-items-center justify-content-between">
                                <div class="text align-items-center mb-1">{action}</div>
                                <div class="underline"></div>
                            </div>
                                {action==="Login"?<div></div>:  
                                <div class="row">
                                  <div className="col mb-3">
                                    <input type="text" className="form-control form-control bg-light" name="firstname" placeholder="FirstName" defaultValue={user.firstname} onChange={handleInputChange}/>
                                </div>
                                <div className="col mb-3">
                                    <input type="text" className="form-control form-control bg-light"name="lastname" placeholder="LastName" defaultValue={user.lastname} onChange={handleInputChange}/>
                                </div>
                                </div>}
                            <div className="input-group mb-2">
                                <input type="email" class="form-control bg-light fs-6" name="email"  placeholder="Email Address" value={user.email} onChange={handleInputChange}/>
                            </div>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control bg-light fs-6" name="password" placeholder="Password" value={user.password} onChange={handleInputChange}/>
                            </div>
                                {action === "Sign up" ? <div></div> : <div className="forgot-password m-1">forgot password? <span>Click here!</span></div>}
                                {action === "Login" ? <div></div>:<div>Already have an account?<button type="button" className="btn btn-link"onClick={()=>{setAction("Login");
                                                    setUser({
                                                        firstname: '',
                                                        lastname: '',
                                                        email: '',
                                                        password: ''
                                                    })
                            }}>Login</button></div>}
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="login-btn btn btn-primary"onClick={(e) => {submitForm(e, action)}}>{action}</button>
                            </div>
                            <div> or </div>
                            <button type="submit" className="sign-up-btn btn btn-primary" >{action} with Google<img src={glogo}/> </button>
                            {action === "Sign up" ? <div></div> :<button type="submit" className="sign-btn btn btn-primary" onClick={()=>{setAction("Sign up");
                        setUser({
                            firstname: '',
                            lastname: '',
                            email: '',
                            password: ''
                        })
                        }}>Create an account</button>}
                        </form>
                    </div>
                </div>
            </div>

    )
}
export default LoginPage