import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Events } from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import { LogIn } from "./pages/LogIn";
import { CreateAccount } from "./pages/CreateAccount";
import { NotFound } from "./pages/NotFound";
import CreateEvent from "./pages/CreateEvent";
import Rsvps from "./pages/Rsvps";
import ManageEvent from "./pages/ManageEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
  {
    path: "/rsvps",
    element: <Rsvps />,
  },
  {
    path: "/manage-event", 
    element: <ManageEvent />,
  },
  {
    path: "/*",
    element: <NotFound />,
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
