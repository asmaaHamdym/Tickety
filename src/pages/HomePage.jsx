import { Events } from "./Events";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

export const HomePage = () => {
  return (
    <>
      <div className="mx-12 my-4 py-8 pt-4 pb-0">
        <h1 className="text-3xl font-bold">Event Listing</h1>
        <div className="text-xl font-bold flex justify-between sm:font-normal">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
            doloribus.
          </p>
          <div>
            <button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md ">
              <Link to="events">View All</Link>
            </button>
          </div>
        </div>
      </div>
      <Events />
    </>
  );
};
