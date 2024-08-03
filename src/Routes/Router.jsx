import { createBrowserRouter } from "react-router-dom";
import Home from './../Components/Layout/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     
    ],
  },
]);

export default router;