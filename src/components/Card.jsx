import "../styles/Card.css";

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
      <div className="flex justify-around border-2 border-gray-300 rounded-md p-4">
        <div>
          <h3 className="text-blue-900 text-lg font-semibold leading-6 mb-2">
            {eventName}
          </h3>
          <p className="font-medium text-base leading-relaxed my-2 max-w-4/5">
            {describtion}
          </p>
          <div className="flex align-center pt-4">
            <svg
              className="mt-2 mb-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
                stroke="url(#paint0_linear_130_1049)"
                // eslint-disable-next-line react/no-unknown-property
                stroke-width="1.5"
              />
              <path
                d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                stroke="url(#paint1_linear_130_1049)"
                // eslint-disable-next-line react/no-unknown-property
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
                  <stop stopColor="#1D2939" />
                  <stop offset="1" stopColor="#475467" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_130_1049"
                  x1="3.37668"
                  y1="21.9949"
                  x2="23.155"
                  y2="4.93628"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1D2939" />
                  <stop offset="1" stopColor="#475467" />
                </linearGradient>
              </defs>
            </svg>
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
