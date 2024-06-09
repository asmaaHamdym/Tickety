import { Card } from "./components/Card";
import "./styles/App.css";

function App() {
  return (
    <>
      <div>
        <h1>Event Listing</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
          doloribus.
        </p>
        <div>
          <Card
            eventName={"Movie Night"}
            eventImgUrl={
              "https://s3-alpha-sig.figma.com/img/680f/9c55/374e07f4a0f6cfdbf755fb905475bbad?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwGQvqWpbuiJHt-079H5UlI1iBFs6RKXeZCZW6oRTCGhoCkUibpEtwsVWSvmjMAj2jTUeBuKnVMDA8HVD9k0IhBgfWNvXx-ZLLKYE1m4Mn7Lqv7Xd3aQFM1b1WqQhcGQxWqqonsZgL4kr-sRxlt5umHP5HBRd2Sp2HNLm9R1vC6w5nMO8QHnb-izXBrq~m4LXXA9zmUS-MDwXVF6Pgte19EoKBSZImKMZbnF0pxckG4YLSrgjOcft77jdp4sFP4o328CvFsue4MnOjlLrba-Pksw5vVBflJQ~hk0rJr7E191dWdRLzPWtvCoUAz9EaTvye6pGw7LrdHJM79KwobKsA__"
            }
            speakersAvatars={[
              "https://tse1.mm.bing.net/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.DLHhRiRhIpjzEjOYgGuFowHaKn&pid=Api",
              "https://tse3.mm.bing.net/th?id=OIP.Qvf9UmzJS1V5YafT9NQZlAHaKL&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api",
            ]}
            describtion={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
          />
          <Card
            eventName={"Girls Meetup"}
            eventImgUrl={
              "https://s3-alpha-sig.figma.com/img/ccc1/d934/ff7c9b13588365b9e06860d6a55ffc61?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cldsiMFoHlqZMTy6bNCVGdDCRgSKnWl2tBB3wg8aY6W9KqtMwTOvpBFaoWroS7oKgc3cvmH12D-JLrBijMFLZ-WaYCjeiYqjrItn9oiYyeNy9Q~7b2Q1a5xVslHtcvf3wo5IkLkKjnp2JpAy~oBeclpAqX8QY6T9zJVncVmYrs94Fc9X0eeq8YGiok050ihyepon5uyKDD6Pw~Lb28iX5BJD4y0jXWr6hyjnh27Z8N-NIQ1yqnRrX0OlfpheUFkgdVLM-xwLz9WCbN6~OXgIOktBedhRRvxhnh5iJwa02-ALUJyCVcAkNdUXlC-6W-utM6ZAdGAut4Q1yrRdI3qBOw__"
            }
            speakersAvatars={[
              "https://tse1.mm.bing.net/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.DLHhRiRhIpjzEjOYgGuFowHaKn&pid=Api",
              "https://tse3.mm.bing.net/th?id=OIP.Qvf9UmzJS1V5YafT9NQZlAHaKL&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api",
            ]}
            describtion={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
          />
          <Card
            eventName={"Stargazing"}
            eventImgUrl={
              "https://s3-alpha-sig.figma.com/img/1571/9c4a/23dd3b48d3176440b30298464d933d59?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2KDwALI1jlJf7DDtsHYiESPU5CeP-qkQWtulQxvqAUGcGXj4CITnq9z~xVGVizNz077H2vQmGuzOAIqFnHiz5svuZ7-ZGHuL-9zAY7E94gfN7u0VGgIUq-r3LFIDSUTtmaBxVhUwOEaT9vKv08kNUMLjljmvU4ck1Rz~DcDGyhT7CQ7VcMAQmgTzQv8iikF-Tr8acwbZYPKlWc6HQCCRAd9uEFaYlgqPv3NgqqIoalNM3KFpbM8yhy7vIPZKuglSgQEfst8lTe~jnhi~cY6KEmr0gRVNSRj7Y~r4nW~6RPOmPVVjKfI9kjWjBluVPYPtKi8IZw9dnAlm~FRZWlTKg__"
            }
            speakersAvatars={[
              "https://tse1.mm.bing.net/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.DLHhRiRhIpjzEjOYgGuFowHaKn&pid=Api",
              "https://tse3.mm.bing.net/th?id=OIP.Qvf9UmzJS1V5YafT9NQZlAHaKL&pid=Api",
              "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api",
            ]}
            describtion={
              "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus?dolor sit amet consectetur adipisicing elit. Ea, repellendus?"
            }
            location={"2464 Royal Ln. Mesa, New Jersey 45463"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
