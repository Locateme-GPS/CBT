// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Register from './components/Register'; // Import the Register component

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar at the top */}
        <Routes>
          <Route path="/register" element={<Register />} /> {/* Register page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;