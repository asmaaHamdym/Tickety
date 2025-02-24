import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Footer from "../components/Footer";

import Navbar from "./Navbar.jsx";

import eventImgOne from "../assets/events-img-one.png";
import eventImgTwo from "../assets/events-img-two.png";
import eventImgThree from "../assets/events-img-three.png";
import axios from "axios";

const api = import.meta.env.VITE_APP_API_URL;

export const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Tech Conference",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      description: "A gathering of the brightest minds in technology.",
      category: "Technology",
      attendees: 5000,
    },
    {
      id: 2,
      title: "Local Art Fair",
      date: "2024-04-20",
      time: "10:00 AM - 6:00 PM",
      location: "Central Park, New York",
      description: "Showcasing the works of local artists and artisans.",
      category: "Arts & Culture",
      attendees: 1000,
    },
    {
      id: 3,
      title: "Summer Music Festival",
      date: "2024-06-22",
      time: "12:00 PM - 10:00 PM",
      location: "Grant Park, Chicago",
      description: "A weekend of live music from various genres.",
      category: "Music",
      attendees: 20000,
    },
    {
      id: 4,
      title: "Coding Bootcamp Open House",
      date: "2024-07-10",
      time: "6:00 PM - 8:00 PM",
      location: "Online",
      description:
        "Learn about our intensive coding programs and career opportunities.",
      category: "Education",
      attendees: 500,
    },
    {
      id: 5,
      title: "Community Cleanup Day",
      date: "2024-09-07",
      time: "9:00 AM - 12:00 PM",
      location: "Riverside Park",
      description:
        "Join us in cleaning up our local park and making it a better place.",
      category: "Community",
      attendees: 100,
    },
  ]);
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

  // useEffect(() => {
  //   axios
  //     .get(`${api}/events`)
  //     .then((res) => {
  //       setEvents(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data.error);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <div className="mx-12 py-8 px-0">
        {events.length === 0 ? (
          <p>Loading events...</p>
        ) : (
          events.map((event) => (
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
    </>
  );
};
