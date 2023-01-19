
import React, { useEffect, useContext,useState } from "react";
import petsAdoptingContext from "./context/context";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Pets from "./components/Pets";
import Career from './components/Career'
import PetCard from "./components/PetCard";
import Search from "./components/Search";
import ProfileSettings from "./components/ProfileSettings";
import WelcomeHeader from "./components/WelcomeHeader";
import axios from "axios";
import SavedPetList from "./components/SavedPetList";



function App() {
  const {setUsersList,setPetList,currentUser, setSavedPets} = useContext(petsAdoptingContext);
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
    if(res.data){
    }
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
      <Route path="/MyPets" element={<SavedPetList />}/>
      <Route path="/PetCard" element={<PetCard/>}/>
      <Route path="/Profile" element={<ProfileSettings/>}/>
      <Route path="/Career" element={<Career/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
