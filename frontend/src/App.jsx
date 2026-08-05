import React from "react";
import BrandCard from "./components/BrandCard"
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
       
       <Route index element={<Home /> } />
      <Route path="/login" element={<Login />} /> 
      </Route>
    </Routes>

  );
}