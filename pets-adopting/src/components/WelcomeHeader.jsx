import React, { useState, useContext } from 'react';
import petsAdoptingContext from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal';
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faX} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Login from './Login';
import SignUp from './SignUp';
function WelcomeHeader(){

 const [welcomeShow, setWelcomeShow] = useState(true);
  const handleClose = () => setWelcomeShow(false);
  const [loginForm, setLoginForm]=useState(false)
  const [signUPForm, setSignUpForm]=useState(false)

  const togglforms=()=>{
    if(loginForm) {setLoginForm(false)}
    else if (signUPForm) setSignUpForm(false)
  }
  
  return (
    <>
    <Modal
     size="lg"
      show={welcomeShow}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className=' header-exit'
    >
      <Modal.Header className='welcome-header d-flex flex-column '>
        <div className='header-nav mt-2 d-flex justify-content-between w-100'>
      {loginForm || signUPForm ?<FontAwesomeIcon  className="d-flex align-self-start  modal-back-btn " onClick={togglforms} icon={faArrowLeft} />:""}
      <span className=" header-exit align-self-end " onClick={handleClose}><FontAwesomeIcon className=' ' icon={faX}/></span>
      </div>
      <span className='fs-3 fw-bold '>Welcome To <span>Pets.<FontAwesomeIcon icon={faPaw} /></span></span>  
      <span className=' fs-5'>Let's Find A Furry Friend</span>
      </Modal.Header>
      <Modal.Body className='d-flex flex-column align-items-center'>
      {!loginForm&&!signUPForm&&<span className=' login-now-btn rounded-pill mb-3' onClick={()=>{setLoginForm(true)}}>Log-in Now</span>}
      {!loginForm&&!signUPForm&&<span className='notSigned-txt'>Don't have an account yet?  <span onClick={()=>{setSignUpForm(true)}}  className='notSigned-btn rounded-pill'>Sign-Up</span></span>}
      {loginForm&& <Login/>}
      {signUPForm&&<SignUp/>}
      </Modal.Body>
    </Modal>
    </>
  )
    }
    export default WelcomeHeader;