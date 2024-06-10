import React from 'react';
import Navbar from './Navbar';
import eventImage from '../assets/events-image.png'

const CreateEvent = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#ECE9EB] h-max w-max rounded-lg items-center mx-auto container justify-center'>
        <div className='flex'>

          <div>
           <img src={eventImage} alt ='Event Icon' className='w-72 rounded-l-lg'></img>
          </div>

          <div className='px-6 py-4'>
            <div>
              <h2 className='text-[#131B22] text-lg font-bold'>Create your Event</h2>
              <p className='text-[#586675] text-sm font-normal mt-1'>Kindly input your details below to create your event</p>
            </div>

            <form className='mt-3'>

              <div className="mb-2">
                <label htmlFor="event name" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Name</label>
                <input type="text" id="event" name="event" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter event name"/>
              </div>

              <div className="mb-2">
                <label htmlFor="event description" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Description</label>
                <input type="text" id="description" name="description" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter event description"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="category" className="block text-[#212D3A] text-sm mb-1 font-medium">Category</label>
                <input type="text" id="category" name="category" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Choose category"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="location" className="block text-[#212D3A] text-sm mb-1 font-medium">Location</label>
                <input type="text" id="location" name="location" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter location"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="cost" className="block text-[#212D3A] text-sm mb-1 font-medium"> Ticket Cost</label>
                <input type="number" id="cost" name="cost" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter ticket cost"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="date" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Date</label>
                <input type="number" id="date" name="date" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter event date"/>  
              </div>

              <div className="mb-2">
                <label htmlFor="dtime" className="block text-[#212D3A] text-sm mb-1 font-medium">Event Time</label>
                <input type="number" id="time" name="time" className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]" placeholder="Enter event time"/>  
              </div>

              
              <div className='mt-4 flex justify-end'>
                <button className= 'px-4 py-2 bg-[#412234] text-white font-semibold rounded shadow-md'> Create Event</button>
              </div>
            
          </form>
          </div>

          
        </div>
      </div>
        
    </div>
    
  );
}

export default CreateEvent;
