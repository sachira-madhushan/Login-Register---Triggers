import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Verify from './pages/pleaseVerify';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pleaseVerify" element={<Verify />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
