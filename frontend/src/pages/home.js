import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css'
import '../css/home.css'


function Home() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>

                    <div>
                        <button className='btn1' onClick={()=> navigate('/login')}>Login</button>
                        <button className='btn1' onClick={()=> navigate('/register')}>Register</button>
                    </div>
                </div>
            </header>
            <div className='info'>
                <div className='list'>
                    <h3>😊<br></br> This is a sample Page</h3>
                    <div className='list2'>                        
                        <h4>Assignment 3 demonstration of:</h4>
                        <ul>
                            <li>React Frontend</li>
                            <li>MySQL Backend</li>
                            <li>Triggers</li>
                            <li>Verify by mail</li>
                            <li>cookies handling</li>
                        </ul>
                        <button className='btn1' onClick={()=> navigate('/contrib')}>Contributers 😁</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
