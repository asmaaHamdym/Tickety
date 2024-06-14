import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Footer from "../components/Footer";
import { getEvents } from "../api/requests.js";

export const Events = () => {
  const [events, setEvents] = useState([]);

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
        <div className="mx-12 py-8 px-0">
          {events.map((event) => (
            <Card
              key={event.id}
              eventName={event.description}
              eventImgUrl="https://s3-alpha-sig.figma.com/img/680f/9c55/374e07f4a0f6cfdbf755fb905475bbad?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwGQvqWpbuiJHt-079H5UlI1iBFs6RKXeZCZW6oRTCGhoCkUibpEtwsVWSvmjMAj2jTUeBuKnVMDA8HVD9k0IhBgfWNvXx-ZLLKYE1m4Mn7Lqv7Xd3aQFM1b1WqQhcGQxWqqonsZgL4kr-sRxlt5umHP5HBRd2Sp2HNLm9R1vC6w5nMO8QHnb-izXBrq~m4LXXA9zmUS-MDwXVF6Pgte19EoKBSZImKMZbnF0pxckG4YLSrgjOcft77jdp4sFP4o328CvFsue4MnOjlLrba-Pksw5vVBflJQ~hk0rJr7E191dWdRLzPWtvCoUAz9EaTvye6pGw7LrdHJM79KwobKsA__"
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
