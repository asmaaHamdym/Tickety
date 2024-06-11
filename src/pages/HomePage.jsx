import { Events } from "./Events";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>Event Listing</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
        doloribus.
      </p>
      <div>
        <button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
          <Link to="events">View All</Link>
        </button>
      </div>
      <Events />
    </>
  );
};
