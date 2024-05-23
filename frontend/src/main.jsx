import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './home.jsx';
import Login from './Login.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes> 
    </Router>
  </React.StrictMode>
);
