import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import tickety from "../assets/tickety-red.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/auth-context";
import DropDown from "../components/DropDown";
// import Avatar from "../components/Avatar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const handleClick = () => setNav(!nav);

  return (
    <div className="relative w-full h-[80px] flex justify-between items-center py-4 md:px-14 text-black z-10">
      <div className="px-2 ml-8 w-40">
        <img
          src={tickety}
          className="hover:cursor-pointer"
          alt="Logo Icon"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Menu */}
      <nav>
        <ul className="hidden md:flex">
          <li className="mr-14">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#1B0E16] font-medium" : "text-[#806B77]"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-14">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#1B0E16] font-medium" : "text-[#806B77]"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-[#1B0E16] font-medium" : "text-[#806B77]"
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex">
        <div className="flex items-center">
          {user ? (
            <>
              <Link to="/create-event"><button className="px-4 py-2  mx-4 bg-[#412234] text-white font-semibold rounded-lg shadow-md"> Create Event </button></Link>
              <Avatar imageUrl={""} name={user.full_name}/>
              <div className="border-[#806B77] border-2 rounded-full h-6 w-6 flex items-center justify-center">
                <span className="capitalize">{user.full_name[0]}</span>
              </div>
              {/* <Avatar imageUrl={""} name={user ? user.full_name : null} /> */}
              <DropDown />
            </>
          ) : (
            <div>
              <Link to="/login"><button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
                Login
              </button></Link>
            </div>
          )}
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
          <NavLink onClick={handleClick} to="/">
            Home
          </NavLink>
        </li>
        <li className="hover:text-[#1B0E16] text-[#806B77] py-6 text-4xl">
          <NavLink onClick={handleClick} to="/about">
            About Us
          </NavLink>
        </li>
        <li className="hover:text-[#1B0E16] text-[#806B77] py-6 text-4xl">
          <NavLink onClick={handleClick} to="/events">
            Events
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
