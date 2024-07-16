import React, { useState, useRef, useEffect } from 'react';
import ReactFlagsSelect from "react-flags-select";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Navbar from './Navbar';
import uploadImage from '../assets/upload.png'
import Input from '../components/Input';
import { updateEvent } from '../api/UpdateEvent';
import { deleteEvent } from '../api/DeleteEvent';
import { Link, useParams } from 'react-router-dom';
import UpdateSuccess from './UpdateSuccess';
import { useForm, Controller} from 'react-hook-form';
import Label from '../components/Label';
import axios from 'axios';

const api = import.meta.env.VITE_APP_API_URL;

const ManageEvent = () => {
  const { eventId } = useParams()

  const [fileName, setFileName] = useState("");
  const [eventData, setEventData] = useState({
    id: "",
    name: "",
    description: "",
    category: "",
    location: "",
    date: "",
    Time: "",
    status: "",
    RSVP: "",
   });
  // const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${api}/${id}`)
      .then((res) => {
        setEventData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
      location: "",
    },
  });

  const inputRef = useRef(null);
  const nameRef = useRef(null)

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  useEffect(() => {
    axios.get(`${api}/${eventId}`)
    .then((res) => {
      console.log(res.data.data)
      nameRef.current = "dummy name"
    })
    .catch((err) => {
      console.log("error loading data")
    });
  }, [eventId])

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await updateEvent(id, formData);
      console.log("Event updated successfully:", response);
    } catch (error) {
      console.error("An error occurred:", error);
    }
    openModal();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteEvent(id);
      console.log("User deleted successfully:", response);
      // setFormData(initialState)
    } catch (error) {
      console.error("An error occurred:", error);
    }
    openModal();
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#806B77]">
        <div className="flex justify-between md:px-40 px-6 py-6">
          <div className="flex">
            <Link to="/events">
              <FaArrowAltCircleLeft
                className="arrow-icon mr-4 cursor-pointer"
                size={40}
              />
            </Link>
            {eventData ? (
              <div className="font-bold text-2xl">{eventData.name}</div>
            ) : (
              <div className="font-bold text-2xl">My Events</div>
            )}
          </div>

          {/* <div>
            <button
              className="px-10 py-2 bg-[#412234] text-white font-semibold rounded shadow-md"
              onClick={() => {
                navigate(`/rsvps/${id}`);
              }}
            >
              View RSVP
            </button>
          </div> */}
        </div>

        <div className="md:w-3/4 w-full items-center mx-auto">
          <div className="py-6 md:px-28 px-8 bg-white mx-4 md:mx-0 ">
            <div className="md:w-5/6 mx-auto">
              <div className="md:mt-6 mb-2 ">
                <p className="mb-1 text-[#212D3A] text-sm">
                  Upload event image
                </p>

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
                    <RiUploadCloudFill
                      className="mx-auto upload-icon"
                      size={20}
                    />
                    <p className="text-[#412234] flex justify-center text-sm font-semibold">
                      Upload Photos <br />
                      and Video
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

              <form className='mt-3' onSubmit={handleSubmit(handleUpdate)}>
                <div className="mb-3">
                  <Label htmlFor="event name">Event Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    ref={nameRef}
                    name="name" 
                    register={register}
                    required
                    placeholder="Enter event name"
                  />
                  {errors.name && (
                    <p className=" text-[#E33629] text-sm">
                      Event name is required
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Label htmlFor="event description">About the event</Label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    {...register("description", {
                      required: "Event description is required",
                    })}
                    className="mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]"
                    placeholder="Describe your event"
                  />
                  {errors.description && (
                    <p className=" text-[#E33629] text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Label htmlFor="options">Event Category</Label>
                  <select
                    id="category"
                    name="category"
                    {...register("category", {
                      required: "Select an event category",
                    })}
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
                  {errors.category && (
                    <p className=" text-[#E33629] text-sm">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Label htmlFor="location"> Location </Label>
                  <Controller
                    name="location"
                    id="location"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <ReactFlagsSelect
                        {...field}
                        selected={field.value}
                        onSelect={field.onChange}
                        className="bg-[#eaecee] react-flag-hide-padding-bottom"
                        placeholder="Enter location"
                      />
                    )}
                  />
                  {errors.location && (
                    <p className="text-[#E33629] text-sm">
                      Location is required
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Label htmlFor="date">Event Date</Label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    register={register}
                    required
                    placeholder="Enter event date"
                    className="date-input"
                  />
                  {errors.date && (
                    <p className=" text-[#E33629] text-sm">
                      Event date is required
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Label htmlFor="time">Start Time</Label>
                  <Input
                    type="time"
                    id="time"
                    name="time"
                    register={register}
                    required
                    placeholder="Enter event time"
                    className="time-input"
                  />
                  {errors.time && (
                    <p className=" text-[#E33629] text-sm">
                      Event time is required
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <Label htmlFor="RSVP">RSVP</Label>
                  <Input
                    type="number"
                    id="RSVP"
                    name="RSVP"
                    register={register}
                    required
                    placeholder="Enter RSVP Number"
                  />
                  {errors.RSVP && (
                    <p className=" text-[#E33629] text-sm">RSVP is required</p>
                  )}
                </div>

                <div className='mt-4 flex justify-between gap-2'>
                  {/* <button onClick={handleDelete} className='md:w-2/5 px-4 py-2 bg-white text-[#412234] font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#412234] focus:ring-opacity-75 border-[#412234] border-2'>Delete Event</button> */}
                  {/* <DeleteSuccess isOpen={isModalOpen} closeModal={closeModal}/> */}
                  
                  <button className= 'md:w-2/5 px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md'>Save Changes</button>
                  <UpdateSuccess isOpen={isModalOpen} closeModal={closeModal}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvent;
