import AboutUs from "./pages/AboutUs";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";
import ManageEvent from "./pages/ManageEvent";
import SignupSuccess from "./pages/SignupSuccess";
import EventSuccess from "./pages/EventSuccess";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/create-event",
    element: <CreateEvent/>
  },
  {
    path: "/about",
    element: <AboutUs/>
  },
  {
    path: "/manage-event",
    element: <ManageEvent/>
  },
  {
    path: "/signup-success",
    element: <SignupSuccess/>
  },
  {
    path: "/event-success",
    element: <EventSuccess/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
