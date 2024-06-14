import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Events } from "./pages/Events";
import { LogIn } from "./pages/LogIn";
import { CreateAccount } from "./pages/CreateAccount";
import { NotFound } from "./pages/NotFound";
import CreateEvent from "./pages/CreateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
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
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
