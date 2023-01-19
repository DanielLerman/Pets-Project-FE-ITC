import React, { useContext } from "react";
import MyPets from "./MyPets";
import petsAdoptingContext from "../context/context";

const SavedPetList = () => {
    const {savedPets } =useContext(petsAdoptingContext);
    const renderedSavedPets=savedPets.map((pet)=>{
        return(<div className="mx-3" key={pet._id}><MyPets pet={pet}/> </div> )
    })
  return (<div className='cards-container'>{renderedSavedPets}</div>)
}

export default SavedPetList
