import { Link } from "react-router-dom";
import aboutImage from "../../../assets/banner/7.jpg";


const About = () => {


  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center p-6 overflow-x-hidden'>
      <div
        className='w-full md:w-1/2'
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <img
          src={aboutImage}
          alt='About Us'
          className='object-cover w-full h-full rounded-lg shadow-lg'
          loading='lazy'
        />
      </div>
      <div
        className='w-full md:w-1/2 mt-6 md:mt-0 md:ml-6'
        data-aos='fade-left'
        data-aos-duration='1000'
      >
        <h2 className='text-4xl text-customBg font-bold mb-4'>About Us</h2>
        <p className='text-lg leading-relaxed line-clamp-3 mb-5'>
          New Era Consultancy is a UK, USA, Australia, Hungary, Sweden, Denmark,
          and Czech Republic-based consultancy firm in BD. We prepare students
          to choose the right path in pursuing higher studies abroad. We are
          dedicated to connecting talented individuals with rewarding careers.
          Our experienced team offers personalized guidance and support to
          ensure our clients achieve their educational and professional goals.
          With a commitment to excellence and a passion for helping others, New
          Era Consultancy is your trusted partner in higher education.
        </p>
        <Link
          to="/aboutUs"
          className='mt-4 px-6 py-2 bg-customBg text-white font-semibold rounded-full hover:bg-customBg/80 transition-all'
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default About;
