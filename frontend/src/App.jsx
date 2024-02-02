import React from "react";
import Home from "./pages/home";
import Products from './pages/AllProducts.jsx';
import Navbar from './components/navbar/navbar.jsx'
import{BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetProducts from "./pages/AllProducts.jsx";

function App() {
  return (
    <>
        <Router>
        <Routes>
        <Route path="/"  element={<div ><Navbar /><Home /></div>} />
        <Route path="Products"  element={<div ><GetProducts /></div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
