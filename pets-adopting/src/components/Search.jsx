import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import AdvancedSearch from './AdvancedSearch';
import PetsList from './PetsList';
import { faSliders} from "@fortawesome/free-solid-svg-icons";


const Search = () => {
  const[text, setText]=useState("");
  const[advanced, setAdvanced]=useState(false)

  const toggleSearch=()=>{
    setAdvanced((curr)=>(curr==true? false:true))
  }




  return (
  <div className="search-page">
   <div className=' search-box d-flex justify-content-between align-items-center rounded-pill'>
   <FontAwesomeIcon className="  mx-3" icon={faMagnifyingGlass} />
    <input
    className='search-bar border border-0 rounded-pill  '
    onChange={(e) => {
      setText(e.target.value);
    }}
    value={text}
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
  <span className=' search-btn d-flex align-items-center rounded-pill mx-2 '>Search  <FontAwesomeIcon className="mx-2" icon={faArrowRight} /></span>

  </div>
  </div>
  {advanced&&<AdvancedSearch/>}
 <PetsList/>
</div>


  )
}

export default Search
