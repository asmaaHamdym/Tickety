import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import Navbar from './Navbar';
import eventImage from '../assets/events-image.png'

const CreateEvent = () => {
  const [selected, setSelected] = useState("");

  
  return (
    <div>
      <Navbar/>
      <div className='bg-[#ECE9EB] h-max w-max rounded-lg items-center mx-auto container justify-center'>
        <div className='flex'>

          <div className='hidden md:flex'>
           <img src={eventImage} alt ='Event Icon' className='w-72 h-full rounded-l-lg'></img>
          </div>

          <div className='py-6 px-12'>
            <div>
              <h2 className='text-[#131B22] text-lg font-bold'>Create your Event</h2>
              <p className='text-[#586675] text-sm font-normal mt-1'>Kindly input your details below to create your event</p>
            </div>

            <div className='mt-6 mb-2'>
              <p className='mb-1 text-[#212D3A]text-sm'>Upload event image</p>

              <div className='bg-white p-10 flex justify-center'>
                <button className='border-[#806B77] border-2 p-5 rounded-lg'>
                  <p className='text-[#412234] flex justify-center text-sm'>Upload Photos <br></br>and Video</p>
                </button>
              </div>
            </div>
            <form className='mt-3'>

              <div className="mb-2">
                <label htmlFor="event name" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Name</label>
                <input type="text" id="event" name="event" className="mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter event name"/>
              </div>

              <div className="mb-2">
                <label htmlFor="event description" className="block text-[#212D3A] text-sm mb-1 font-medium">About the event</label>
                <textarea type="text" id="description" name="description" className="mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Describe your event"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="options" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Category</label>
                <select id="options" name="options" className="w-full px-3 py-3 text-sm bg-[#eaecee] border-2  border-[#C4BAC0] rounded-md shadow-sm focus:outline-none focus:border-sky-500 text-[#9FA7AF]">
                  <option value="" disabled selected>Select event category</option>
                  <option value="party" className='text-[#212D3A]'>Party</option>
                  <option value="conference" className='text-[#212D3A]'>Conference</option>
                  <option value="concert" className='text-[#212D3A]'>Concert</option>
                  <option value="tech" className='text-[#212D3A]'>Tech Event</option>
                  <option value="others"className='text-[#212D3A]'>Others</option>
                </select>
              </div>
         
              <div className="mb-2">
                <label htmlFor="location" className="block text-[#212D3A] text-sm mb-1 font-medium">Location</label>
                <ReactFlagsSelect selected={selected}  onSelect={(code) => setSelected(code)} className="bg-[#eaecee] border-2 "  placeholder="Enter location"/>
                {/* <input type="text" id="location" name="location" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]"/>   */}
              </div>

              <div className="mb-2">
                <label htmlFor="date" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Date</label>
                <input type="date" id="date" name="date" className="date-input mt-1 px-3 py-2 bg-[#eaecee] border-2  shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter event date"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="dtime" className="block text-[#212D3A] text-sm mb-1 font-medium">Start Time</label>
                <input type="time" id="time" name="time" className="time-input mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter event time"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="rsvp" className="block text-[#212D3A] text-sm mb-1 font-medium">RSVP</label>
                <input type="number" id="rsvp" name="rsvp" className="mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter RSVP Number"/>
              </div>

              <div className='mt-4'>
                <button className= 'px-4 py-1 w-full bg-[#412234] text-white font-semibold rounded shadow-md'>Continue</button>
              </div>
            
          </form>
          </div>

          
        </div>
      </div>
        
    </div>
    
  );
}

export default CreateEvent;
