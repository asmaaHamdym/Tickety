import React, { useState, useRef } from 'react';
import ReactFlagsSelect from "react-flags-select";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Navbar from './Navbar';
import uploadImage from '../assets/upload.png'
import Input from '../components/Input';
import { updateUser } from '../api/UpdateUser';
import { deleteUser } from '../api/DeleteUser';
import { Link } from 'react-router-dom';


const ManageEvent = () => {
  // const initialState: {
  //   id: '',
  //   name: '',
  //   description: '',
  //   category: '',
  //   location: '',
  //   date: '',
  //   time:'',
  //   RSVP:''
  // };
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    name: 'Wedding',
    description: 'To feed people',
    category: 'Party',
    location: 'Nigeria',
    date: '2024-09-26',
    time:'09:26',
    RSVP:'50'
  });
  
  
  
  const inputRef = useRef(null);

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

  const handleUpdate = async () => {
    try {
      const response = await updateUser(formData.id, formData);
      console.log('Event updated successfully:', response);
    } catch (error) {
      console.error('An error occurred:', error);
    }

    
  };

  const handleDelete = async () => {
    try {
      const response = await deleteUser(formData.id);
      console.log('User deleted successfully:', response);
      // setFormData(initialState)
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  
  return (
    <div>
      <Navbar/>
      <div className='bg-[#c297af]'> 
        <div className='flex justify-between md:px-40 px-6 py-6'>
          <div className='flex'>
            <a href="/#events"><FaArrowAltCircleLeft className='arrow-icon mr-4 cursor-pointer' size={30}/></a>
            <div className='font-bold text-lg'>My Events</div>
          </div>
          
          <div>
            <Link to="/rsvp"><button className= 'px-8 py-2 bg-[#412234] text-white font-semibold rounded shadow-md'>View RSVP</button></Link>
          </div>
        </div>
        
        <div className='h-full md:w-3/4 items-center mx-auto container bg-white'>
          <div className=''>

            <div className='py-6 px-12'>

              <div className='mt-6 mb-2'>
                <p className='mb-1 text-[#212D3A] text-sm'>Upload event image</p>

                <div className='p-10 flex justify-center bg-cover bg-center' style={{ backgroundImage: `url(${uploadImage})`}}>
                  <input style={{ display: 'none' }} type="file" ref= {inputRef} onChange={handleFileChange} accept =".jpg .jpeg .png"/>
                  <button className='bg-white border-[#806B77] border-2 p-5 rounded-lg' onClick={() => inputRef.current.click()}>
                    <RiUploadCloudFill className='mx-auto upload-icon' size={20} />
                    <p className='text-[#412234] flex justify-center text-sm font-semibold'>Upload Photos <br></br>and Video</p>
                  </button>
                </div>
                {fileName && (
                    <div className='mt-1'>
                      <h2 className="text-base font-semibold mb-2 border border-[#806B77] w-max p-1 bg-[#806B77] rounded-lg">{fileName}</h2>
                    </div>
                )}
              </div>
              <form className='mt-3'>

                <div className="mb-2">
                  <label htmlFor="event name" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Name</label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter event name"/>
                </div>

                <div className="mb-2">
                  <label htmlFor="event description" className="block text-[#6e7071] text-sm mb-1 font-medium">About the event</label>
                  <textarea type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Describe your event"/>  
                </div>

                <div className="mb-2">
                  <label htmlFor="options" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Category</label>
                  <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-3 text-sm bg-[#eaecee] border-2  border-[#C4BAC0] rounded-md shadow-sm focus:outline-none focus:border-sky-500">
                    <option disabled value="">Select event category</option>
                    <option value="party" className='text-[#212D3A]'>Party</option>
                    <option value="conference" className='text-[#212D3A]'>Conference</option>
                    <option value="concert" className='text-[#212D3A]'>Concert</option>
                    <option value="tech" className='text-[#212D3A]'>Tech Event</option>
                    <option value="others"className='text-[#212D3A]'>Others</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label htmlFor="location" className="block text-[#212D3A] text-sm mb-1 font-medium">Location</label>
                  <ReactFlagsSelect selected={formData.location} onSelect={handleSelect} name="location" id='location' className="bg-[#eaecee] border-2" placeholder="Enter location"/>
                  {/* <input type="text" id="location" name="location" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]"/>   */}
                </div>

                <div className="mb-2">
                  <label htmlFor="date" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Date</label>
                  <Input type="date" id="date" name="date" placeholder="Enter event date" value={formData.date} onChange={handleChange}  className='date-input'/>
                </div>

                <div className="mb-2">
                  <label htmlFor="dtime" className="block text-[#212D3A] text-sm mb-1 font-medium">Start Time</label>  
                  <Input type="time" id="time" name="time" placeholder="Enter event time" value={formData.time} onChange={handleChange} className='time-input'/>
                </div>

                <div className="mb-2">
                  <label htmlFor="rsvp" className="block text-[#212D3A] text-sm mb-1 font-medium">RSVP</label>
                  <Input type="number" id="rsvp" name="RSVP" value={formData.RSVP} onChange={handleChange}  placeholder="Enter RSVP Number"/>
                </div>

                <div className='mt-4 flex justify-between gap-2'>
                  <button onClick={handleDelete} className='md:w-2/5 px-4 py-2 bg-white text-[#412234] font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#412234] focus:ring-opacity-75 border-[#412234] border-2'>Delete Event</button>
                  <button onClick={handleUpdate} className= 'md:w-2/5 px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md'>Save Changes</button>
                </div>
              
            </form>
            </div>


          </div>
        </div>
                  
      </div>
        
    </div>
    
  );
}

export default ManageEvent;
