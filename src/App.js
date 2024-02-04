import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pitchlist</h1>
        <h3>~ Let's get pitching! ~</h3>
        <img src="/IMG_2088-removebg-preview.png" className="App-logo" alt="logo" />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Add more routes using `Route` and `element` props */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;