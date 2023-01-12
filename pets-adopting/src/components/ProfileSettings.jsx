import React, { useContext, useState } from 'react';
import petsAdoptingContext from "../context/context";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw} from "@fortawesome/free-solid-svg-icons";

const ProfileSettings = () => {
    const {togglePassword, passwordShown} = useContext(petsAdoptingContext);
    const [updateUserInfo, setUpdateUserInfo]=useState({  fullName: "" ,  email: "", password: "" , rePassword:"", phoneNumber:""});
    const handleChange = (e) => {
        setUpdateUserInfo({ ...updateUserInfo, [e.target.id]: e.target.value });
      };
  return (
    <form className="login-form" >
    <input
  className="rounded-pill border border-grey border border-2"
    onChange={handleChange}
    placeholder="Full Name"
    value={updateUserInfo.fullName}
    id="fullName"
  />
   <input
   type="tel"
  className="rounded-pill border border-grey border border-2"
  onChange={handleChange}
    placeholder="Phone Number"
    value={updateUserInfo.phoneNumber}
    id="phoneNumber"
  />
    <input
  className="rounded-pill border border-grey border border-2"
    onChange={handleChange}
    placeholder="Email"
    value={updateUserInfo.email}
    id="email"
  />
  <input
   className="rounded-pill border border-grey border border-2"
    onChange={handleChange}
    placeholder="Password"
    value={updateUserInfo.password}
    id="password"
    type={passwordShown ? "text" : "password"}
  />
  <div className="show-password d-inline-flex align-self-center mt-2"> <input className=" me-1" type="checkbox" onClick={togglePassword}/><span>Show Password</span> </div>
  <label className='align-self-center my-3 fw-semibold'>Confirm Password</label>
    <input
   className="rounded-pill border border-grey border border-2"
    onChange={handleChange}
    placeholder="Password"
    value={updateUserInfo.rePassword}
    id="rePassword"
    type={passwordShown ? "text" : "password"}
  />
  <button className="login-btn rounded-pill" type='submit'> Let's Goo.. <FontAwesomeIcon icon={faPaw} /></button>
</form>
  )
}

export default ProfileSettings
