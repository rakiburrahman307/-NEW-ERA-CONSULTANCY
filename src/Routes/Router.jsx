import { createBrowserRouter } from "react-router-dom";
import Home from './../Components/Layout/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import App from "../App";
import AboutFull from "../Pages/About/AboutFull";
import Details from "../Pages/DetailsPage/Details";
import ContactUs from "../Pages/ContactUs/ContactUs";


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
      {
        path: "/aboutUs",
        element: <AboutFull />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/study_abroad/:value",
        element: <Details />,
      },
     
    ],
  },
]);

export default router;