import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';

const PetFormBio = () => {
  return (
   <div className=' w-100'>
    <TextareaAutosize   className='w-100 p-2 outline-none'  style={{ width: "100%",resize:"none" }} minRows={13}  placeholder="Your Pet Story.."/>
   </div>


  
  )
}

export default PetFormBio;
