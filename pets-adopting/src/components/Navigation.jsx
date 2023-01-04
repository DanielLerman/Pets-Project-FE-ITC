import { useContext } from "react";
import petsAdoptingContext from "../context/context"
import { Link, NavLink } from "react-router-dom";
import ModalWindow from "./ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
function Navigation(){
    // const { setOpenModal, openModal} =useContext(petsAdoptingContext);
   
    
    return (
        <div className="nav-bar">
            <div className="nav-title"><img className="paw-img  rounded-circle" src="https://www.pngitem.com/pimgs/m/7-77458_pink-paw-print-png-transparent-png.png" alt="paw image"/><span >Pets<span className="nav-title-dot">.</span></span></div>
            <ul className="nav-bar-pages">
            <NavLink className="rounded-pill" activeclassname="active" to="/"> Home</NavLink>
            <ModalWindow />
            <NavLink className="rounded-pill" activeclassname="active" to="/Pets"> Pets</NavLink>
            <NavLink className="rounded-pill"  activeclassname="active" to="/MyPets"> <FontAwesomeIcon icon={faHeart} /></NavLink>
            </ul>
        </div>



    )
    }
    export default Navigation;