import "../styles/Card.css";

export const Card = ({
  eventName,
  eventImgUrl,
  speakersAvatars,
  describtion,
  location,
}) => {
  return (
    <div className="events-grid">
      <img className="event-img" src={eventImgUrl} alt="" />
      <div className="event-data">
        <div>
          <h3>{eventName}</h3>
          <p>{describtion}</p>
          <p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
                stroke="url(#paint0_linear_130_1049)"
                stroke-width="1.5"
              />
              <path
                d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                stroke="url(#paint1_linear_130_1049)"
                stroke-width="1.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_130_1049"
                  x1="8.88076"
                  y1="13.4299"
                  x2="15.1208"
                  y2="7.18987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1D2939" />
                  <stop offset="1" stop-color="#475467" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_130_1049"
                  x1="3.37668"
                  y1="21.9949"
                  x2="23.155"
                  y2="4.93628"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1D2939" />
                  <stop offset="1" stop-color="#475467" />
                </linearGradient>
              </defs>
            </svg>
            {location}
          </p>
          <div className="tag">50 RSVP</div>
        </div>

        <div className="speakers">
          <h3>Speakers</h3>
          <div className="speaker-img">
            {speakersAvatars.map((item) => (
              <img src={item} key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
