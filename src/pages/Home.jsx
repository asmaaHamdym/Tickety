import React from 'react';
import heroImage from '../assets/hero-image.png'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <Navbar/>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2E4052] via-[#2E4052]"></div> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center px-10 h-full">

          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">Let's help you create a <br></br>Memorable event</h1>
            <p className="text-lg">Experience seamless planning and extraordinary<br></br> celebrations with our expert event management team</p>
            
            <div>
              <button className= 'px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md'><Link to="/createevent">Create your next Event</Link></button>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Home;
