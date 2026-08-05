import React from "react";
import BrandCard from "./components/BrandCard"
import Header from "./components/Header";
import {Routes} from "react-router-dom"; 


export default function App() {
  return (
    <Routes> 
      <Route index element={   
        <main>
     <Header /> 
      <Post /> 
      <Post /> 
      <Post /> 
    </main>
  } /> 
    </Routes>
  
  );
}