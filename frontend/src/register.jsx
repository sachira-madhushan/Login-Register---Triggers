import './css/register.css';
import logo from './assets/logo.png';
import Validation from './registerValidation'; // Import validation function


import axios from 'axios';
import React, { useState } from "react"; // Removed unused useEffect hook
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordRe: '',
    tandc: false, // Initialize checkbox state
  });

  const [errors, setErrors] = useState({}); // State for validation errors

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

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
        

        axios.post('http://127.0.0.1:8081/signup', {
            username: values.username,
            email: values.email,
            password: values.password // Send the hashed password
        })
        .then(res => {
            navigate('/');
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
                <nav className="navbar">
                    <span className="hamburger-btn material-symbols-rounded">menu</span>
                    <a href="#" className="logo" onClick={() => navigate('/')}>
                        <img src={logo} alt="logo"></img>
                        <h2><b><span>Travelo</span></b></h2>
                    </a>
                </nav>
            </header>

      <div className="wrapper1">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box1">
            <input
              type='text'
              placeholder='Username'
              required
              name='username'
              onChange={handleInput}
            />
            {errors.username && <span className='form_error'>{errors.username}</span>}
          </div>
          <div className="input-box1">
            <input
              type='text'
              placeholder='Email'
              required
              name='email'
              onChange={handleInput}
            />
            {errors.email && <span className='form_error'>{errors.email}</span>}
          </div>
          <div className="input-box1">
            <input
              type='password'
              placeholder='Password'
              required
              name='password'
              onChange={handleInput}
            />
            {errors.password && <span className='form_error'>{errors.password}</span>}
          </div>
          <div className="input-box1">
            <input
              type='password'
              placeholder='Retype the Password'
              required
              name='passwordRe'
              onChange={handleInput}
            />
            {errors.passwordRe && <span className='form_error'>{errors.passwordRe}</span>}
          </div>

          <div className="terms">
            <label>
              <input type="checkbox" name='tandc' checked={values.tandc} onChange={handleInput} /> I agree to <a href="#" className="option">Terms & Conditions</a>
            </label>
          </div>

          {errors.tandc && <div className='form_error'>{errors.tandc}</div>}

          <button type='submit' className="btn" name='submit' disabled={Object.keys(errors).length > 0}>Register</button>

          <div className="login-link"></div>
          <p>Already have an account? <a href='#' onClick={() => navigate('/verification')}>Login</a></p>
        </form>
      </div>
    </>
  );
}

export default Register;
