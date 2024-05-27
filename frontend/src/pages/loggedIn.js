import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetCookie from './getCookie'; // Import the GetCookie function
import axios from 'axios'; // Import axios
import logo from '../asset/logo.png'

function LoggedIn() {
    const navigate = useNavigate();

    useEffect(() => {
        const email = GetCookie('email');

        axios.get(`http://localhost:8081/api/user/check/${email}`)
            .then(res => {
                if (!res.data.verified) {
                    navigate('/pleaseVerify');
                }
            })
            .catch(err => {
                console.error('Error checking user verification:', err);
            });
    }, [navigate]); // Include navigate in the dependency array

    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo" onClick={()=> navigate('/')}>
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>

                    <div className='top-button'>
                        {/* <p>I don't have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/register')}>Register</button> */}
                        {/* <p>I already have an accout</p> */}
                        <button className='btn1' onClick={()=> navigate('/')}>Logout</button>
                    </div>
                </div>
            </header>
            <div className='verify'>
                <div className='box'>
                    <div className='title'>
                        <h2>😁<br></br>Wellcome To The Club.</h2>
                    </div>
                    <div className='sub-heading'>
                        <h2>You are Logged In.</h2>    
                    </div>
                          
                </div>
            </div>
        </>
    );
}

export default LoggedIn;
