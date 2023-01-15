import React, { useEffect, useContext, useState } from "react";
import petsAdoptingContext from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function AdvancedSearch() {
  const { setPetList, petList } = useContext(petsAdoptingContext);
  const [petSearch, setPetSearch] = useState({name: "", height: "", weight: "",adoptionStatus: "", });
  const handlePetSearchChange = (e) => {
    setPetSearch({ ...petSearch, [e.target.id]: e.target.value });
  };

  const handlePetSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/Search?name=${petSearch.name}&status=${petSearch.adoptionStatus}&weight=${petSearch.weight}&height=${petSearch.height}` );
      setPetList(res.data);
    } catch (err) {
      console.log(err);
    }
  };
 

  return (
    <div className="advanced-search-form d-flex flex-column">
      <div className="d-flex align-self-center w-100">
       <div className="d-flex flex-column mx-2 w-100">
      <select
        className="rounded-pill border border-2 border-grey  p-2 text-secondary"
        id="adoptionStatus"
        value={petSearch.adoptionStatus}
        onChange={handlePetSearchChange}
      >
        <option>Adoption Status </option>
        <option>Adoption</option>
        <option>Foster</option>
        <option>Available</option>
      </select>
      <select
        className="rounded-pill border border-2 border-grey my-2 p-2 text-secondary"
        id="height"
        value={petSearch.height}
        onChange={handlePetSearchChange}
      >
        <option value="">Height</option>
        <option value="less then 20cm"> Small: Less than 20 cm</option>
        <option value="20cm-50cm">Medium: 20-50 cm</option>
        <option value="over 70cm">Big: Over 50 cm</option>
      </select>
     </div>
     <div className="d-flex flex-column mx-2 w-100">
      <select
        className="rounded-pill border border-2 border-grey p-2 text-secondary "
        id="weight"
        value={petSearch.weight}
        onChange={handlePetSearchChange}
      >
        <option>Weight</option>
        <option>Small: Less then 10 KG</option>
        <option>Medium: 10-25 KG</option>
        <option>Big: Over 25 KG</option>
      </select>

      <input
        className="rounded-pill border border-2 border-grey my-2 p-2 text-secondary "
        placeholder="Enter Name"
        id="name"
        value={petSearch.name}
        onChange={handlePetSearchChange}
      />
      </div>
      </div>
      <button className="login-btn rounded-pill" onClick={handlePetSearch}>
        <FontAwesomeIcon icon={faPaw} />
      </button>
    </div>
  );
}

export default AdvancedSearch;
