import React from 'react';
import checkIcon from '../assets/check-icon.png'
import { Link } from 'react-router-dom';


const EventSuccess = () => {
  return (
    <div className='border border-[#412234] bg-white w-max mx-auto shadow-md rounded-lg container'>
      <div className='p-4 text-center'>
        <p className="text-[#131B22] text-lg font-semibold mb-2">Event Created successfully!</p>
        <img src={checkIcon} alt ='Reach Icon' className='mt-2 mx-auto'></img>
        <p className='text-sm text-[#2E4052] mt-2'>You event has been successfully created<br></br> Attendees can now view details and RSVP!</p>
        <button className= 'mt-3 w-full px-4 py-2 bg-[#412234] text-white font-semibold rounded-md shadow-md'><Link to="/createevent">Create Event</Link></button>
      </div>
    </div>
  )
}

export default EventSuccess;