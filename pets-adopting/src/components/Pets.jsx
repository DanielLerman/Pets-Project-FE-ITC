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
  const {petProfileInfo, setPetList,petList,petImage,setPetImage} = useContext(petsAdoptingContext);
  const [post, setPost]=useState(false)
  const [page, setPage]=useState(0)
  const FormTitels=["Pet's Profile", "Pet's Photo", "Pet's Bio", "Pet's Diet"]
  const pageDisplay =()=>{
    return page==0? <PetFormProfile/>:page==1? <PetFormPhoto setPetImage={setPetImage}/>:page==2? <PetFormBio/>:page==3&& <PetFormDiet/>
  }
  const addNewPet=(newPet)=>{
    const petsListArr=[...petList, newPet]
    setPetList(petsListArr)
  }
  const handleSubmit= async (e)=>{
    e.preventDefault() 
    setPost(true)
    const petInfo= new FormData()
    petInfo.append('name', petProfileInfo.name)
    petInfo.append('height',petProfileInfo.height)
    petInfo.append('weight',petProfileInfo.weight)
    petInfo.append('color',petProfileInfo.color)
    petInfo.append('hypoallergenic',petProfileInfo.hypoallergenic)
    petInfo.append('adoptionStatus',petProfileInfo.adoptionStatus)
    petInfo.append('breed',petProfileInfo.breed)
    petInfo.append('bio',petProfileInfo.bio)
    petInfo.append('diet',petProfileInfo.diet)
    petInfo.append('petImage',petImage)
    try{

    const res = await axios.post('http://localhost:8080/pets', petInfo);
    addNewPet(res.data)
    }catch(err){console.log(err)} 
  }

 
  return (
<div className='pet-form '>
<div className='bar rounded-pill '><div className='steps-bar '><span className={page==0? "curent-step rounded-circle spectrum-background " : "step rounded-circle"}></span><span className={page==1? "curent-step rounded-circle spectrum-background" : "step rounded-circle"}></span><span className={page==2? "curent-step rounded-circle spectrum-background" : "step rounded-circle"}></span><span className={page==3? "curent-step rounded-circle spectrum-background" : "step rounded-circle"}></span></div></div>

<div className='pet-form-header'>
<span>{FormTitels[page]}</span>
</div>
<div className='form-box '>
{page!=0&&
<FontAwesomeIcon  className="rounded-circle pet-form-btn" icon={faArrowLeft} onClick={()=>setPage((currPage)=>currPage -1)}/> }
<div className='pet-form-body'> {pageDisplay()}
{page==FormTitels.length-1&&<button className="pet-submit-btn rounded-pill " onClick={handleSubmit}>{post?"Saved" :"Post"}</button> }
 </div>
  {page<FormTitels.length-1 &&<FontAwesomeIcon  className="rounded-circle pet-form-btn" icon={faArrowRight}  
  onClick={()=> setPage((currPage)=>currPage +1)}/>}
  </div>
</div>
    
  )
}

export default Pets
