import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='Links'>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/menu">Menu</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
