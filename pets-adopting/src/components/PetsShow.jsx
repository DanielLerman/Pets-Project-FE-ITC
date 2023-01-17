import axios from "axios";
import React, { useContext ,useEffect} from "react";
import petsAdoptingContext from "../context/context";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PetsShow = ({ pet }) => {
  const { deletePet, setCurrentPet, admin, setCurrentUser } =useContext(petsAdoptingContext);
  const [like, setLike] = useState(false);
  
  // useEffect(() => {
  //   checkForSavedPets()
  //   console.log(like)
  //   }, [])

    // const checkForSavedPets=()=>{
    
    //   if(savedPets.includes(pet._id)){
    //     console.log("true")
    //   } else{console.log("baddd")}
    // }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:8080/Pets/${pet._id}`);
      if (res.data.ok) {
        deletePet(pet._id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePet = async () => {
    
    console.log(pet._id);
    try {
      const res = await axios.get(`http://localhost:8080/Pets/${pet._id}`);
      setCurrentPet(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async (e) => {
    e.preventDefault();
    if (!like) {
      try {const res = await axios.post( `http://localhost:8080/Pets/${pet._id}/save`,{},{ withCredentials: true } );
        setCurrentUser(res.data);
        setLike((curr) => !curr);
      } catch (err) {
        console.log(err);
      }
    } else if (like) {
      try {
        console.log("here");
        const res = await axios.delete(`http://localhost:8080/Pets/${pet._id}/save`,{ withCredentials: true });
        setCurrentUser(res.data);
        setLike(false);
      } catch (err) {
        console.log(err);
      }
    }

  };
  useEffect(() => {
    console.log(like);
  }, [like]);

  return (
    <div className=" pet-card d-flex flex-column my-5">
      {admin && (
        <span className="delete-btn mx-5" onClick={handleDelete}>
          &times;
        </span>
      )}
      <span className=" fs-3 fw-bolder my-2" onClick={handlePet}>
        <NavLink className="pet-card-title" to="/PetCard">
          Hey I'm {pet.name}
        </NavLink>{" "}
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
        <FontAwesomeIcon onClick={handleLike}  className={like ? "border border-danger text-danger like-btn" : "like-btn"}icon={faHeart}/>
      </div>
    </div>
  );
};

export default PetsShow;
