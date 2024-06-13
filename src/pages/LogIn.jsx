import tickety from "../assets/tickety.png";
import googleImg from "../assets/google.png";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div className="flex">
      <div className="bg-login-img bg-contain bg-no-repeat w-1/3 h-screen">
        <div className="px-2 ml-8 mt-8 w-40">
          <img src={tickety} alt="Logo Icon"></img>
        </div>
      </div>
      <div className="w-[65%] px-8">
        <form className="mt-3">
          <div className="py-6 ">
            <h1 className="text-[#131B22] text-lg font-bold">Welcome Back!</h1>

            <p className="text-[#586675] text-sm font-normal mt-1">
              Kindly input your details below to log in to your account
            </p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-[#212D3A] text-sm mb-1 font-medium "
            >
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              id="email"
              className="border-2 p-4 w-full rounded-md"
            />
          </div>
          <label
            htmlFor="password"
            className="block text-[#212D3A] text-sm mb-1 font-medium mt-8"
          >
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            id="password"
            className="border-2 p-4 w-full rounded-md mb-8"
          />
          <div className="flex justify-between pb-12">
            <div className="checkbox">
              <input
                type="checkbox"
                className="rounded-md text-[#412234]"
                id="checkbox"
              />
              <label htmlFor="checkbox" className="pl-3 s">
                Keep me Logged in
              </label>
            </div>
            <p className="font-semibold">Forgot Password?</p>
          </div>
          <div className="mb-8 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md text-center">
            <button className="p-2">Log into Account</button>
          </div>
          <div className="pb-12">
            <button className="flex justify-center border-1 border-[#806B77] w-full mb-8 px-8 py-4 bg-white text-[#412234] font-semibold rounded-lg shadow-md ">
              <img src={googleImg} alt="google icon" className="w-[24px] " />
              <p className="ml-2">Continue with Google</p>
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
