import React, { useState, useContext } from 'react'
import axios from 'axios'
import petsAdoptingContext from "../context/context";
import PetFormProfile from "./PetFormProfile"
import PetFormPhoto from "./PetFormPhoto"
import PetFormBio from "./PetFormBio"
import PetFormDiet from "./PetFormDiet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";


const Pets = () => {
  const {petProfileInfo, setPetLiist,petList} = useContext(petsAdoptingContext);
  const [page, setPage]=useState(0)
  const FormTitels=["Pet's Profile", "Pet's Photo", "Pet's Bio", "Pet's Diet"]
  const pageDisplay =()=>{
    return page==0? <PetFormProfile/>:page==1? <PetFormPhoto/>:page==2? <PetFormBio/>:page==3&& <PetFormDiet/>
  }
  const addNewPet=(newPet)=>{
    const petsListArr=[...petList, newPet]
    setPetLiist(petsListArr)
  }
  const handleSubmit= async (e)=>{
    e.preventDefault() 
    console.log(petProfileInfo)
    try{
    const res=await axios.post('http://localhost:8080/pets', {...petProfileInfo});
    addNewPet(res.data)
    }catch(err){console.log(err)} 
  }

 
  return (
<div className='pet-form'>
<div className='pet-form-header'>
<span>{FormTitels[page]}</span>
</div>
<div className='form-box '>
{page!=0&&<FontAwesomeIcon  className="rounded-circle pet-form-btn" icon={faArrowLeft}  
    onClick={()=>
      setPage((currPage)=>currPage -1)
      }/> }
<div className='pet-form-body'> {pageDisplay()}
{page==FormTitels.length-1&&<button className="pet-submit-btn rounded-pill " onClick={handleSubmit}>Post</button> }
 </div>
  {page<FormTitels.length-1 &&<FontAwesomeIcon  className="rounded-circle pet-form-btn" icon={faArrowRight}  
  onClick={()=> setPage((currPage)=>currPage +1)}/>}
  </div>
 
</div>
    
  )
}

export default Pets
