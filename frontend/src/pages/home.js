import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css';
import '../css/home.css';
import GetCookie from './getCookie'; // Import the GetCookie function
import axios from 'axios'; // Import axios for making HTTP requests

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const email = GetCookie('email'); // Retrieve email cookie
        if (email) {
            // If email cookie exists, check user verification status
            axios.post('http://localhost:8081/api/user/check', { email })
                .then(response => {
                    if (response.data.verified) {
                        // If user is verified, check if logged in
                        const isLoggedIn = GetCookie('loggedIn');
                        if (isLoggedIn === 'true') {
                            navigate('/logged');
                        }
                    } else {
                        navigate('/pleaseVerify'); // Navigate to verification page if not verified
                    }
                })
                .catch(error => {
                    console.error('Error checking user verification:', error);
                    navigate('/pleaseVerify'); // Navigate to verification page if error occurs
                });
        }
    }, [navigate]);

    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>
                    <div>
                        <button className='btn1' onClick={() => navigate('/login')}>Login</button>
                        <button className='btn1' onClick={() => navigate('/register')}>Register</button>
                    </div>
                </div>
            </header>
            <div className='info'>
                <div className='list'>
                    <h3>😊<br /> This is a sample Page</h3>
                    <div className='list2'>
                        <h4>Assignment 3 demonstration of:</h4>
                        <ul>
                            <li>React Frontend</li>
                            <li>MySQL Backend</li>
                            <li>Triggers</li>
                            <li>Verify by mail</li>
                            <li>cookies handling</li>
                        </ul>
                        <button className='btn1' onClick={() => navigate('/contrib')}>Contributers 😁</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
