import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './home.jsx';
import Login from './login.jsx'; 
import Register from './register.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path='/register' element={<Register/>}/>
    </Routes> 
  </Router>
);
