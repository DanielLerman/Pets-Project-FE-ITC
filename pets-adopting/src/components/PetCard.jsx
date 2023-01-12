
import axios from 'axios'
import React, {useContext } from 'react'
import petsAdoptingContext from "../context/context";
const PetCard = () => {
    const {currentPet} = useContext(petsAdoptingContext); 
   
  return (
    <div className=' pet-card d-flex flex-column my-5'>
    {/* <span className='delete-btn' onClick={handleDelete}>&times;</span> */}
    <span className='pet-card-title fs-3 fw-bolder my-2' >Hey I'm {currentPet.name}</span>
    <img className='w-75' src="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg" />
    <div className='d-flex flex-column align-items-center mt-3 fw-bold'>
    <span>{currentPet.weight}</span>
    <span> {currentPet.height}</span>
    <span>Looking For: {currentPet.adoptionStatus}</span>
    <span>Breed: {currentPet.breed}</span>
    <span>{currentPet.bio}</span>
    <span>{currentPet.diet}</span>
    <button>Save Me</button>
    <button>adopt me</button>
    </div>
</div>

  )
}

export default PetCard
