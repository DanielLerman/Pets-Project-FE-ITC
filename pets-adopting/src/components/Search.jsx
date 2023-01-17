import React, {useContext, useState } from "react";
import petsAdoptingContext from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import AdvancedSearch from './AdvancedSearch';
import PetsList from './PetsList';
import axios from "axios";
import { faSliders} from "@fortawesome/free-solid-svg-icons";


const Search = () => {
  const { setPetList} = useContext(petsAdoptingContext);
  const[advanced, setAdvanced]=useState(false)
  const [petSearchByName, setPetSearchByName]=useState({name: ""})

  const toggleSearch=()=>{
    setAdvanced((curr)=>(curr==true? false:true))
  }

    const handlePetSearchChange = (e) => {
    setPetSearchByName({ ...petSearchByName, [e.target.id]: e.target.value });
  };

  const handelPetSearch=async()=>{
    try{
      const res=await axios.get(`http://localhost:8080/Search?name=${petSearchByName.name}`)
      setPetList(res.data);

    }catch(err){console.log(err)}
  }
  return (
  <div className="search-page">
   <div className=' search-box d-flex justify-content-between align-items-center rounded-pill'>
   <FontAwesomeIcon className="  mx-3" icon={faMagnifyingGlass} />
    <input
    id="name"
    className='search-bar border border-0 rounded-pill  '
    onChange={handlePetSearchChange}
    value={petSearchByName.name}
    />
  {/* <ReactSwitch onColor="#D1F2EB"  onHandleColor="#FBFCFC"   checked={advanced}   onChange={toggleSearch} 
   activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.0)"
   uncheckedIcon={false}
   checkedIcon={false}
   height={20}
   width={40}
   /> */}
  <div className='d-flex align-items-center'>
  <span className='sort-btn fw-semibold' onClick={toggleSearch}>Sort<FontAwesomeIcon className='mx-2' icon={faSliders} /></span>
  <span className=' search-btn d-flex align-items-center rounded-pill mx-2 ' onClick={handelPetSearch}>Search  <FontAwesomeIcon className="mx-2" icon={faArrowRight} /></span>

  </div>
  </div>
  {advanced&&<AdvancedSearch/>}
  <PetsList/>
  </div>


  )
}

export default Search
