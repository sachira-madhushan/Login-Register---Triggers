import React from 'react';
import './css/login.css';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {
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
{/*                     
                    <ul className="links">
                        <span className="close-btn material-symbols-rounded">close</span>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Hotel</a></li>
                        <li><a href="#">Place</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                */}
                </nav> 
            </header>    
            <div className='wrapper'>
                <form action=''>
                    <h1>Login</h1>
                    <div className = "input-box">
                        <input type='text' placeholder='Email' required/>
                        <i className='bx bxs-envelope' ></i>
                    </div>
                    <div className="input-box">
                    <input type='password' placeholder='Password' required/>
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    
                    <div className="remember">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>

                    <button type='submit' className="btn">Login</button>
                    <div className="register-link"></div>
                    <p>Don't have account?  <a href='#'>Register</a></p> 
                </form>
            </div>
        </>
    );
}

export default Login;