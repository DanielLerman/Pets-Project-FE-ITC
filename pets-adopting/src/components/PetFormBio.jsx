import React, { useContext } from "react";
import petsAdoptingContext from "../context/context";
import TextareaAutosize from 'react-textarea-autosize';

const PetFormBio = () => {
  const {petProfileInfo, handlePetProfileChange} = useContext(petsAdoptingContext);
  return (
   <div className=' w-100'>
    <TextareaAutosize id="bio" value={petProfileInfo.bio} onChange={handlePetProfileChange} className='w-100 p-2 outline-none'  style={{ width: "100%",resize:"none" }} minRows={13}  placeholder="Your Pet Story.."/>
   </div>


  
  )
}

export default PetFormBio;
