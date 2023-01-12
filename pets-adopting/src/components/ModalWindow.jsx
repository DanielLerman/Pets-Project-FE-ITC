import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from "./Login"
import SignUp from './SignUp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

function ModalWindow() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true) 
    setFormType(true)};
  const [formtype, setFormType]=useState(true)

  return (
    <> 
     <span className="rounded-pill modalWindow" onClick={handleShow}>login</span>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className={!formtype?'d-flex justify-content-between' :""}>
        {!formtype&&<FontAwesomeIcon onClick={()=>setFormType(true)} className="d-flex align-self-start mx-4 mt-4 modal-back-btn " icon={faArrowLeft} />}
        <FontAwesomeIcon onClick={handleClose} className="d-flex align-self-end mx-4 mt-4 modal-close-btn " icon={faX} />
        </div>
        <Modal.Header className="d-flex align-self-center" >
          <Modal.Title className='modal-title d-flex fw-bolder '>{formtype? "Login": "SignUp" }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       {formtype? <Login setShow={setShow}/> :<SignUp/>}
    
        </Modal.Body>
        <Modal.Footer >
          {formtype&&<span className='notSigned-txt'>Don't have an account yet?  <span onClick={()=>setFormType(false)} className='notSigned-btn rounded-pill'>Sign-Up</span></span>}
        </Modal.Footer>
      </Modal>
     
    </>
  );
}

export default ModalWindow;
