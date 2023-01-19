import React, { useContext } from "react";
import axios from "axios";
import petsAdoptingContext from "../context/context";
import {NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MyPets = ({pet}) => {
  const {setCurrentPet,setCurrentUser} =useContext(petsAdoptingContext); 
  
  const handlePet=()=>{
    setCurrentPet(pet)
  }
  const removePet=async()=>{
    try {
      const res = await axios.delete(`http://localhost:8080/Pets/${pet._id}/save`,{ withCredentials: true });
      setCurrentUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" pet-card d-flex flex-column my-5">
    <span className=" fs-3 fw-bolder my-2" onClick={handlePet}>
      <NavLink className="pet-card-title" to="/PetCard"> Hey I'm {pet.name}</NavLink>{" "}
    </span>
    <img className="pet-card-url" src={pet.imageUrl} />
    <div className="d-flex flex-column align-items-center mt-3 fw-bold">
      <span>{pet.weight}</span>
      <span> {pet.height}</span>
      <span>Looking For: {pet.adoptionStatus}</span>
      <span>Breed: {pet.breed}</span>
    </div>
    <div className="d-flex align-self-start">
      <span className=" adopt-btn me-1 rounded-pill">Adoped</span>
      <span className="foster-btn rounded-pill">Foster</span>
    </div>
    <div>
      <FontAwesomeIcon onClick={removePet}  className="border border-danger text-danger like-btn" icon={faHeart}/>
    </div>
  </div>
  )
}

export default MyPets
