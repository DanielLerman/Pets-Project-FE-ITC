import React, { useContext, useState } from 'react';
import petsAdoptingContext from "../context/context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw} from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const { imAdmin, setImAdmin, togglePassword, passwordShown} = useContext(petsAdoptingContext);
  const [userInfo, setUserInfo] = useState({  fullName: "" ,  email: "", password: "" , rePassword:"", });
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    console.log(userInfo)
  };

  return (
    <form className="login-form">
   
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
      value={userInfo.email}
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
  
    <button className="login-btn rounded-pill"> Let's Goo.. <FontAwesomeIcon icon={faPaw} /></button>
  </form>
  );
}
export default SignUp;