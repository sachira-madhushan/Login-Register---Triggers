import React, { useState } from 'react';
import './css/login.css';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Validation from './loginValidation';

function Login() {
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));

        // Clear specific error for the field being modified
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = Validation(values); // Call external validation function
        setErrors(newErrors); // Update errors state with returned errors

        if (Object.keys(newErrors).length === 0) {
            // Proceed with form submission logic, e.g., send data to the server
            console.log('Form submitted successfully');
        }
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
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type='text'
                            placeholder='Email'                            
                            name='email'
                            onChange={handleInput}
                        />
                        <i className='bx bxs-envelope'></i>
                        {errors.email && <span className='form_error'>{errors.email}</span>}
                    </div>
                    <div className="input-box">
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleInput}
                        />
                        <i className="bx bxs-lock-alt"></i>
                        {errors.password && <span className='form_error'>{errors.password}</span>}
                    </div>
                    <div className="remember">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>
                    <button type='submit' className="btn">Login</button>
                    <div className="register-link"></div>
                    <p>Don't have account? <a href='#' onClick={() => navigate('/register')}>Register</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;
