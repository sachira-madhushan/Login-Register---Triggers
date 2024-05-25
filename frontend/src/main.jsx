import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './home.jsx';
import Login from './login.jsx'; 
import Register from './register.jsx';
import Aboutus from './aboutus.jsx';
import Contactus from './contactus.jsx';
import Verifi from './email.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path='/register' element={<Register/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path="/verification" element={<Verifi />} />

    </Routes> 
  </Router>
);
