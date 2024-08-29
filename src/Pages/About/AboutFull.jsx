import { useState } from "react";
import { Link } from "react-router-dom";
import fullBanner from "../../assets/banner/1.jpg";
import img1 from "../../assets/banner/6.jpg";
import Slider from "./Slider";

const AboutFull = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='mt-10'>
      {/* Full-width Banner */}
      <div className='w-full h-[60vh] md:h-[80vh]'>
        <img
          src={fullBanner}
          alt='Banner'
          className='w-full h-full object-cover'
          loading='lazy'
        />
      </div>

      {/* Section 1: Left Content, Right Image */}
      <div className='flex flex-col gap-5 md:flex-row items-center py-10 px-5 overflow-x-hidden'>
        <div
          className='md:w-1/2'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-customBg'>About Us</h2>
          <p className='text-lg text-justify'>
          New Era Consultancy is a leading consultancy firm established in Dhaka, The Capital city of Bangladesh. When we started a small and innovative business for helping Bangladeshi friends to study abroad, work and traveling around USA, UK, and Europe.
          </p>
        </div>
        <div
          className='md:w-1/2'
          data-aos='fade-left'
          data-aos-duration='1000'
        >
          <div
            className={`relative w-full h-full ${
              imageLoaded ? "blur-0" : "blur-lg"
            } transition duration-300 ease-in-out`}
          >
            <img
              src={img1}
              alt='About Us'
              className='w-full h-full object-cover rounded-lg'
              loading='lazy'
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Right Content, Left Image */}
      <div className='flex justify-between flex-col md:flex-row items-center gap-5 mb-8 px-8 overflow-x-hidden'>
        <div
          className='w-full md:w-1/2 order-2 md:order-1'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <Slider />
        </div>
        <div
          className='order-1 md:order-2 py-10 md:px-20 flex flex-col justify-center'
          data-aos='fade-left'
          data-aos-duration='1000'
        >
          <h2 className='text-3xl sm:text-5xl text-customBg font-bold mb-1'>
            New Era Consultancy
          </h2>
          <h3 className='text-xl font-bold mb-4'>
            Our Global Education Partner
          </h3>
          <p className='text-lg leading-relaxed text-justify mb-5'>
            New Era Consultancy helps Bangladeshi students achieve their dreams
            of studying abroad. We are based in the UK, USA, Australia, Hungary,
            Sweden, Denmark, and the Czech Republic. Our team offers
            personalized support and workshops to prepare you for university
            life and a successful career. We help you choose the right path and
            support you every step of the way. Trust New Era Consultancy to turn
            your potential into success and connect you with great educational
            and career opportunities.
          </p>
        </div>
      </div>

      {/* Redirect Button to Full About Page */}
      <div className='flex justify-center p-8'>
        <Link
          to='/'
          className='inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50 transition-all'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            ></path>
          </svg>
          <span className='ml-1 font-bold text-lg'>Back To Home</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutFull;
