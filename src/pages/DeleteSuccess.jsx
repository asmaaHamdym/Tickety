import React from 'react';
import checkIcon from '../assets/check-icon.png'
import { Link } from 'react-router-dom';


const DeleteSuccess = () => {
  if (!isOpen) return null;
  
  useEffect(() => {
    document.body.addEventListener("click", () => {
      closeModal()
    })
  })
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="p-4 shadow-lg max-w-md w-full border-2 border-[#412234] bg-white mx-auto rounded-md text-center">
        <h2 className="text-xl mb-4 text-[#131B22] font-semibold ">Event deleted successfully!</h2>
        <img src={checkIcon} alt ='Reach Icon' className='mt-2 mx-auto'/>
        <p className='text-sm text-[#2E4052] mt-2'>Your event has been successfully deleted </p>
        <Link to="/">
          <button
            className="mt-4 w-full px-4 py-2 bg-[#412234] text-white font-semibold rounded-md shadow-md"
            onClick={closeModal}
          >
            Proceed to Dashboard
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DeleteSuccess;