import tickety from "../assets/tickety.png";
import googleImg from "../assets/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,

      [id]: value,
    });
    if (formData.email) {
      setErrors({
        ...errors,
        email: "",
      });
    }
    if (formData.password) {
      setErrors({
        ...errors,
        password: "",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors({
        ...errors,
        email: "Email is required",
      });
      return;
    }
    const emailRegex = new RegExp(
      `^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$`
    );

    if (!emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: "Email is not valid",
      });
      return;
    }
    if (!formData.password) {
      setErrors({
        ...errors,
        password: "Password is required",
      });
      return;
    }
  };
  return (
    <div className="flex">
      <div className="bg-login-img bg-contain bg-no-repeat w-1/3 h-screen">
        <div className="px-2 ml-8 mt-8 w-40">
          <img src={tickety} alt="Logo Icon"></img>
        </div>
      </div>
      <div className="w-[65%] px-8">
        <form className="mt-3" onSubmit={handleSubmit}>
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
              placeholder="Enter your email address"
              onChange={handleChange}
              id="email"
              name="email"
              value={formData.email}
              className="border-2 p-4 w-full rounded-md"
            />
            <span className="text-[#E33629]">{errors.email}</span>
          </div>
          <label
            htmlFor="password"
            className="block text-[#212D3A] text-sm mb-1 font-medium mt-8"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            minLength={8}
            value={formData.password}
            className="border-2 p-4 w-full rounded-md"
            onChange={handleChange}
          />
          <span className="text-[#E33629]">{errors.password}</span>

          <div className="flex justify-between pb-12">
            <div className="mt-8">
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

          <button
            type="submit"
            className="mb-8 w-full py-4 bg-[#412234] text-white font-semibold rounded-lg shadow-md text-center"
          >
            Log into Account
          </button>

          <div className="pb-12">
            <button
              type="button"
              className="flex justify-center border-2 border-button-border w-full bg-white text-[#412234] font-semibold rounded-lg mb-8 px-8 py-4"
            >
              <img src={googleImg} alt="google icon" className="w-[24px] " />
              <p className="ml-2">Continue with Google</p>
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <p>
            Don’t have an account?
            <Link to="create-account" className="ml-2 font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
