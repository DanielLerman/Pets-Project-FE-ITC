import React, {useContext } from 'react'
import petsAdoptingContext from "../context/context";
import PetsShow from './PetsShow';
const PetsList = () => {
    const {petList} = useContext(petsAdoptingContext); 
    const renderedPets=petList.map((pet)=>{
        return(<div className="mx-3" key={pet._id}><PetsShow pet={pet}/></div> )
    })
  return (<div className='cards-container'>{renderedPets}</div>)
}
export default PetsList;
