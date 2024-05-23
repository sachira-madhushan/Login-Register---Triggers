import React from "react";
import './css/register.css';
import logo from './assets/logo.png';
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();
    return(
        <>

            <header>
                <nav className="navbar">
                    <span className="hamburger-btn material-symbols-rounded">menu</span>
                    <a href="#" className="logo" onClick={()=> navigate('/')}>
                        <img src={logo} alt="logo"></img>
                        <h2><b><span>Travelo</span></b></h2>
                    </a>
                                    
                    {/* <ul className="links">
                        <span className="close-btn material-symbols-rounded">close</span>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Hotel</a></li>
                        <li><a href="#">Place</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul> */}
               
                </nav> 
            </header>  
            
            <div className="wrapper1">
                <form action=''>
                    <h1>Register</h1>
                    <div className = "input-box1">
                        <input type='text' placeholder='Username' required/>
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className = "input-box1">
                        <input type='text' placeholder='Email' required/>
                        <i className='bx bxs-envelope' ></i>
                    </div>
                    <div className="input-box1">
                    <input type='password' placeholder='Password' required/>
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    {/* <div className="terms">
                        <label><input type=''>I agree to </input></label>
                        <a href="#" className="option">Terms & Conditions</a>
                    </div> */}
                    <button type='submit' className="btn" >Register</button>
                    
                    <div className="login-link"></div>
                    <p>Already have an account?  <a href='#' onClick={()=> navigate('/login')}>Login</a></p>
                </form>
            </div>
        </>
    );
}

export default Register