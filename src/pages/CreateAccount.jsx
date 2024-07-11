import tickety from "../assets/tickety.png";
import togglePassword from "../assets/tooglePassword.png";
import googleImg from "../assets/google.png";
import eventImage from "../assets/events-image.png";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const api = import.meta.env.VITE_APP_API_URL;

export const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    emailInvalid: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState("");

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });

    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        setErrors({
          ...errors,
          [key]: "",
        });
      }
    }
    validatePassword();
  };

  const validateFormFields = (field) => {
    setErrors({
      ...errors,
      [field]: `${field} is required`,
    });
  };

  const validateEmail = () => {
    const emailRegex = new RegExp(
      `^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$`
    );
    if (!emailRegex.test(formData.email)) {
      errors.emailInvalid = "Email is not valid";
    } else {
      errors.emailInvalid = "";
    }
  };
  const validatePassword = () => {
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email) {
      validateEmail();
    }
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        validateFormFields(key);
        return;
      }
    }

    validatePassword();

    if (!isTermsChecked) {
      setErrors({
        ...errors,
        terms: "You must accept the terms and conditions",
      });
    } else {
      errors.terms = "";
    }
    // setFormValidated(true);

    setIsLoading(true);
    const formDataToSubmit = {
      full_name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    axios
      .post(`${api}/auth/register`, formDataToSubmit)
      .then((res) => {
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setIsLoading(false);
        setSignupError(err.response.data.error);
      });
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <div className="flex">
        <div
          className="w-1/3 hidden md:block h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${eventImage})` }}
        >
          <div className="flex">
            <Link onClick={() => navigate(-1)}>
              <FaArrowAltCircleLeft
                className="arrow-icon mt-8 ml-8 cursor-pointer"
                fill="white"
                size={45}
              />
            </Link>
            <img
              src={tickety}
              alt="Logo Icon"
              className="px-2 ml-8 mt-8 w-40 hover:cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <div className="md:w-[65%] w-full py-6 px-8 h-screen overflow-y-auto">
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="py-6 ">
              <h1 className="text-[#131B22] text-lg font-bold">
                Create your account
              </h1>

              <p className="text-[#586675] text-sm font-normal mt-1">
                Kindly input your details below to create your account
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#212D3A] text-sm mb-1 font-medium "
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                onChange={handleChange}
                id="name"
                name="name"
                value={formData.name}
                className="border-2 p-4 w-full rounded-md"
              />
              <span className="text-[#E33629]">{errors.name}</span>
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
              <span className="text-[#E33629]">
                {errors.email || errors.emailInvalid}
              </span>
            </div>
            <label
              htmlFor="password"
              className="block text-[#212D3A] text-sm mb-1 font-medium mt-4"
            >
              Password
            </label>
            <div className="flex justify-between">
              <input
                type="password"
                placeholder="Create your password"
                id="password"
                name="password"
                minLength={8}
                value={formData.password}
                className="border-2 p-4 w-full rounded-md"
                onChange={handleChange}
                ref={passwordRef}
              />
              <button
                type="button"
                onClick={() => {
                  passwordRef.current.type =
                    passwordRef.current.type === "text" ? "password" : "text";
                }}
                className="-ml-16 pr-4"
              >
                <img
                  src={togglePassword}
                  alt="toggle password "
                  className="w-6"
                />
              </button>
            </div>
            <span className="text-[#E33629]">{errors.password}</span>
            <label
              htmlFor="confirmPassword"
              className="block text-[#212D3A] text-sm mb-1 font-medium mt-4"
            >
              Confirm Password
            </label>
            <div className="flex justify-between">
              <input
                type="password"
                placeholder="Create your password"
                id="confirmPassword"
                name="confirmPassword"
                minLength={8}
                className="border-2 p-4 w-full rounded-md"
                onChange={handleChange}
                ref={confirmPasswordRef}
              />
              <button
                type="button"
                onClick={() => {
                  confirmPasswordRef.current.type =
                    confirmPasswordRef.current.type === "text"
                      ? "password"
                      : "text";
                }}
                className="-ml-16 pr-4"
              >
                <img
                  src={togglePassword}
                  alt="toggle password "
                  className="w-6"
                />
              </button>
            </div>
            <span className="text-[#E33629]">{errors.confirmPassword}</span>

            <div className="flex justify-between pb-12">
              <div className="mt-8">
                <input
                  type="checkbox"
                  className="rounded-md text-[#412234]"
                  id="checkbox"
                  required
                  value={isTermsChecked}
                  onChange={() => {
                    setIsTermsChecked(!isTermsChecked);
                  }}
                />
                <label htmlFor="checkbox" className="pl-3 s">
                  By checking this box, you agree to the{" "}
                  <span className="font-semibold">Terms & Condition </span>
                  and
                  <span className="font-semibold"> Privacy Policy</span>
                </label>

                <div className="text-[#E33629]">{errors.terms} </div>
              </div>
            </div>

            <div className="pb-4 text-center text-lg text-[#E33629]">
              {signupError}
            </div>
            <button
              type="submit"
              className={`mb-8 w-full py-4 bg-[#412234] text-white font-semibold rounded-lg shadow-md text-center ${
                isLoading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Loading...." : "Create an Account"}
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
              already have an account?
              <Link to="/login" className="ml-2 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
