import React from 'react';
import checkIcon from '../assets/check-icon.png'
import { Link } from 'react-router-dom';


const SignupSuccess = () => {
  return (
    <div className='border border-[#412234] bg-white w-60 mx-auto shadow-md rounded-lg container'>
      <div className='p-4 text-center'>
        <p className="text-[#131B22] text-lg font-semibold mb-2">Welcome Onboard!</p>
        <img src={checkIcon} alt ='Reach Icon' className='mt-2 mx-auto'/>
        <p className='text-sm text-[#2E4052] mt-2'>You have successfully created your account. You <br/> can create an event</p>
        <button className= 'mt-3 w-full px-4 py-2 bg-[#412234] text-white font-semibold rounded-md shadow-md'><Link to="/create-event">Create Event</Link></button>
      </div>
    </div>
  )
}

export default SignupSuccess;