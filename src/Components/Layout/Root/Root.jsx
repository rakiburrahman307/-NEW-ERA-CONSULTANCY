import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useOffline from "../Hooks/useOffline";
import offlineImg from "../../../assets/offline/internet.svg";

const Root = () => {
  const isOffline = useOffline();

  if (isOffline) {
    return (
      <div className='max-w-[1920px] mx-auto min-h-screen'>
        <Navbar />
        <div className='flex flex-col md:flex-row justify-center items-center h-full my-20'>
          <img
            src={offlineImg}
            alt='No internet connection'
            className='w-52 h-52'
          />
          <h2 className='text-2xl'>
            You are offline. Please check your connection.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-[1920px] mx-auto min-h-screen'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
