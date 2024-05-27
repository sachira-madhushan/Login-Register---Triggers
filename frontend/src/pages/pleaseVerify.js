import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css';
import '../css/verify.css';
import GetCookie from './getCookie'; // Import the GetCookie function
import axios from 'axios'; // Import axios

function Verify() {
    const navigate = useNavigate();
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const email = GetCookie('email');

        axios.get(`http://localhost:8081/api/user/verify/${email}`)
            .then(res => {
                if (res.data.verified) {
                    setIsVerified(true); // Set state to indicate verification success
                }
            })
            .catch(err => {
                console.error('Error verifying email:', err);
            });
    }, []);

    const handleResendEmail = () => {

        axios.post(`http://localhost:8081/api/user/sendverificationmail`)
        alert("Resent the email"); // Placeholder for actual logic
    };

    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo" onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>

                    <div className='top-button'>
                        {/* <p>I don't have an accout</p>
                        <button className='btn1' onClick={() => navigate('/register')}>Register</button> */}
                        <p>I already have an accout</p>
                        <button className='btn1' onClick={() => navigate('/login')}>Login</button>
                    </div>
                </div>
            </header>
            <div className='verify'>
                <div className='box'>
                    <div className='title'>
                        <h2>Please Verify Your Email.</h2>
                    </div>
                    {isVerified ? ( // Display message if email is verified
                        <div className='sub-heading'>
                            <h2>Email Verified Successfully!</h2>
                        </div>
                    ) : (
                        <div className='sub-heading'>
                            <h2>Verification Email Has Been Sent...</h2>
                        </div>
                    )}
                    
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: "rgb(96, 96, 96)"
                        }}
                    >
                        <p>Email not received?</p>
                        <button
                            type="button"
                            onClick={handleResendEmail}
                            style={{
                                background: "none",
                                color: "blue",
                                border: "none",
                                padding: "0 0 0 5px",
                                cursor: "pointer",
                                textDecoration: "underline",
                                fontSize: "inherit",
                            }}
                        >
                            Resend Email
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Verify;
