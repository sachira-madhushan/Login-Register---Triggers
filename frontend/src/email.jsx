import React, { useState } from 'react';
import './css/login.css';
import logo from './assets/logo.png';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Verifi() {
    const navigate = useNavigate();
    const [isResending, setIsResending] = useState(false);

    const handleResend = async () => {
        setIsResending(true);
        try {
            // Call your API to resend the verification email
            await axios.post('/api/resend-verification');
            alert('Verification email resent successfully');
        } catch (error) {
            console.error('Error resending verification email:', error);
            alert('Failed to resend verification email');
        }
        setIsResending(false);
    };
    
    return (
        <>
            <header>
                <nav className="navbar">
                    <span className="hamburger-btn material-symbols-rounded">menu</span>
                    <a href="#" className="logo" onClick={() => navigate('/')}>
                        <img src={logo} alt="logo"></img>
                        <h2><b><span>Travelo</span></b></h2>
                    </a>
                </nav>
            </header>
            <div className='wrapper'>
                <h2>Please verify your email</h2>
                <h3>Goto your email and click the verification link</h3>
                <button onClick={handleResend} disabled={isResending}>{isResending ? 'Resending...' : 'Resend Verification Email'}</button>
            </div>
        </>
    );
}

export default Verifi;
