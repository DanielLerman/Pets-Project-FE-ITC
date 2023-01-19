import React, { useContext, useState ,useEffect} from 'react';
import petsAdoptingContext from "../context/context";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw} from "@fortawesome/free-solid-svg-icons";

const ProfileSettings = () => {
    const {togglePassword, passwordShown,setCurrentUser, currentUser} = useContext(petsAdoptingContext);
  const [toUpdateInfo, setToupdateInfo]=useState({  fullName: "" ,  email: "", password: "" , rePassword:"", phoneNumber:""})

 
  const handleUserInfoUpdate = (e) => {
       setToupdateInfo({ ...toUpdateInfo, [e.target.id]: e.target.value });
    };

    const updateUser=async(e)=>{
      e.preventDefault();
      try{
      const res= await axios.post(`http://localhost:8080/Update` ,{...toUpdateInfo},{withCredentials: true})
      setCurrentUser(res.data)
      }catch(err){console.log(err)}
    }

  return (
    <form className="updateProfile-form login-form justify-content-center rounded-5 " >
    <input
  className="rounded-pill border border-grey border border-2"
    onChange={handleUserInfoUpdate}
    placeholder={currentUser.fullName}
    value={toUpdateInfo.fullName}
    id="fullName"
  />
   <input
   type="tel"
  className="rounded-pill border border-grey border border-2"
  onChange={handleUserInfoUpdate}
    placeholder={currentUser.phoneNumber}
    value={toUpdateInfo.phoneNumber}
    id="phoneNumber"
  />
    <input
  className="rounded-pill border border-grey border border-2"
    onChange={handleUserInfoUpdate}
    placeholder={currentUser.email}
    value={toUpdateInfo.email}
    id="email"
  />
  <input
   className="rounded-pill border border-grey border border-2"
    onChange={handleUserInfoUpdate}
    placeholder="new password"
    value={toUpdateInfo.password}
    id="password"
    type={passwordShown ? "text" : "password"}
  />
  <div className="show-password d-inline-flex align-self-center mt-2"> <input className=" me-1" type="checkbox" onClick={togglePassword}/><span>Show Password</span> </div>
  <label className='align-self-center my-3 fw-semibold'>Confirm Password</label>
    <input
   className="rounded-pill border border-grey border border-2"
    onChange={handleUserInfoUpdate}
    placeholder="Password"
    value={toUpdateInfo.rePassword}
    id="rePassword"
    type={passwordShown ? "text" : "password"}
  />
  <button onClick={updateUser} className="login-btn rounded-pill" type='submit'> Update <FontAwesomeIcon icon={faPaw} /></button>
</form>
  
)
  }
export default ProfileSettings
