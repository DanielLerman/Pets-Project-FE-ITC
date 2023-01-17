
import React, { useEffect, useContext,useState } from "react";
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
  const {setUsersList,setPetList, petList, currentUser, setSavedPets,setLike,savedPets} = useContext(petsAdoptingContext);
  const[welcome, setWelcome]=useState("")
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
    const res=await axios.get('http://localhost:8080/welcome',{withCredentials: true});
    console.log(res.data)
    setWelcome(res.data)
     }catch(err){
     console.log(err)
     }
 }
 useEffect(() => {
  getAllSavedPets()
 }, [currentUser])

 const getAllSavedPets = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/Pets/user/${currentUser._id}`,{ withCredentials: true });
    setSavedPets(res.data)
  } catch (err) {
    console.log(err);
  }
};
useEffect(()=>{
  getCurrentUser()
  getAllPets()
  getAllUsers()
  
},[])
  return (
    <BrowserRouter>
   <WelcomeHeader welcome={welcome}/>
    <Navigation welcome={welcome}/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Pets" element={<Pets/>}/>
      <Route path="/MyPets" element={<MyPets />}/>
      <Route path="/PetCard" element={<PetCard/>}/>
      <Route path="/Profile" element={<ProfileSettings/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
