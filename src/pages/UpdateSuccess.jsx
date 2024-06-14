import React from 'react';
import checkIcon from '../assets/check-icon.png'
import { Link } from 'react-router-dom';


const UpdateSuccess = () => {
  return (
    <div className='border border-[#412234] bg-white w-60 mx-auto shadow-md rounded-lg container'>
      <div className='p-4 text-center'>
        <p className="text-[#131B22] text-lg font-semibold mb-2">Event Updated successfully!</p>
        <img src={checkIcon} alt ='Reach Icon' className='mt-2 mx-auto'></img>
        <p className='text-sm text-[#2E4052] mt-2'>Your Event has been successfully Updated</p>
        <button className= 'mt-3 w-full px-4 py-2 bg-[#412234] text-white font-semibold rounded-md shadow-md'><Link to="/">Proceed to Dashboard</Link></button>
      </div>
    </div>
  )
}

export default UpdateSuccess;