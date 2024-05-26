import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css'
import '../css/form.css'


function Register() {
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
                        {/* <p>I don't have an accout</p> */}
                        {/* <button className='btn1' onClick={()=> navigate('/login')}><h2>Login Here</h2></button> */}
                        <p>I already have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/login')}>Login</button>
                    </div>
                </div>
            </header>
            <div className='form'>
                <div className='title'>
                    <h2>Register</h2>
                </div>
                <form>                    
                    <input placeholder='Enter username'></input>                    
                    <input placeholder='Enter email'></input>                    
                    <input placeholder='Enter password'></input> 
                    <input placeholder='Enter same password'></input> 

                    <div>
                        <input type='checkbox' ></input>
                        <label>Please Agree the </label>
                        <button 
                            type="button"
                            onClick={() => {
                                // Handle the terms and conditions click
                                alert("Terms and Conditions");
                            }}
                            style={{
                                background: "none",
                                color: "blue",
                                border: "none",
                                padding: "0",
                                cursor: "pointer",
                                textDecoration: "underline",
                                fontSize: "inherit"
                            }}
                        >
                            Terms & Conditions
                        </button>
                    </div>                    
                    <button onClick={()=> navigate('/pleaseVerify')} >Sign in</button>
                    
                </form>                
            </div>
        </>
    );
}

export default Register;
