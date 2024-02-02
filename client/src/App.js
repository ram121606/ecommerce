import './App.css';
import React from 'react';
import{BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './navbar/navbar';
import Product from './pages/product';
function App() {
  return (
    <div>
    <Router>
        <Routes>
        <Route path="/"  element={<div ><Navbar/><Home /></div>} />
        <Route path="Product"  element={<div ><Product /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
