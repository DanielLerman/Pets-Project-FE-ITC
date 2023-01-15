import { useContext } from "react";
import petsAdoptingContext from "../context/context"
import { Link, NavLink } from "react-router-dom";
import ModalWindow from "./ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Navigation(){
    const { currentUser, setCurrentUser,admin} =useContext(petsAdoptingContext);

    const handleLogOut=async()=>{
        const res=await axios.get('http://localhost:8080/LogOut', {withCredentials: true})
        setCurrentUser("")
    }
   
    
    return (
        <div className="nav-bar">
            <div className="nav-title"><img className="paw-img  rounded-circle" src="https://www.pngitem.com/pimgs/m/7-77458_pink-paw-print-png-transparent-png.png" alt="paw image"/><span >Pets<span className="nav-title-dot">.</span></span></div>
            <ul className="nav-bar-pages">
            <NavLink className="rounded-pill" activeclassname="active" to="/"> Home</NavLink>
            {currentUser==0? <ModalWindow />: <span className="rounded-pill logout-btn" onClick={handleLogOut}>Logout</span>}
            {admin&&<NavLink className="rounded-pill" activeclassname="active" to="/Pets"> Pets</NavLink>}
            {currentUser&&<NavLink className="rounded-pill"  activeclassname="active" to="/MyPets"> <FontAwesomeIcon icon={faHeart} /></NavLink>}
            {currentUser&&<NavLink className="rounded-pill"  activeclassname="active" to="/Profile">Profile </NavLink>}
            </ul>
        </div>



    )
    }
    export default Navigation;