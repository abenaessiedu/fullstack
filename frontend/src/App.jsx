import React from "react";
import BrandCard from "./components/BrandCard"
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"; 


export default function App() {
  return (
    <Routes> 
      <Route index element={   
        <main>
     <Header /> 
      <BrandCard /> 
      <BrandCard /> 
      <BrandCard /> 
     
    </main>
  } /> 
  <Route path={'/login'} element={
    <div> LOGIN </div>
  } /> 
    </Routes>
  
  );
}