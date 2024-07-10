import aboutImage from "../assets/about.png";
import noteIcon from "../assets/note-icon.png";
import reachIcon from "../assets/reach-icon.png";
import ticketIcon from "../assets/ticket-icon.png";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="py-2">
        <div className="py-4 px-10">
          <h3 className="text-base font-bold text-[#131B22] mb-2">
            What we do
          </h3>
          <p className="text-sm text-[#586675] mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            quaerat, quisquam labore minima excepturi, <br />
            ducimus earum maxime consectetur, enim unde nesciunt.{" "}
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
                <img src={noteIcon} alt="Note Icon" className="mt-2" />
              </div>
              <div>
                <p className="text-sm text-[#212D3A] font-semibold">
                  Create your personal event
                </p>
                <p className="text-sm text-[#586675] px-18">
                  Organize a seamlesss experience for your customers <br />
                  at your event like never before.
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
                  Reach new customersand get more audience <br />
                  to participate at your event.
                </p>
              </div>
            </div>

            <div className="flex gap-10 border border-[#BDD9BF] rounded-md p-4 mb-20">
              <div>
                <img src={ticketIcon} alt="Ticket Icon" className="mt-2" />
              </div>
              <div>
                <p className="text-sm text-[#212D3A] font-semibold">
                  Book a Ticket
                </p>
                <p className="text-sm text-[#586675] px-18">
                  Get a ticket and RSVP for your favourite event
                  <br />
                  with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
