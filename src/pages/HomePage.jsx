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

export const HomePage = () => {
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
                  Let's help you create a <br></br>Memorable event
                </h1>
                <p className="text-xl leading-8">
                  Experience seamless planning and extraordinary<br></br>{" "}
                  celebrations with our expert event management team
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
                  <Link to="/login">Create your next Event</Link>
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
                quaerat, quisquam labore minima excepturi, <br></br>ducimus
                earum maxime consectetur, enim unde nesciunt.{" "}
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
                    <img src={noteIcon} alt="Note Icon" className="mt-2"></img>
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Create your personal event
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Organize a seamlesss experience for your customers{" "}
                      <br></br>at your event like never before.
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
                      Reach new customersand get more audience <br></br>to
                      participate at your event.
                    </p>
                  </div>
                </div>

                <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-20">
                  <div>
                    <img
                      src={ticketIcon}
                      alt="Ticket Icon"
                      className="mt-2"
                    ></img>
                  </div>
                  <div>
                    <p className="text-sm text-[#212D3A] font-semibold">
                      Book a Ticket
                    </p>
                    <p className="text-sm text-[#586675] px-18">
                      Get a ticket and RSVP for your favourite event<br></br>
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
          <Card
            eventName={"Girls in Tech Meetup"}
            eventImgUrl={eventImgOne}
            description={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
            time={"9 am"}
            date={"25-5-2024"}
            rsvps={20}
          />
          <Card
            eventName={"Open Source Day"}
            eventImgUrl={eventImgTwo}
            description={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
            time={"9 am"}
            date={"25-5-2024"}
            rsvps={70}
          />
          <Card
            eventName={"Tech Summit"}
            eventImgUrl={eventImgThree}
            description={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
            time={"9 am"}
            date={"25-5-2024"}
            rsvps={100}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
