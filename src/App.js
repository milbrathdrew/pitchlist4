import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pitchlist</h1>
          <h3>~ Let's get pitching! ~</h3>
          <img src="/IMG_2088-removebg-preview.png" className="App-logo" alt="logo" />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </header>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/home">Home</Link>
        </button>
      </div>
    </Router>
  );
}

export default App;