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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
