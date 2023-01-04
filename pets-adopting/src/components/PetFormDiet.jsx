import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
const PetFormDiet = () => {
  return (
    <div className=' w-100'>
    <TextareaAutosize   className='w-100 p-2'  style={{ width: "100%" ,resize:"none"}} minRows={13}  placeholder="Special Diet.."/>
   </div>
  )
}

export default PetFormDiet;
