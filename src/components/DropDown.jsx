import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAuthContext } from "../store/auth-context";

export default function DropDown() {
  const [arrowOpen, setArrowOpen] = useState(false);
  const { handleUser } = useAuthContext();

  const handleLogout = () => {
    handleUser(null);
    localStorage.removeItem("user");
  };
  return (
    <div>
      <RiArrowDropDownLine
        size={30}
        onClick={() => setArrowOpen(!arrowOpen)}
        className="cursor-pointer"
      />
      {arrowOpen && (
        <div className="w-36 absolute border-2 border-[#412234] right-12 top-20 bg-white rounded-md">
          <ul className="text-[#412234] font-medium text-lg text-center hover:cursor-pointer">
            <li className="w-full p-2 hover:text-white hover:bg-[#412234]">
              My Events
            </li>
            <li className="w-full p-2 hover:text-white hover:bg-[#412234]">
              My Profile
            </li>
            <li
              className="w-full p-2 hover:text-white hover:bg-[#412234] "
              onClick={handleLogout}
            >
              Sign out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
