import React from 'react';
import heroImage from '../assets/hero-image.png'

const Home = () => {
  return (
    <div>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg">This is a short description about the website.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
