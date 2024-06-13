import tickety from "../assets/tickety.png";
import googleImg from "../assets/google.png";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div className="flex">
      <div className="bg-login-img bg-contain bg-no-repeat w-1/2 h-screen">
        <div className="px-2 ml-8 mt-8 w-40">
          <img src={tickety} alt="Logo Icon"></img>
        </div>
      </div>
      <div className="inputs">
        <form className="mt-3">
          <div className="py-6 px-12">
            <h1 className="text-[#131B22] text-lg font-bold">Welcome Back!</h1>

            <p className="text-[#586675] text-sm font-normal mt-1">
              Kindly input your details below to log in to your account
            </p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-[#212D3A] text-sm mb-1 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="email"
            />
          </div>
          <label
            htmlFor="password"
            className="block text-[#212D3A] text-sm mb-1 font-medium"
          >
            Email Address
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
          />
          <div className="flex justify-between">
            <div className="checkbox">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="p-2 ">
                Keep me Logged in
              </label>
            </div>
            <p className="forgot">Forgot Password?</p>
          </div>
          <div className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md ">
            <button className="submit">Log into Account</button>
          </div>
          <div>
            <button className="flex px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
              <img src={googleImg} alt="google icon" className="ffffff" />{" "}
              Continue with Google
            </button>
          </div>
        </form>
        <div className="s">
          <p className="">
            Don’t have an account?
            <Link to="create-account"> Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
