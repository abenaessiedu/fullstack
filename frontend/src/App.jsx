import React from "react";
import './App.css'; 
import BrandCard from "./components/BrandCard"
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Brands from "./pages/Brands"; 
import "./pages/CreateBrand"


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}> 
       
       <Route index element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/brands" element={<Brands />} />
      </Route>
    </Routes>  

    



  );
}
export default App; 