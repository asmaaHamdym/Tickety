import back from "../assets/back.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const api = import.meta.env.VITE_APP_API_URL;

const Rsvps = () => {
  const [event, setEvent] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  console.log(id);

  useEffect(() => {
    axios
      .get(`${api}/${id}`)
      .then((res) => {
        setEvent(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  }, []);

  let data = [
    {
      Name: "Amina Binta Ahmed",
      ContactInformation: "amina.binta.ahmed@example.com",
      Date: "2024-07-10",
      Event: "African Music Festival",
      Price: "$50",
      Venue: "Virtual",
    },
    {
      Name: "Kwame Nkrumah Mensah",
      ContactInformation: "kwame.n.mensah@example.com",
      Date: "2024-08-15",
      Price: "Free",
      Venue: "Virtual",
    },
    {
      Name: "Fatoumata Keita Diallo",
      ContactInformation: "fatoumata.k.diallo@example.com",
      Date: "2024-09-20",
      Price: "$30",
      Venue: "Virtual",
    },
    {
      Name: "Njeri Wanjiku Kamau",
      ContactInformation: "njeri.w.kamau@example.com",
      Date: "2024-10-05",
      Price: "$20",
      Venue: "Virtual",
    },
    {
      Name: "Thabo Sipho Maseko",
      ContactInformation: "thabo.s.maseko@example.com",
      Date: "2024-11-11",
      Price: "$40",
      Venue: "Virtual",
    },
    {
      Name: "Zainab Yara Conteh",
      ContactInformation: "zainab.y.conteh@example.com",
      Date: "2024-12-25",
      Price: "$25",
      Venue: "Virtual",
    },
    {
      Name: "Chidera Ifeanyi Okeke",
      ContactInformation: "chidera.i.okeke@example.com",
      Date: "2024-06-18",
      Price: "$100",
      Venue: "Virtual",
    },
    {
      Name: "Adama Kofi Owusu",
      ContactInformation: "adama.k.owusu@example.com",
      Date: "2024-07-01",
      Price: "$10",
      Venue: "Virtual",
    },
  ];

  return (
    <div className="bg-[#c4bac0] px-20">
      <div className="flex items-center pt-8 ob-4 font-semibold ">
        <img
          src={back}
          alt="go back icon "
          className="w-14 h-14 mr-4 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        {event ? (
          <h1 className="text-3xl">
            {event.name}: {event.RSVP} guests{" "}
          </h1>
        ) : (
          <h1 className="text-3xl">Your Event</h1>
        )}
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          className="rounded-lg h-12 my-8 w-1/3 px-4"
          placeholder="Search..."
        />
        <div className="dsjkfdsjkfh">
          <button className=" rounded-lg mx-4 p-4 text-[#412234] bg-white">
            Filter by
          </button>
          <button className=" rounded-lg mx-4 p-4 bg-[#412234] text-white">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 rounded-t-lg w-full justify-around p-4 font-bold  bg-[#412234] text-white ">
        <p className="name">Name</p>
        <p className="contactnfo">Contact Information</p>
        <p className="contactinfo">Date</p>
        <p className="contactinfo">Price</p>
        <p className="contactinfo">Venue</p>
      </div>
      {data.map((row) => {
        return (
          <>
            <div className="grid grid-cols-5 gap-4 w-full justify-around py-8 px-4 bg-white">
              <p className="name">{row.Name}</p>
              <p className="text-[#87909a]">{row.ContactInformation}</p>
              <p className="contactinfo">{row.Date}</p>
              <p className="contactinfo">{row.Price}</p>
              <p className="contactinfo">{row.Venue}</p>
            </div>
            <hr className="w-full"></hr>
          </>
        );
      })}
    </div>
  );
};

export default Rsvps;
