import "../styles/Card.css";
import locationIcon from "../assets/location.png";

export const Card = ({
  eventName,
  eventImgUrl,
  // speakersAvatars,
  rsvps,
  description,
  location,
  time,
  date,
}) => {
  return (
    <div className="events-grid">
      <img className="w-full h-full rounded-lg" src={eventImgUrl} alt="" />
      <div className="flex flex-col justify-around border-2 border-gray-300 rounded-md p-8">
        <div>
          <h3 className="text-blue-900 text-lg font-semibold leading-6 mb-2">
            {eventName}
          </h3>
          <p className="font-medium text-base leading-relaxed my-2 max-w-4/5">
            {description}
          </p>
          <div className="md:flex align-center pt-4 justify-between">
            <div className="flex">
              <img src={locationIcon} alt="location icon" className="w-6 h-6" />
              <p className="ml-2 text-blue-gray-800">{location}</p>
            </div>
            <div className="md:font-bold mt-2 md:mt-0 border-2 rounded-lg md:p-4 text-center w-max p-4">
              <p className="">{time}</p>
              <p className="">{date}</p>
            </div>
          </div>
          
          <p className="text-blue-900 font-semibold border-2 border-purple-700 rounded-md py-3 px-6 inline-block mt-2 md:mt-0">
            {rsvps} RSVP
          </p>
        </div>

        {/* <div className="speakers">
          <h3>Speakers</h3>
          <div className="speaker-img">
            {speakersAvatars.map((item) => (
              <img src={item} key={item} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
