import axios from 'axios'
import React, {useContext } from 'react'
import petsAdoptingContext from "../context/context";
import { NavLink } from "react-router-dom";
import PetCard from './PetCard';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
const PetsShow = ({pet}) => {
    const {deletePet,setCurrentPet, currentUser} = useContext(petsAdoptingContext); 
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

  const handleLike=async(e)=>{
    e.preventDefault() 
   setLike((curr)=>!curr)
   try{
    const res=await axios.patch(`http://localhost:8080/Update?id=${pet._id}`,{},{withCredentials: true})
    console.log(res.data)
    // setCurrentUser(res)

   }catch(err){console.log(err)}
   console.log(like)
   console.log(pet._id)
  }
  return (
    <div className=' pet-card d-flex flex-column my-5'>
    
    <span className='delete-btn mx-5' onClick={handleDelete}>&times;</span>
        <span className=' fs-3 fw-bolder my-2' onClick={handlePet}><NavLink className="pet-card-title" to="/PetCard">Hey I'm {pet.name}</NavLink> </span>
       <img   className='w-75' src="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg"/>
        <div className='d-flex flex-column align-items-center mt-3 fw-bold'>
        <span>{pet.weight}</span>
        <span> {pet.height}</span>
        <span>Looking For: {pet.adoptionStatus}</span>
        <span>Breed: {pet.breed}</span>
        </div>
        <div className='d-flex align-self-start'>
        <span className=' adopt-btn me-1 rounded-pill'>Adoped</span>
        <span className='foster-btn rounded-pill'>Foster</span>

      </div>
        <div>
        <FontAwesomeIcon onClick={handleLike} className='like-btn' icon={faHeart} />
        </div>

    </div>

  )
}

export default PetsShow
