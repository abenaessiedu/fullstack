import React from "react";
import BrandCard from "./components/BrandCard"
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
       
       <Route index element={<BrandCard /> } />
      <Route path={'/login'} element={<div> LOGIN PAGE</div>} /> 
      </Route>
    </Routes>

  );
}