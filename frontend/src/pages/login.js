import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css';
import '../css/form.css';
import GetCookie from './getCookie'; // Import the getCookie function
import axios from 'axios';
import Validation from './loginValidation';

function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedEmail = GetCookie('email'); // Retrieve email cookie when component mounts
        if (storedEmail) {
            setValues(prevValues => ({ ...prevValues, email: storedEmail }));
        }
    }, []);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));

        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/api/user/check', { email: values.email })
                .then(response => {
                    if (response.data.verified) {
                        navigate('/loggedIn');
                    } else {
                        navigate('/pleaseVerify');
                    }
                })
                .catch(error => {
                    console.error('Error checking user verification:', error);
                    navigate('/pleaseVerify');
                });
        }
    };

    const handleRememberMe = (event) => {
        if (event.target.checked) {
            navigate('/loggedIn');
        }
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
                        <p>I don't have an account</p>
                        <button className='btn1' onClick={() => navigate('/register')}>Register</button>
                    </div>
                </div>
            </header>
            <div className='form'>
                <div className='title'>
                    <h2>Login</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='input'>
                        <input
                            placeholder='Enter username or email'
                            onChange={handleInput}
                            name='email'
                            value={values.email}
                        />
                        {errors.email && <span className='form_error'>{errors.email}</span>}
                    </div>
                    <div className='input'>
                        <input
                            type='password'
                            placeholder='Enter password'
                            onChange={handleInput}
                            name='password'
                            value={values.password}
                        />
                        {errors.password && <span className='form_error'>{errors.password}</span>}
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            onChange={handleRememberMe}
                        />
                        <label>Remember me</label>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
