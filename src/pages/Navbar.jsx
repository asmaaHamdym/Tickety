import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import tickety from "../assets/tickety-red.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="relative w-full h-[80px] flex justify-between items-center py-4 md:px-14 text-black z-10">
      <div className="px-2 ml-8 w-40">
        <img src={tickety} alt="Logo Icon" onClick={() => navigate("/")}></img>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#1B0E16] text-[#806B77] mr-14">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#1B0E16] text-[#806B77] mr-14">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-[#1B0E16] text-[#806B77]">
          <Link to="/events">Events</Link>
        </li>
      </ul>

      <div className="hidden md:flex">
        {/* <div className='mr-8'>
          <button className='px-4 py-2 bg-white text-[#412234] font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#412234] focus:ring-opacity-75 border-[#412234] border-2'> Contact Us</button>
        </div>
       */}

        <div>
          <button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
            <Link to="/login">Create your next Event</Link>
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 px-2 cursor-pointer pr-8"
      >
        {!nav ? (
          <FaBars size={35} className="arrow-icon" />
        ) : (
          <FaTimes size={35} />
        )}
      </div>

      {/* Hamburger Menu Items */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#2E4052] flex flex-col justify-center items-center"
        }
      >
        <li className="hover:text-[#1B0E16] text-[#806B77] py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="hover:text-[#1B0E16] text-[#806B77] py-6 text-4xl">
          <Link onClick={handleClick} to="/about">
            About Us
          </Link>
        </li>
        <li className="hover:text-[#1B0E16] text-[#806B77] py-6 text-4xl">
          <Link onClick={handleClick} to="/events">
            Events
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
