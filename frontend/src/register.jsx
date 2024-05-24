import './css/register.css';
import logo from './assets/logo.png';

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email : '',
        password: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
    }

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
                <form action='' onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className = "input-box1">
                        <input type='text' placeholder='Username' required name='userName'/>
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className = "input-box1">
                        <input type='text' placeholder='Email' required name='email'/>
                        <i className='bx bxs-envelope' ></i>
                    </div>
                    <div className="input-box1">
                    <input type='password' placeholder='Password' required name='password'/>
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="input-box1">
                    <input type='password' placeholder='Retype the Password' required name='passworRe'/>
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="terms">

                    <label >
                        <input type="checkbox" name='t&c'/> I agree to <a href="#" className="option">Terms & Conditions</a>
                    </label>
                    </div>
                    
                    <button type='submit' className="btn" name='submit' >Register</button>
                    
                    <div className="login-link"></div>
                    <p>Already have an account?  <a href='#' onClick={()=> navigate('/login')}>Login</a></p>
                </form>
            </div>
        </>
    );
}

export default Register