import React, { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import petsAdoptingContext from "../context/context";
import {NavLink } from "react-router-dom";

const MyPets = () => {
  const {savedPets,admin } =useContext(petsAdoptingContext); 

  return (
    <div className=" pet-card d-flex flex-column my-5">
    {admin && (
      // onClick={handleDelete}
      <span className="delete-btn mx-5" > &times;</span>)}
    <span className=" fs-3 fw-bolder my-2" >
      <NavLink className="pet-card-title" to="/PetCard"> Hey I'm {savedPets.name}</NavLink>{" "}
    </span>
    <img className="pet-card-url" src={savedPets.imageUrl} />
    <div className="d-flex flex-column align-items-center mt-3 fw-bold">
      <span>{savedPets.weight}</span>
      <span> {savedPets.height}</span>
      <span>Looking For: {savedPets.adoptionStatus}</span>
      <span>Breed: {savedPets.breed}</span>
    </div>
    <div className="d-flex align-self-start">
      <span className=" adopt-btn me-1 rounded-pill">Adoped</span>
      <span className="foster-btn rounded-pill">Foster</span>
    </div>
    <div>
      {/* <FontAwesomeIcon onClick={handleLike}  className={like ? "border border-danger text-danger like-btn" : "like-btn"}icon={faHeart}/> */}
    </div>
  </div>
  )
}

export default MyPets
