
import React, { useEffect, useContext } from "react";
import petsAdoptingContext from "./context/context";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./components/Home";
import MyPets from "./components/MyPets";
import Navigation from "./components/Navigation";
import Pets from "./components/Pets";
import PetCard from "./components/PetCard";
import Search from "./components/Search";
import ProfileSettings from "./components/ProfileSettings";
import WelcomeHeader from "./components/WelcomeHeader";
import axios from "axios";
import reactTextareaAutosize from "react-textarea-autosize";



function App() {
  const { usersList,setUsersList,setPetList, petList, currenUser } = useContext(petsAdoptingContext);
 const getAllPets=async()=>{
  try{
    const res=await axios.get('http://localhost:8080/Pets')
    setPetList(res.data)  
  }catch(err){console.log(err)}
 }

 const getAllUsers=async()=>{
  try{
 const res=await axios.get('http://localhost:8080/SignUp')
 setUsersList(res.data)
 
  }catch(err){
  console.log(err)
  }
 }
 
 const getCurrentUser=async()=>{
  try{
    const res=await axios.get('http://localhost:8080/refresh',{withCredentials: true});
    console.log(res.data)
     }catch(err){
     console.log(err)
     }
 }

 useEffect(() => {
  console.log('petList now', petList)
 }, [petList])

useEffect(()=>{
  getAllPets()
  getAllUsers()
  getCurrentUser()
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
      <Route path="/PetCard" element={<PetCard/>}/>
      <Route path="/Profile" element={<ProfileSettings/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
