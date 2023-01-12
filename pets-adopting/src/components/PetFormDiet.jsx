import React, { useContext } from "react";
import petsAdoptingContext from "../context/context";
import TextareaAutosize from 'react-textarea-autosize';
const PetFormDiet = () => {
  const {petProfileInfo, handlePetProfileChange} = useContext(petsAdoptingContext);

  return (
    <div className=' w-100'>
    <TextareaAutosize id="diet" value={petProfileInfo.diet} onChange={handlePetProfileChange} className='w-100 p-2'  style={{ width: "100%" ,resize:"none"}} minRows={13}  placeholder="Special Diet.."/>
   </div>
  )
}

export default PetFormDiet;
