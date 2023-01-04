import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw} from "@fortawesome/free-solid-svg-icons";

function AdvancedSearch() {
  return (
   <>
   <Form className=" advanced-search-form d-flex  flex-column ">
   <Form.Group className=" d-flex w-80" controlId="formBasicCheckbox">
   <Form.Label className='mx-2'>Adoption Status</Form.Label>
        <Form.Check     
  className=" checkbox mx-2"type="checkbox" label="Avilable" />
        <Form.Check className="mx-2" type="checkbox" label="Adopted" />
      </Form.Group>
    <Form.Select className='w-80' aria-label="Default select example">
      <option>Height</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>
    <Form.Select className='w-80 mt-2' aria-label="Default select example">
      <option>Weight</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
  
    </Form.Select>
    <Form.Control className="w-80 mt-2"id="disabledTextInput" placeholder="Name" />
    <button className="login-btn rounded-pill"><FontAwesomeIcon icon={faPaw} /></button>
   </Form>
   </> 

  )
}

export default AdvancedSearch
