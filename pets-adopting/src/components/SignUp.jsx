import React, { useContext, useState } from 'react';
import petsAdoptingContext from "../context/context";
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw} from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const { usersList, setUsersList, togglePassword, passwordShown, setcurrentUser} = useContext(petsAdoptingContext);
  const [userInfo, setUserInfo] = useState({  fullName: "" ,  email: "", password: "" , rePassword:"", phoneNumber:""});
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
 const addNewUser=(newUser)=>{
  const usersArray=[...usersList, newUser]
  setUsersList(usersArray)
 }
  const handleSignUp =async(e)=>{
    e.preventDefault() 
    try{
      const res=await axios.post('http://localhost:8080/SignUp',{...userInfo})
      addNewUser(res.data)
      }catch(err){console.log(err)}
  }

  return (
    <form className="login-form" onSubmit={handleSignUp}>
  
      <input
    className="rounded-pill border border-grey border border-2"
      onChange={handleChange}
      placeholder="Full Name"
      value={userInfo.fullName}
      id="fullName"
    />
     <input
     type="tel"
    className="rounded-pill border border-grey border border-2"
      onChange={handleChange}
      placeholder="Phone Number"
      value={userInfo.phoneNumber}
      id="phoneNumber"
    />
      <input
    className="rounded-pill border border-grey border border-2"
      onChange={handleChange}
      placeholder="Email"
      value={userInfo.email}
      id="email"
    />
    <input
     className="rounded-pill border border-grey border border-2"
      onChange={handleChange}
      placeholder="Password"
      value={userInfo.password}
      id="password"
      type={passwordShown ? "text" : "password"}
    />
    <div className="show-password d-inline-flex align-self-center mt-2"> <input className=" me-1" type="checkbox" onClick={togglePassword}/><span>Show Password</span> </div>
    <label className='align-self-center my-3 fw-semibold'>Confirm Password</label>
      <input
     className="rounded-pill border border-grey border border-2"
      onChange={handleChange}
      placeholder="Password"
      value={userInfo.rePassword}
      id="rePassword"
      type={passwordShown ? "text" : "password"}
    />
  
    <button className="login-btn rounded-pill" type='submit'> Let's Goo.. <FontAwesomeIcon icon={faPaw} /></button>
  </form>
  );
}
export default SignUp;