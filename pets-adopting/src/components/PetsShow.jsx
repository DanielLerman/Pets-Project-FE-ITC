import axios from 'axios'
import React, {useContext } from 'react'
import petsAdoptingContext from "../context/context";

const PetsShow = ({pet}) => {
    const {deletePet} = useContext(petsAdoptingContext); 
  const handleDelete= async ()=>{
    console.log(pet)
    console.log(pet._id)
    try{
        const res= await axios.delete(`http://localhost:8080/Pets/${pet._id}`)
        console.log(res.data)
        if(res.data.ok){
          console.log(pet._id)
            deletePet(pet._id);
        }
    }catch(err){console.log(err)}
  }
  return (
    <div className=' pet-card d-flex flex-column my-5'>
        <span className='delete-btn' onClick={handleDelete}>&times;</span>
        <span className='pet-card-title fs-3 fw-bolder my-2'>Hey I'm {pet.name}</span>
        <img className='w-75' src="http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg" />
        <div className='d-flex flex-column align-items-center mt-3 fw-bold'>
        <span>{pet.weight}</span>
        <span> {pet.height}</span>
        </div>
    </div>

  )
}

export default PetsShow
