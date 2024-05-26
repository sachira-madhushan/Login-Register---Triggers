import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css'
import '../css/form.css'


function Login() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo" onClick={()=> navigate('/')}>
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>

                    <div className='top-button'>
                        <p>I don't have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/register')}>Register</button>
                        {/* <p>I already have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/login')}>Login</button> */}
                    </div>
                </div>
            </header>
            <div className='form'>
                <div className='title'>
                    <h2>Login</h2>
                </div>
                <form>                    
                    <input placeholder='Enter username or email'></input>                    
                    <input placeholder='Enter password'></input>                    
                    <div>
                        <input type='checkbox' ></input>
                        <label>Remember me</label>
                    </div>                    
                    <button onClick={()=> navigate('/pleaseVerify')}>login</button>
                </form>                
            </div>
        </>
    );
}

export default Login;
