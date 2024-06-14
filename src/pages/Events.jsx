import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Footer from "../components/Footer";
import { getEvents } from "../api/requests.js";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const imgs = [
    "https://s3-alpha-sig.figma.com/img/df44/f93f/199f03ecd588ea92ab5919df73a022e1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhjfNegylZ7f~ClNSkg6cxjvv0UZoJWG-PmU9BgH0hkBnc~z9NreD9Jz~m3mCO7~mjFO35vdCkygNpKfYToEGGitRvngs-6U4JvcQ95jMWwJIwbW~1kAFrMx8S4TJL7gN2~jnwSTpElU62oVZO~JLdtVBB-RcYlVtOeiB3OpDyCublW6j9gKfJqX5SXBRrrTGPbVCcJqV5lHi9sd6YWO4T3dHCVPc0QPTJBcryMoRLFlH-9VVbPH6dBYSkjD2yollqKdXFqyR2gr0U0vvVMwjHECZQMUm15Ad1XcjkzEeN8jW2WGu0ChoeHoceHgvV2BOPx6UXbMXV75aY4YKsRj1g__",
    "https://s3-alpha-sig.figma.com/img/0c18/0e48/dcd7a0bf68bf13b6145a7fcc4ec1c3bf?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSFtZQ8sapIm94LZNmkM3vM9TiUgPi2BQ8kak9JCGTCNavBWE0c6XdP5Han4Oet3yz54brOMcKmpkZBywqNe1R5~6qajl8srN7UTTGZgvSYrktvBePWg6AEQa9LgUPBSt8kepYjagEkLLa02InBj27QSwIc3TEhLgRO3iLP4t26jzRLL1G4RvO~XTe3O3BFW4SHaDOQlxO5NwyUB6Fuf6gXKPwx8IQXxSjgDNMMcyQvhGzed6BHXa7qk8pTfnMqAPcSoMoPs6wv8lcDtsOQ4SqZp13NeeWL3hk6hB-FTd9aUpJptL1~M51Uiz9rsT2TcLCzKGkbQtIakpozDBbzvUQ__",
    "https://s3-alpha-sig.figma.com/img/ccc1/d934/ff7c9b13588365b9e06860d6a55ffc61?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cldsiMFoHlqZMTy6bNCVGdDCRgSKnWl2tBB3wg8aY6W9KqtMwTOvpBFaoWroS7oKgc3cvmH12D-JLrBijMFLZ-WaYCjeiYqjrItn9oiYyeNy9Q~7b2Q1a5xVslHtcvf3wo5IkLkKjnp2JpAy~oBeclpAqX8QY6T9zJVncVmYrs94Fc9X0eeq8YGiok050ihyepon5uyKDD6Pw~Lb28iX5BJD4y0jXWr6hyjnh27Z8N-NIQ1yqnRrX0OlfpheUFkgdVLM-xwLz9WCbN6~OXgIOktBedhRRvxhnh5iJwa02-ALUJyCVcAkNdUXlC-6W-utM6ZAdGAut4Q1yrRdI3qBOw__",
    "https://s3-alpha-sig.figma.com/img/1571/9c4a/23dd3b48d3176440b30298464d933d59?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2KDwALI1jlJf7DDtsHYiESPU5CeP-qkQWtulQxvqAUGcGXj4CITnq9z~xVGVizNz077H2vQmGuzOAIqFnHiz5svuZ7-ZGHuL-9zAY7E94gfN7u0VGgIUq-r3LFIDSUTtmaBxVhUwOEaT9vKv08kNUMLjljmvU4ck1Rz~DcDGyhT7CQ7VcMAQmgTzQv8iikF-Tr8acwbZYPKlWc6HQCCRAd9uEFaYlgqPv3NgqqIoalNM3KFpbM8yhy7vIPZKuglSgQEfst8lTe~jnhi~cY6KEmr0gRVNSRj7Y~r4nW~6RPOmPVVjKfI9kjWjBluVPYPtKi8IZw9dnAlm~FRZWlTKg__",
    "https://s3-alpha-sig.figma.com/img/680f/9c55/374e07f4a0f6cfdbf755fb905475bbad?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwGQvqWpbuiJHt-079H5UlI1iBFs6RKXeZCZW6oRTCGhoCkUibpEtwsVWSvmjMAj2jTUeBuKnVMDA8HVD9k0IhBgfWNvXx-ZLLKYE1m4Mn7Lqv7Xd3aQFM1b1WqQhcGQxWqqonsZgL4kr-sRxlt5umHP5HBRd2Sp2HNLm9R1vC6w5nMO8QHnb-izXBrq~m4LXXA9zmUS-MDwXVF6Pgte19EoKBSZImKMZbnF0pxckG4YLSrgjOcft77jdp4sFP4o328CvFsue4MnOjlLrba-Pksw5vVBflJQ~hk0rJr7E191dWdRLzPWtvCoUAz9EaTvye6pGw7LrdHJM79KwobKsA__",
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
        <div className="mx-12 py-8 px-0">
          {events.map((event) => (
            <Card
              key={event.id}
              eventName={event.description}
              eventImgUrl={imgs[Math.floor(Math.random() * 5)]}
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
