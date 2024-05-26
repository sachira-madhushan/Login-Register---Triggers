import logo from '../asset/logo.png';
import '../css/all.css';
import '../css/form.css';
import Validation from './registerValidation';

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        passwordRe: '',
        tandc: false,
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;
        setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
            axios.post('http:localhost:8081/register', {
                name: values.username,
                email: values.email,
                password: values.password
            })
            .then(res => {
                console.log(res);
                navigate('/pleaseVerify');
                console.log('Form submitted successfully');
            })
            .catch(err => {
                console.log(err);
                let errorMessage = 'Signup failed. Please try again.';
                if (err.response) {
                    errorMessage = err.response.data.message || errorMessage;
                } else if (err.request) {
                    errorMessage = 'No response received from server. Please check your network connection.';
                } else {
                    errorMessage = err.message;
                }
                alert(errorMessage);
            });
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
                        <p>I already have an account</p>
                        <button className='btn1' onClick={() => navigate('/login')}>Login</button>
                    </div>
                </div>
            </header>
            <div className='form'>
                <div className='title'>
                    <h2>Register</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='input'>
                        <input
                            placeholder='Enter username'
                            name='username'
                            value={values.username}
                            onChange={handleInput}
                        />
                        {errors.username && <span className='form_error'>{errors.username}</span>}
                    </div>
                    <div className='input'>
                        <input
                            placeholder='Enter email'
                            name='email'
                            value={values.email}
                            onChange={handleInput}
                        />
                        {errors.email && <span className='form_error'>{errors.email}</span>}
                    </div>
                    <div className='input'>
                        <input
                            placeholder='Enter password'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                        />
                        {errors.password && <span className='form_error'>{errors.password}</span>}
                    </div>
                    <div className='input'>
                        <input
                            placeholder='Confirm password'
                            name='passwordRe'
                            value={values.passwordRe}
                            onChange={handleInput}
                        />
                        {errors.passwordRe && <span className='form_error'>{errors.passwordRe}</span>}
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            name='tandc'
                            checked={values.tandc}
                            onChange={handleInput}
                        />
                        <label>Please Agree to the </label>
                        <button
                            type="button"
                            onClick={() => alert("Terms and Conditions")}
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
                    {errors.tandc && <span className='form_error'>{errors.tandc}</span>}
                    <button type='submit'>Sign in</button>
                </form>
            </div>
        </>
    );
}

export default Register;
