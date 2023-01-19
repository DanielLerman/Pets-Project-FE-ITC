
import React, {useContext } from 'react'
import { useState } from 'react';
import petsAdoptingContext from "../context/context";
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
const PetCard = () => {
    const {currentPet} = useContext(petsAdoptingContext); 
    const [showInfo, setShowInfo]=useState(false);
    const togglrInfo=()=>{
      setShowInfo((curr)=>!curr)
    }
 
   
  return (
    <>
    <span className='pet-page-title fw-bolder' >Hey I'm {currentPet.name}! </span>
    <div className=' pet-page d-flex  '>
      
    <img className=' pet-pic' src={currentPet.imageUrl} alt="pet"/>
    <FontAwesomeIcon className='like-btn-pet-page' icon={faHeart} />
  

    <div className='d-flex flex-column w-100'>
    <div className='d-flex flex-column '>
        <span className=' adopt-btn-pet-page rounded-pill my-2'>Adoped</span>
        <span className=' foster-btn-pet-page rounded-pill'>Foster</span>

      </div>
      <div className='d-flex flex-column align-self-center my-3'>
    <span className=' fw-bold fs-4'>Facts About Me:</span>
    <div><span className='fw-bold'>Size: </span><span>{currentPet.weight}</span></div>
    <div><span className='fw-bold'>Height:</span> <span>  {currentPet.height}</span></div>
    <div><span className='fw-bold'>Breed: </span><span>{currentPet.breed}</span></div>
    {/* <span >Looking For: <span>{currentPet.adoptionStatus}</span></span> */}
  
      </div>
      <span  onClick={togglrInfo} className='more-info-btn align-self-end fw-bold rounded-pill'>{!showInfo?"Click For More v": "Close ^"}</span>
    
    </div> 
</div>
{showInfo&&

<div className='more-info-pet d-flex flex-column w-100'>
<label className='fw-bold text-warning'>About Me:</label>
<TextareaAutosize className="outline-none mb-3" style={{ width: "60%",resize:"none" }} minRows={8} maxRows={8} value={currentPet.bio}/>
<label className='fw-bold text-warning'>Dietary Restrictions:</label>
<TextareaAutosize style={{ width: "60%",resize:"none" }} minRows={8} maxRows={8}  value={currentPet.diet}/>
</div>
}



</>

  )
}

export default PetCard
