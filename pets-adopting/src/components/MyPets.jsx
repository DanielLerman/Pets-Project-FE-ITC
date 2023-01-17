import React, { useContext } from "react";
import petsAdoptingContext from "../context/context";

const MyPets = () => {
  const { currentUser } =useContext(petsAdoptingContext); 
 
  return (
    <div className=" pet-card d-flex flex-column my-5">
    {/* {admin && (
      <span className="delete-btn mx-5" onClick={handleDelete}>
        &times;
      </span>
    )} */}
    <span className=" fs-3 fw-bolder my-2" >
      {/* <NavLink className="pet-card-title" to="/PetCard">
        Hey I'm {pet.name}
      </NavLink>{" "} */}
    </span>
    {/* <img className="pet-card-url" src={pet.imageUrl} /> */}
    <div className="d-flex flex-column align-items-center mt-3 fw-bold">
      {/* <span>{pet.weight}</span>
      <span> {pet.height}</span>
      <span>Looking For: {pet.adoptionStatus}</span>
      <span>Breed: {pet.breed}</span> */}
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
