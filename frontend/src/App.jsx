import React from "react";
import './App.css'; 
import BrandCard from "./components/BrandCard"
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider> 

       <Routes>
      <Route path="/" element={<Layout />}> 
       
       <Route index element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreateBrand />} /> 
      </Route>
    </Routes> 

    // </UserContextProvider>
   

  );
}
export default App; 