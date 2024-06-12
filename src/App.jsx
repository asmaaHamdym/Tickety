import AboutUs from "./pages/AboutUs";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";
// import { createRoot } from "react-dom/client";

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
    path: "/createevent",
    element: <CreateEvent/>
  },
  {
    path: "/about",
    element: <AboutUs/>
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
