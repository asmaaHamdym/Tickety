import { useState, useRef } from "react";
import ReactFlagsSelect from "react-flags-select";
import { RiUploadCloudFill } from "react-icons/ri";
import Navbar from "./Navbar";
import eventImage from "../assets/events-image.png";
import uploadImage from "../assets/upload.png";
import Input from "../components/Input";
import { createEvent } from "../api/CreateEvent";
import EventSuccess from "./EventSuccess";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import tickety from "../assets/tickety.png";

const CreateEvent = () => {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    date: "",
    time: "",
    RSVP: "",
  });
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSelect = (code) => {
    setFormData({ ...formData, location: code });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createEvent(formData);
      if (response) {
        console.log("Event created successfully:", response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    toast(<EventSuccess />, {
      position: "top-center",
    });
  };

  return (
    <>
      <Navbar />
      {/* <div className="bg-[#ECE9EB] h-screen w-full rounded-lg items-center mx-auto container justify-center"> */}
      <div className="flex w-full">
        <ToastContainer />
        <div className="hidden md:block w-1/3 bg-center bg-cover" style={{ backgroundImage: `url(${eventImage})` }}>
          {/* <img
            src={tickety}
            alt="Logo Icon"
            className="px-2 ml-8 mt-8 w-40 hover:cursor-pointer"
            onClick={() => navigate("/")}
          ></img> */}
        </div>

        <div className="md:w-[65%] w-full py-6  px-3">
          <div>
            <h2 className="text-[#131B22] text-lg font-bold">
              Create your Event
            </h2>
            <p className="text-[#586675] text-sm font-normal mt-1">
              Kindly input your details below to create your event
            </p>
          </div>

          <div className="mt-6 mb-2">
            <p className="mb-1 text-[#212D3A] text-sm">Upload event image</p>

            <div
              className="p-10 flex justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${uploadImage})` }}
            >
              <input
                style={{ display: "none" }}
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                accept=".jpg .jpeg .png"
              />
              <button
                className="bg-white border-[#806B77] border-2 p-5 rounded-lg"
                onClick={() => inputRef.current.click()}
              >
                <RiUploadCloudFill className="mx-auto upload-icon" size={20} />
                <p className="text-[#412234] flex justify-center text-sm font-semibold">
                  Upload Photos <br></br>and Video
                </p>
              </button>
            </div>
            {fileName && (
              <div className="mt-1">
                <h2 className="text-base font-semibold mb-2 border border-[#806B77] w-max p-1 bg-[#806B77] rounded-lg">
                  {fileName}
                </h2>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-2">
              <label
                htmlFor="event name"
                className="block text-[#212D3A] text-sm mb-1 font-medium"
              >
                Event Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter event name"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="event description"
                className="block text-[#212D3A] text-sm mb-1 font-medium"
              >
                About the event
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]"
                placeholder="Describe your event"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="options"
                className="block text-[#212D3A] text-sm mb-1 font-medium"
              >
                Event Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-3 text-sm bg-[#eaecee] border-2  border-[#C4BAC0] rounded-md shadow-sm focus:outline-none focus:border-sky-500"
              >
                <option disabled value="">
                  Select event category
                </option>
                <option value="party" className="text-[#212D3A]">
                  Party
                </option>
                <option value="conference" className="text-[#212D3A]">
                  Conference
                </option>
                <option value="concert" className="text-[#212D3A]">
                  Concert
                </option>
                <option value="tech" className="text-[#212D3A]">
                  Tech Event
                </option>
                <option value="others" className="text-[#212D3A]">
                  Others
                </option>
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="location"
                className="block text-[#212D3A] text-sm mb-1 font-medium"
              >
                Location
              </label>
              <ReactFlagsSelect
                selected={formData.location}
                onSelect={handleSelect}
                name="location"
                id="location"
                className="bg-[#eaecee] border-2"
                placeholder="Enter location"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="date"
                className="block text-[#212D3A] text-sm mb-1 font-medium"
              >
                Event Date
              </label>
              <Input
                type="date"
                id="date"
                name="date"
                placeholder="Enter event date"
                value={formData.date}
                onChange={handleChange}
                className="date-input"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="dtime"
                className="block text-[#212D3A] text-sm mb-1 font-medium"
              >
                Start Time
              </label>
              <Input
                type="time"
                id="time"
                name="time"
                placeholder="Enter event time"
                value={formData.time}
                onChange={handleChange}
                className="time-input"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="rsvp"
                className="block text-[#212D3A] text-sm mb-1 font-medium"
              >
                RSVP
              </label>
              <Input
                type="number"
                id="rsvp"
                name="RSVP"
                value={formData.RSVP}
                onChange={handleChange}
                placeholder="Enter RSVP Number"
              />
            </div>

            <div className="mt-4">
              <button className="px-4 py-2 w-full bg-[#412234] text-white font-semibold rounded shadow-md">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CreateEvent;
