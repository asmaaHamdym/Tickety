import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      404 Not Found!
      <Link to="/" className="block text-lg text-purple-400 underline ">
        Go Back to Home Page
      </Link>
    </div>
  );
};
