import "../styles/Card.css";
import locationIcon from "../assets/location.png";

export const Card = ({
  eventName,
  eventImgUrl,
  // speakersAvatars,
  describtion,
  location,
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
            {describtion}
          </p>
          <div className="flex align-center pt-4">
            <img src={locationIcon} alt="location icon" className="w-8 h-8" />
            <p className="p-2 text-blue-gray-800">{location}</p>
          </div>
          <p className="text-blue-900 font-semibold border border-purple-700 rounded-md py-3 px-8 inline-block my-4">
            50 RSVP
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
