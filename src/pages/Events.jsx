import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Footer from "../components/Footer";
import { getEvents } from "../api/requests.js";
import Navbar from "./Navbar.jsx";

import eventImgOne from "../assets/events-img-one.png";
import eventImgTwo from "../assets/events-img-two.png";
import eventImgThree from "../assets/events-img-three.png";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const imgs = [
    eventImgOne,
    eventImgThree,
    eventImgTwo
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents();
      setEvents(data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="mx-12 py-8 px-0">
          {events.map((event) => (
            <Card
              key={event.id}
              eventName={event.description}
              eventImgUrl={imgs[Math.floor(Math.random() * 3)]}
              rsvps={event.RSVP}
              description={event.description}
              location={event.location}
              time={event.time}
              date={event.date}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
