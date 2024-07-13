import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import Footer from "../components/Footer";

import heroImage from "../assets/hero.png";
import Navbar from "./Navbar";
import aboutImage from "../assets/about.png";
import noteIcon from "../assets/note-icon.png";
import reachIcon from "../assets/reach-icon.png";
import ticketIcon from "../assets/ticket-icon.png";

import eventImgOne from "../assets/events-img-one.png";
import eventImgTwo from "../assets/events-img-two.png";
import eventImgThree from "../assets/events-img-three.png";

import { useAuthContext } from "../store/auth-context";
import { useState, useEffect } from "react";
import axios from "axios";

const api = import.meta.env.VITE_APP_API_URL;

export const HomePage = () => {
  const [events, setEvents] = useState([]);
  const imgs = [
    eventImgOne,
    eventImgThree,
    eventImgTwo,
    "https://thepaintsesh.com/wp-content/uploads/2021/04/corporate-580e8bbf3df78c2c73adc69a-scaled.jpeg",
    "https://cdn.business2community.com/wp-content/uploads/2018/02/community-events.jpeg",
    "https://www.oyorooms.com/blog/wp-content/uploads/2018/03/fe-30.jpg",
    "https://i.pinimg.com/originals/48/89/38/488938d6eec996de2365b072357aac16.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.6BnSnib2JesKeZfpjQFRuQHaFI&pid=Api",
    "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
    "https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Tech-Events.jpg",
    "https://skift.com/wp-content/uploads/2018/01/c2.jpg",
  ];

  const { user, handleUser } = useAuthContext();

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log(loggedInUser);
      // const foundUser = JSON.parse(loggedInUser);
      handleUser(loggedInUser);
    }
  }, []);

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div
          className="relative h-screen bg-cover bg-center bg-white"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2E4052] via-[#2E4052]"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative md:flex items-center px-10 h-full md:justify-between">
            <div className="text-white md:py-8 py-20">
              <div className="md:mb-28 mb-4 text-center md:text-left">
                <h1 className="md:text-6xl text-5xl font-bold mb-6">
                  Let us help you create a <br />
                  Memorable event
                </h1>
                <p className="text-xl leading-8">
                  Experience seamless planning and extraordinary
                  <br /> celebrations with our expert event management team
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <button className="p-4 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
                  <Link to={user ? "/create-event" : "/login"}>
                    Create your next Event
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div>
          <div className="py-2">
            <div className="py-4 px-10">
              <h3 className="text-base font-bold text-[#131B22] mb-2">
                What we do
              </h3>
              <p className="text-sm text-[#586675] mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                quaerat, quisquam labore minima excepturi, <br />
                ducimus earum maxime consectetur, enim unde nesciunt.{" "}
              </p>
            </div>

            <div className="md:flex gap-20">
              <div className="relative line-behind boder border-[#D0D3D9] flex items-center P-6">
                <img
                  src={aboutImage}
                  alt="About Photo"
                  className="rounded-r-lg relative"
                />
              </div>

              <div className="mt-4 px-10">
                <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-10">
                  <div>
                    <img src={noteIcon} alt="Note Icon" className="mt-2" />
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Create your personal event
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Organize a seamlesss experience for your customers <br />
                      at your event like never before.
                    </p>
                  </div>
                </div>

                <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-10">
                  <div>
                    <img src={reachIcon} alt="Reach Icon" className="mt-2" />
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Reach more Audience
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Reach new customersand get more audience <br />
                      to participate at your event.
                    </p>
                  </div>
                </div>

                <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-20">
                  <div>
                    <img src={ticketIcon} alt="Ticket Icon" className="mt-2" />
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Book a Ticket
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Get a ticket and RSVP for your favourite event
                      <br />
                      with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-12 my-4 py-8 pt-4 pb-0">
          <h1 className="text-3xl font-bold text-left">Exciting Event</h1>
          <div className="md:text-xl text-sm md:font-bold md:flex justify-between font-normal mt-4 text-left">
            <p>
              Dive into our exciting events! Find upcoming gatherings,
              workshops, conferences, and more. Discover new interests, connect
              with others, and have some fun!
            </p>
          </div>
          <div className="mt-4 text-left">
            <button className="px-10 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md ">
              <Link to="events">View All</Link>
            </button>
          </div>
        </div>
        <div className="mx-12 py-8 px-0">
          {events.length === 0 ? (
            <p>Loading events...</p>
          ) : (
            events
              .slice(0, 3)
              .map((event) => (
                <Card
                  key={event.id}
                  eventName={event.name}
                  eventImgUrl={imgs[Math.floor(Math.random() * imgs.length)]}
                  rsvps={event.RSVP}
                  description={event.description}
                  location={event.location}
                  time={event.time}
                  date={event.date}
                  eventId={event.id}
                />
              ))
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};
