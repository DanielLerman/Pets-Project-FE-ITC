
import React, { useEffect, useState, useContext } from "react";
import petsAdoptingContext from "./context/context";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./components/Home";
import MyPets from "./components/MyPets";
import Navigation from "./components/Navigation";
import Pets from "./components/Pets";
import Search from "./components/Search";
import WelcomeHeader from "./components/WelcomeHeader";
import axios from "axios";
import NotAdmin from "./components/NotAdmin";


function App() {
  const { petList,setPetLiist } = useContext(petsAdoptingContext);
 const getAllPets=async()=>{
  try{
    const res=await axios.get('http://localhost:8080/Pets')
    console.log(res.data)
    setPetLiist(res.data)
  }catch(err){console.log(err)}
 }

useEffect(()=>{
  getAllPets()
},[])

  return (
    <BrowserRouter>
   <WelcomeHeader/>
    <Navigation />
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Pets" element={<Pets/>}/>
      <Route path="/MyPets" element={<MyPets/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
