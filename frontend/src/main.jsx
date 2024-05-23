import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './home.jsx';
import Login from './login.jsx'; // Import the Login component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element prop for component */}
        <Route path="/login" element={<Login />} /> {/* Use element prop for component */}
      </Routes> {/* Use Routes instead of Switch */}
    </Router>
  </React.StrictMode>
);
