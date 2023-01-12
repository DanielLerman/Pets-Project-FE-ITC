import React, { useContext } from "react";
import petsAdoptingContext from "../context/context";

const PetFormProfile = () => {
  const {petProfileInfo, handlePetProfileChange} = useContext(petsAdoptingContext);
  return (
    <form className='d-flex flex-column mx-4'>
    <input className="rounded-pill border border-2 border-grey  p-2" placeholder='name' id="name" value={petProfileInfo.name} onChange={handlePetProfileChange} required/>
    <select   className="rounded-pill border border-2 border-grey my-2 p-2 text-secondary"  id="height" value={petProfileInfo.height} onChange={handlePetProfileChange} required>
    <option value="">Height</option> 
    <option value="less then 20cm"> Small: Less than 20 cm</option>
    <option value="20cm-50cm">Medium: 20-50 cm</option>
    <option value="over 70cm">Big: Over 50 cm</option>
</select>
<select className="rounded-pill border border-2 border-grey p-2 text-secondary" id="weight" value={petProfileInfo.weight} onChange={handlePetProfileChange}>
    <option >Weight</option> 
    <option>Small: Less then 10 KG</option>
    <option>Medium: 10-25 KG</option>
    <option>Big: Over 25 KG</option>

</select>
<select  className="rounded-pill border border-2 border-grey my-2 p-2 text-secondary" id="color" value={petProfileInfo.color} onChange={handlePetProfileChange}>
    <option>Color</option> 
    <option>Black </option>
    <option>White</option>
    <option >Brown</option>
    <option >Multi</option>
    <option>Other</option>

</select>
<select  className="rounded-pill border border-2 border-grey p-2 text-secondary" id="hypoallergenic" value={petProfileInfo.hypoallergenic} onChange={handlePetProfileChange}>
    <option>Hypoallergenic </option> 
    <option>Yes</option>
    <option>No</option>

</select>
{/* <span className=" p-2 text-secondary d-flex align-items-center  my-2" > <input className="mx-2" type="checkbox" checked  id="adoptionStatus" value={petProfileInfo.adoptionStatus} onChange={handlePetProfileChange}/>Avalibale </span> */}
<select  className="rounded-pill border border-2 border-grey my-2 p-2 text-secondary" id="adoptionStatus" value={petProfileInfo.adoptionStatus} onChange={handlePetProfileChange}>
    <option>Adoption Status </option> 
    <option>Adoption</option>
    <option>Foster</option>
    <option>Available</option>
</select>
<input className="rounded-pill border border-2 border-grey my-2 p-2 text-secondary" placeholder="Enter Breed type" id="breed" value={petProfileInfo.breed} onChange={handlePetProfileChange}/>
  </form>
  )
}

export default PetFormProfile;
