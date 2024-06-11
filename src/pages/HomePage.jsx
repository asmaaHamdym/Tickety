import { Events } from "./Events";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

export const HomePage = () => {
  return (
    <>
      <h1>Event Listing</h1>
      <div className="events-header">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
          doloribus.
        </p>
        <div>
          <button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
            <Link to="events">
              <span className="view-icon">+</span>View All
            </Link>
          </button>
        </div>
      </div>
      <Events />
    </>
  );
};
