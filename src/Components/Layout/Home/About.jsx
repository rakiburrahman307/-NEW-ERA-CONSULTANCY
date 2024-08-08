import { useState } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../../assets/banner/7.jpg";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className='container mx-auto flex flex-col md:flex-row gap-5 items-center p-6 overflow-x-hidden' aria-labelledby="about-us-heading">
      <div
        className='w-full md:w-1/2'
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <div className="bg-customBg w-full h-[380px] relative">
          <img
            src={aboutImage}
            alt='About New Era Consultancy'
            className={`object-cover md:ml-5 md:mt-5 absolute w-full h-full rounded-lg shadow-lg transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading='lazy'
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse"></div>
          )}
        </div>
      </div>
      <div
        className='w-full md:w-1/2 mt-6 md:mt-0 md:ml-6'
        data-aos='fade-left'
        data-aos-duration='1000'
      >
        <h2 id="about-us-heading" className='text-4xl text-customBg font-bold mb-4'>About Us</h2>
        <p className='text-lg leading-relaxed mb-5'>
          New Era Consultancy is a UK, USA, Australia, Hungary, Sweden, Denmark, and Czech Republic-based consultancy firm in BD. We prepare students to choose the right path in pursuing higher studies abroad. We are dedicated to connecting talented individuals with rewarding careers. Our experienced team offers personalized guidance and support to ensure our clients achieve their educational and professional goals. With a commitment to excellence and a passion for helping others, New Era Consultancy is your trusted partner in higher education.
        </p>
        <Link
          to="/aboutUs"
          className='mt-4 px-6 py-2 bg-customBg text-white font-semibold rounded-full hover:bg-customBg/80 transition-all'
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default About;
