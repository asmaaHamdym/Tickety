import React from 'react';
import {FaTimes} from 'react-icons/fa'
import heroImage from '../assets/hero-image.png'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2E4052] via-[#2E4052]"></div> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative md:flex items-center px-10 h-full md:justify-between">

          <div className="text-white py-8">
            <h1 className="md:text-6xl text-4xl font-bold mb-4">Let's help you create a <br></br>Memorable event</h1>
            <p className="text-lg">Experience seamless planning and extraordinary<br></br> celebrations with our expert event management team</p>
            
            <div>
              <button className= 'px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md mt-2'><Link to="/createevent">Create your next Event</Link></button>
            </div>
          </div>

          <div className='bg-white p-8 rounded-md mt-8'>
            <div className='cursor-pointer flex justify-end -mt-2 -mr-4'>
              <FaTimes size={25}/>
            </div>
            <div className='text-center'>
              <p className='text-[#131B22] text-sm font-bold mb-4'>My Upcoming Events</p>
              <div className='flex mb-4 justify-center'>
                <div className='mr-4 '>
                  <p className='text-[#131B22] font-bold text-base'>10</p>
                  <p className='text-[#131B22] text-sm'>Days</p>
                </div>

                <div className='mr-4'>
                  <p className='text-[#131B22] font-bold text-base'>09</p>
                  <p className='text-[#131B22] text-sm'>Hrs</p>
                </div>

                <div className=''>
                  <p className='text-[#131B22] font-bold text-base'>54</p>
                  <p className='text-[#131B22] text-sm'>Mins</p>
                </div>
              </div>
              
            </div>

            <div className='mt-2'>
              <div className='bg-[#ECE9EB] border-[#ECE9EB] text-[#586675] text-sm mb-2 p-4 w-60 rounded-lg'>Youth Conference</div>
              <div className='bg-[#ECE9EB] border-[#ECE9EB] text-[#586675] text-sm mb-2 p-4 w-60 rounded-lg'>Ikeja, Nigeria</div>
              <div className='bg-[#ECE9EB] border-[#ECE9EB] text-[#586675] text-sm mb-2 p-4 w-60 rounded-lg'>Education</div>
            </div>

            <div className='mt-3'>
              <button className='w-full px-4 py-2 bg-[#2E4052] text-white rounded-lg text-sm'>
                Manage your Event
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Home;
