import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h2><b><span>Sample page</span></b></h2>
                    </div>
                
                </nav>
            </header>
            <div>
                <h3>This is a sample Page for</h3>
                <ul>
                    <li>Assignment 3 demonstration of:</li>
                    <li>React Frontend</li>
                    <li>MySQL Backend</li>
                    <li>Triggers</li>
                    <li>Verify by mail</li>
                </ul>
            </div>
            <div>
                <button className='login-btn' onClick={()=> navigate('/login')}><h2>Login Here</h2></button>
                <button className='login-btn' onClick={()=> navigate('/register')}><h2>Reginter Here</h2></button>
            </div>
        </>
    );
}

export default Home;
