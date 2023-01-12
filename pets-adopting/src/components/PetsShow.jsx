import axios from 'axios'
import React, {useContext } from 'react'
import petsAdoptingContext from "../context/context";
import { NavLink } from "react-router-dom";
import PetCard from './PetCard';
import { useState } from 'react';
const PetsShow = ({pet}) => {
    const {deletePet,setCurrentPet} = useContext(petsAdoptingContext); 
    const[like, setLike]=useState(false)
  const handleDelete= async ()=>{
    try{
        const res= await axios.delete(`http://localhost:8080/Pets/${pet._id}`)
        if(res.data.ok){
            deletePet(pet._id);
        }
    }catch(err){console.log(err)}
  }

  const handlePet=async()=>{
    console.log(pet._id)
    try{
      const res=await axios.get(`http://localhost:8080/Pets/${pet._id}`)
      setCurrentPet(res.data)
    }catch(err){console.log(err)}
  }

  const handleLike=()=>{
   setLike((curr)=>!curr)
   console.log(like)
   console.log(pet._id)
  }
  return (
    <div className=' pet-card d-flex flex-column my-5'>
        <span className='delete-btn' onClick={handleDelete}>&times;</span>
        <span className='pet-card-title fs-3 fw-bolder my-2' onClick={handlePet}><NavLink to="/PetCard">Hey I'm {pet.name}</NavLink> </span>
        <img className='w-75' src="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg" />
        <div className='d-flex flex-column align-items-center mt-3 fw-bold'>
        <span>{pet.weight}</span>
        <span> {pet.height}</span>
        <span>Looking For: {pet.adoptionStatus}</span>
        <span>Breed: {pet.breed}</span>
        <button onClick={handleLike}className={like && "bg-danger"}>like</button>
        </div>
    </div>

  )
}

export default PetsShow
