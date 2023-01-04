import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const NotAdmin = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
    <Modal
            size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className='d-flex flex-column bg-warning'>
      <span className="rounded-pill " onClick={handleClose}>Exit</span>
      <span className='fs-3 fw-bold'>Welcome To <span>Pets.<FontAwesomeIcon icon={faPaw} /></span></span>  
      <span className='fw-bold'>Let's Find a furry Friend</span>
      </Modal.Header>
      {/* <div className={!formtype&&'d-flex justify-content-between' }>
      {!formtype&&<FontAwesomeIcon className="d-flex align-self-start mx-4 mt-4 modal-back-btn " icon={faArrowLeft} />}
      <FontAwesomeIcon onClick={handleClose} className="d-flex align-self-end mx-4 mt-4 modal-close-btn " icon={faX} />
      </div> */}
     
      {/* <Modal.Header className="d-flex align-self-center" > */}
        {/* <Modal.Title className=' d-flex fw-bolder '>Enter Admin key</Modal.Title> */}
      {/* </Modal.Header> */}
      {/* <Modal.Body className='d-flex align-items-center flex-column'>
      <span className='mx-3 fw-semibold text-warning fs-6'>Continue As Admin</span>
      <input className="p-1 w-50 fs-6 rounded-pill border border-grey border-3" placeholder='Enter Your Admin Key'/>
      <span>Not Admin</span>

  
      </Modal.Body> */}
      {/* <Modal.Footer >
        <span className='notSigned-txt'>Don't have an account yet?  <span className='notSigned-btn rounded-pill'>Sign-Up</span></span>
      </Modal.Footer> */}
    </Modal>
    </>
  )
}

export default NotAdmin
