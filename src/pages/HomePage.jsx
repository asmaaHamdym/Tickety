import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import { Card } from "../components/Card";
import Footer from "../components/Footer";

import heroImage from "../assets/hero.png";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";

export const HomePage = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div
          className="relative h-screen bg-cover bg-center bg-white"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2E4052] via-[#2E4052]"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative md:flex items-center px-10 h-full md:justify-between">
            <div className="text-white py-8">
              <div className="md:mb-28 mb-4 text-center md:text-left">
                <h1 className="md:text-6xl text-4xl font-bold mb-6">
                  Let's help you create a <br></br>Memorable event
                </h1>
                <p className="text-lg leading-8">
                  Experience seamless planning and extraordinary<br></br>{" "}
                  celebrations with our expert event management team
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md">
                  <Link to="/login">Create your next Event</Link>
                </button>
              </div>
            </div>

            {/* <div className='bg-white p-8 rounded-md mt-8'>
            <div className='cursor-pointer flex justify-end -mt-2 -mr-4'>
              <FaTimes size={25}/>
            </div>
            <div className='text-center'>
              <p className='text-[#131B22] text-sm font-bold mb-4'>My Upcoming Events</p>
              <div className='flex mb-4 justify-center'>
                <div className='mr-4 '>
                  <p className='text-[#131B22] font-bold text-base'>10</p>
                  <p className='text-[#131B22] text-sm'>Days</p>
                </div>

                <div className='mr-4'>
                  <p className='text-[#131B22] font-bold text-base'>09</p>
                  <p className='text-[#131B22] text-sm'>Hrs</p>
                </div>

                <div className=''>
                  <p className='text-[#131B22] font-bold text-base'>54</p>
                  <p className='text-[#131B22] text-sm'>Mins</p>
                </div>
              </div>
              
            </div>

            <div className='mt-2'>
              <div className='bg-[#ECE9EB] border-[#ECE9EB] text-[#586675] text-sm mb-2 p-4 w-60 rounded-lg'>Youth Conference</div>
              <div className='bg-[#ECE9EB] border-[#ECE9EB] text-[#586675] text-sm mb-2 p-4 w-60 rounded-lg'>Ikeja, Nigeria</div>
              <div className='bg-[#ECE9EB] border-[#ECE9EB] text-[#586675] text-sm mb-2 p-4 w-60 rounded-lg'>Education</div>
            </div>

            <div className='mt-3'>
              <button className='w-full px-4 py-2 bg-[#2E4052] text-white rounded-lg text-sm'><Link to="/manage-event">Manage your Event</Link></button>
            </div>

          </div>*/}
          </div>
        </div>
        <AboutUs />
        <div className="mx-12 my-4 py-8 pt-4 pb-0">
          <h1 className="text-3xl font-bold">Exciting Event</h1>
          <div className="text-xl font-bold flex justify-between sm:font-normal">
            <p>
              Dive into our exciting events! Find upcoming gatherings,
              workshops, conferences, and more. Discover new interests, connect
              with others, and have some fun!
            </p>
            <div>
              <button className="px-4 py-2 bg-[#412234] text-white font-semibold rounded-lg shadow-md ">
                <Link to="events">View All</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-12 py-8 px-0">
          <Card
            eventName={"Girls in Tech Meetup"}
            eventImgUrl={
              "https://s3-alpha-sig.figma.com/img/ccc1/d934/ff7c9b13588365b9e06860d6a55ffc61?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cldsiMFoHlqZMTy6bNCVGdDCRgSKnWl2tBB3wg8aY6W9KqtMwTOvpBFaoWroS7oKgc3cvmH12D-JLrBijMFLZ-WaYCjeiYqjrItn9oiYyeNy9Q~7b2Q1a5xVslHtcvf3wo5IkLkKjnp2JpAy~oBeclpAqX8QY6T9zJVncVmYrs94Fc9X0eeq8YGiok050ihyepon5uyKDD6Pw~Lb28iX5BJD4y0jXWr6hyjnh27Z8N-NIQ1yqnRrX0OlfpheUFkgdVLM-xwLz9WCbN6~OXgIOktBedhRRvxhnh5iJwa02-ALUJyCVcAkNdUXlC-6W-utM6ZAdGAut4Q1yrRdI3qBOw__"
            }
            speakersAvatars={[
              "https://s3-alpha-sig.figma.com/img/4975/38e1/d339be91b10aa7a7aad2a051dc5790cf?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1VyBab4SqQQr1a7AOxtKtWrKwLjbiHTauK6hMG0vRTTy3Zk9-VrJ0u1MQVf8uwYD1A156OZyvjWuBwDIh7LlFREEXtyVUJjEPTE47GYIwz3SjWVUcZ1qQo1-J7UdWa-tYBrQ0iy~bi-fMCqKzQ6jXEZijMQnw~KOc33GMwc6mpPzUDBNXHp2YBeahVzc7OX5WqF2TeRCec55psGNvq8~--yEWzYeS-xiPl4Vf03fTFUphzuLjnWvZ0Znn~D~2g0tA95cdD1pd6rbBJSAweoQeaX~Qbasu6pDuuHCGAg1TC2QTofBsD5P2NIzqrHU1O9nLzqbeAr-60-BO4mlfXPTg__",
              "https://s3-alpha-sig.figma.com/img/4cc7/25c2/d305e332b6bdb338ecbb6bf27452fa0f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AfXNmToRauUkpQP7TABKbBjyUyo97voGyrkJLSjBKXvRXvNckwILI--kJGPEL6qV8yy8Yt0P4KhA3ocoZVc5KZBdBaOxIhuhdykr8A6x9zGHWaMz-CBEygu6TO2Qyfd8R4cYcC3u~Ul-SR6ROrlHBf9zcypARJlGkxeeVLYtCuHWqcv5BktI-kY4A0tLgx32bSH8Avr0hdsZIAh9mW9gzR3fps4b2bW1qokaoPkZghg-Nmi7JEp-TzwdjIUDaNk84gd1VJJJe2zPJmag~CWYLBsbHlQqq2dzy8ZiZ9JDkMOV-xnqjFZHFV~v-PyiSpo-HDpoLpHVp4UaUwfEj8cNfw__",
              "https://tse3.mm.bing.net/th?id=OIP.Qvf9UmzJS1V5YafT9NQZlAHaKL&pid=Api",
              "https://s3-alpha-sig.figma.com/img/d327/8480/e4633338fff5e1eb174e6492f45d4f0b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ys0LW-K~n-tnwOa56gE-L-jJsT30Mym4IH-w357mhNr39dal9lQbLyeVeTFxmOX1u9QVgH9Y1Y1xeC9~dNo3lWG-Eyb20o~TFMnXW3V2Al3ZIr~cJGQRxnIyDko1mJrqj5h08fCeiW9wFLZU-hW482JljpK26t2V6HVBuJ3XtHfokfMDsKbLByVHcb4Pb5bBmkF9hVCegAWqYrnXMiQdLvpvREMbic0CnXxp4hKXKisQ3Njek1iDH9Z2lfYPqc-cemJWF1FegiEvxcVkXleUuzCOlxrcnEI7XL6sb0pRyPzMtC7ninpwXrmVwMsQ1RSygb~EuobCXMNidmQUtYqiuA__",
            ]}
            describtion={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
            time={"9 am"}
            date={"25-5-2024"}
          />
          <Card
            eventName={"Open Source Day"}
            eventImgUrl={
              "https://s3-alpha-sig.figma.com/img/1571/9c4a/23dd3b48d3176440b30298464d933d59?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2KDwALI1jlJf7DDtsHYiESPU5CeP-qkQWtulQxvqAUGcGXj4CITnq9z~xVGVizNz077H2vQmGuzOAIqFnHiz5svuZ7-ZGHuL-9zAY7E94gfN7u0VGgIUq-r3LFIDSUTtmaBxVhUwOEaT9vKv08kNUMLjljmvU4ck1Rz~DcDGyhT7CQ7VcMAQmgTzQv8iikF-Tr8acwbZYPKlWc6HQCCRAd9uEFaYlgqPv3NgqqIoalNM3KFpbM8yhy7vIPZKuglSgQEfst8lTe~jnhi~cY6KEmr0gRVNSRj7Y~r4nW~6RPOmPVVjKfI9kjWjBluVPYPtKi8IZw9dnAlm~FRZWlTKg__"
            }
            speakersAvatars={[
              "https://s3-alpha-sig.figma.com/img/982c/1922/2066a0ed48643c050b1f4bc3cb1bdcc6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PxyWhsZ6cuVojAgYtCB1Srr8ZpSG9jc~nLvG5h6jsqAMPXUSApOtfUfMKX7jBbigCZ-9ymCI2OdpWhSfjWkenqepcV8ZSvZyY-io7oHD40rMYGpReh9YzfuD3h55aigg0UnRZOmIqZcetfhk4Fh2aPzHmrqn9IxmrfO3QO3Fj9Mihez9UKUPmSmiNfiTape1eTgvVDdhlxeOoEns7hExvq6zZgsXOLCtsJtl0jAU8461nTa19QwlJivDZ9Qt~Pq73VtZJIlXsmuHHixbIqCkA8eMvFCNyS3gV1JuTDXmH93zvFsUCl9LaP0EclRHPE6qLth1NoEY8FWqR3FJHeicEg__",
              "https://tse1.mm.bing.net/th?id=OIP.DLHhRiRhIpjzEjOYgGuFowHaKn&pid=Api",
              "https://s3-alpha-sig.figma.com/img/1d05/d59e/2312732dd6546e4a1b3357770704b778?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNPc7oEN3n6QnwUI9rMq0vHIcw5tEBBXJESYS3FGLNaovrAmIyKbZOmmQY5YcJkgVk1a6X~XyhTVw4qPN2cRpnCn5h7QiziI7p4WXMm1XGUsBbWcEZnXojOF0J-PQqUKSDVcscssrwNXAIgNXZ4Q3S06nufkSTpCFZ4-m8BlwMqRgl9EdNhxGJ9QfeN5K-wAL2c3euXi8qrUg0ttR8-MK4JegOAvicRVNrAi2nHEkno0ewxWbi1mHM-SUvvh~1FB-CBCBe6QDHbMTvT~u2Fih60PniC5l1YuCmRrOz1ZQQRd2u6xUT7~~7Y4yfULoLn2zXu3KVUJ35T~jgPHcfTaNA__",
              "https://s3-alpha-sig.figma.com/img/0969/4da2/34556ce03c6c9a1d575924168b45ae00?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbjXOn0myCQlalik-YE0clikQQyIIjF1pnKPS487Kg2sf1WUpuTIdDJpy0YVsBjoukpbS01TAx8qTK1aQcrfxkO~FU~y-edPijjTHdqyAbgKPtdB3BqPqHJOC4D3a9V-dBJnFu1DtfA9lQISXGX7~bLhvAoQszTNriaB78nAWdf34J6~LOEbJDmaGDKWWLFEVVT1KUpnt~aDedooe0FYIcog6pr16eceoxxFwcDsQjAk8H243leo3Q8fCcKLmPDqYCOWR9z-B7BA8wR7fErkIVV8cgSysdqpkSDNZyjJxzAuRyFhoGpUWu-qMa4JiLc3zpf~WTI9YG98YiFZAoWXoA__",
            ]}
            describtion={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
            time={"9 am"}
            date={"25-5-2024"}
          />
          <Card
            eventName={"Tech Summit"}
            eventImgUrl={
              "https://s3-alpha-sig.figma.com/img/680f/9c55/374e07f4a0f6cfdbf755fb905475bbad?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwGQvqWpbuiJHt-079H5UlI1iBFs6RKXeZCZW6oRTCGhoCkUibpEtwsVWSvmjMAj2jTUeBuKnVMDA8HVD9k0IhBgfWNvXx-ZLLKYE1m4Mn7Lqv7Xd3aQFM1b1WqQhcGQxWqqonsZgL4kr-sRxlt5umHP5HBRd2Sp2HNLm9R1vC6w5nMO8QHnb-izXBrq~m4LXXA9zmUS-MDwXVF6Pgte19EoKBSZImKMZbnF0pxckG4YLSrgjOcft77jdp4sFP4o328CvFsue4MnOjlLrba-Pksw5vVBflJQ~hk0rJr7E191dWdRLzPWtvCoUAz9EaTvye6pGw7LrdHJM79KwobKsA__"
            }
            speakersAvatars={[
              "https://tse1.mm.bing.net/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.DLHhRiRhIpjzEjOYgGuFowHaKn&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api",
              "https://tse3.mm.bing.net/th?id=OIP.Qvf9UmzJS1V5YafT9NQZlAHaKL&pid=Api",
            ]}
            describtion={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
            time={"9 am"}
            date={"25-5-2024"}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
