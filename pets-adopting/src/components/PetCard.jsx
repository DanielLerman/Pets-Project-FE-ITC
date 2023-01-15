
import axios from 'axios'
import React, {useContext } from 'react'
import { useState } from 'react';
import petsAdoptingContext from "../context/context";
const PetCard = () => {
    const {currentPet} = useContext(petsAdoptingContext); 
    const [showInfoBio, setShowInfoBio]=useState(false);
    const [showInfoDiet, setShowInfoDiet]=useState(false);
    const togglrInfoBbio=()=>{
      setShowInfoBio((curr)=>!curr)
    }
    const togglrInfoDiet=()=>{
      setShowInfoDiet((curr)=>!curr)
    }
   
  return (
    <>
    <div className=' pet-page d-flex '>
    <img className=' pet-pic rounded-circle' src="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg" />
    <div className='d-flex flex-column my-3 align-items-center pet-page-left'>
    <span className='pet-page-title fs-3 fw-bolder' > {currentPet.name}:</span>
    {/* <span>{currentPet.weight}</span>
    <span> {currentPet.height}</span>
    <span>Looking For: {currentPet.adoptionStatus}</span>
    <span>Breed: {currentPet.breed}</span> */}
    </div> 

    {/* <div className='d-flex  mt-4 mx-4 justify-content-between'>
   <div onClick={togglrInfoBbio} className='info-card mx-4 rounded-4'>   {showInfoBio?<span>{currentPet.bio}</span>:<span>Check My Story</span>} </div>
   <div onClick={togglrInfoDiet} className='info-card rounded-4'>        {showInfoDiet?<span>{currentPet.diet}</span>:<span>Check My Diet</span>}</div>
   </div> */}

 
</div>
<div className='d-flex align-items-center'>
        <span className='  me-1 rounded-pill'>Adoped</span>
        <span className='rounded-pill'>Foster</span>

      </div>
</>

  )
}

export default PetCard
