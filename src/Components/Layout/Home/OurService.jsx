import { Link } from "react-router-dom";
import serviceImage from "../../../assets/banner/4.jpg";

const OurService = () => {
  return (
    <section className='bg-white py-16 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:flex-row md:space-x-8'>
        <div className='md:w-1/2 mb-8 md:mb-0' data-aos='fade-right'>
          <h2 className='text-4xl text-customBg font-bold mb-4'>Our Services</h2>
          <p className='text-gray-700 mb-4 text-justify'>
            We offer a variety of services to help you achieve your goals. Our team of experts is dedicated to providing top-notch service and support to ensure your success. Whether you&apos;re looking for consulting, project management, or technical support, we have the skills and experience to help you succeed.
          </p>
          <p className='text-gray-700 mb-4 text-justify'>
            Our services are tailored to meet your specific needs, and we work closely with you to understand your requirements and deliver solutions that exceed your expectations. Contact us today to learn more about how we can help you achieve your goals.
          </p>
          <Link
            to='/contactUs'
            className='inline-block px-6 py-3 bg-customBg text-white font-semibold rounded-lg shadow-md hover:bg-customBg/80 focus:outline-none'
          >
            Contact Us
          </Link>
        </div>
        <div className='md:w-1/2 w-full' data-aos='fade-left'>
          <div className='bg-customBg w-full h-[380px] relative'>
            <img
              src={serviceImage}
              alt='Representation of our services'
              className='w-full h-full absolute md:ml-5 md:mt-5 rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
