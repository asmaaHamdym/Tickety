import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Events } from "./pages/Events";
import { LogIn } from "./pages/LogIn";
import { CreateAccount } from "./pages/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "/login/create-account",
    element: <CreateAccount />,
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
