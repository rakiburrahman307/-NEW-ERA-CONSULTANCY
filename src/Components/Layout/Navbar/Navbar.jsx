import { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLink, setNavLink] = useState([
    { name: "Home", value: "home", active: true },
    {
      name: "Study Abroad",
      value: "study_abroad",
      subCategory: [
        { id: 1, name: "USA", value: "usa" },
        { id: 2, name: "UK", value: "uk" },
        { id: 3, name: "Australia", value: "australia" },
        { id: 4, name: "Sweden", value: "sweden" },
        { id: 5, name: "Denmark", value: "denmark" },
        { id: 6, name: "Hungary", value: "hungary" },
        { id: 7, name: "Czech Republic", value: "czech_republic" },
      ],
      active: false,
    },
    {
      name: "Job Visa Processing",
      value: "job_visa_processing",
      active: false,
    },
    {
      name: "Tourist Visa Processing",
      value: "tourist_visa_processing",
      active: false,
    },
    { name: "About Us", value: "aboutUs", active: false },
    { name: "Contact Us", value: "contactUs", active: false },
  ]);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (idx) => {
    const updatedNavLink = navLink.map((nav, index) => {
      if (index === idx) {
        return { ...nav, active: true };
      }
      return { ...nav, active: false };
    });
    setNavLink(updatedNavLink);
  };

  return (
    <nav className='max-h-20 max-w-[1920px] mx-auto'>
      <div
        className={`bg-customBg h-10 px-20 flex items-center justify-between fixed w-full top-0 transition-transform duration-300 ${
          scrollY > 50 ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <h3 className='text-sm text-black font-bold'>
          Contact US:+880 01700000000
        </h3>
        <div className='flex justify-center items-center'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              width='25'
              height='25'
              src='https://img.icons8.com/color/48/facebook-new.png'
              alt='facebook-new'
            />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              width='25'
              height='25'
              src='https://img.icons8.com/color/48/linkedin.png'
              alt='linkedin'
            />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img
              width='25'
              height='25'
              src='https://img.icons8.com/color/48/whatsapp--v1.png'
              alt='whatsapp--v1'
            />
          </a>
        </div>
      </div>
{/* Mobile View navbar  */}
      <div className='h-screen flex overflow-hidden bg-navBg pt-10'>
        {/* Sidebar */}
        <div
          className={`fixed z-[100] inset-0 bg-black/20 backdrop-blur-sm min-h-screen duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`absolute min-h-full w-80 right-0 top-0 min-w-96 rounded-lg bg-white pb-5 text-center drop-shadow-2xl transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center px-5 my-5'>
              <h1 className='text-2xl font-semibold'>NBC News</h1>
              <IoMdClose onClick={() => setIsOpen(!isOpen)} size={25} />
            </div>
            <ul className='mt-4 w-full'>
              {navLink?.map((nav, idx) => (
                <li key={idx}>
                  <div
                    onClick={() => handleNavClick(idx)}
                    className={`text-[#2A2A2A] hover:text-[#2A2A2A]/80 cursor-pointer py-3.5 w-full hover:text-blue-700 hover:bg-blue-50 ${
                      nav?.active ? "font-bold" : ""
                    }`}
                  >
                    {nav?.name}
                  </div>
                  {nav?.subCategory && nav?.active && (
                    <ul className='pl-4'>
                      {nav?.subCategory.map((sub) => (
                        <li
                          key={sub?.id}
                          className='text-[#2A2A2A] hover:text-[#2A2A2A]/80 cursor-pointer py-1 w-full hover:text-blue-700 hover:bg-blue-50'
                        >
                          <Link to={`/study_abroad/${sub?.value}`}>
                            {sub?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <div className='bg-navBg shadow fixed w-full top-10'>
            <div className='container mx-auto'>
              <div className='flex justify-between items-center py-4 px-2 max-w-[1366px] mx-auto'>
                <Link to='/'>
                  <h2 className='text-base text font-bold text-customTextColor'>
                    NEW ERA <br />
                    <span className='text-xl text-black'>CONSULTANCY</span>
                  </h2>
                </Link>

                <ul className='md:flex justify-around items-center gap-8 list-none hidden'>
                  {navLink.map((nav, idx) => (
                    <li key={idx} className='relative group'>
                      <div
                        onClick={() => handleNavClick(idx)}
                        className={`flex flex-col font-extrabold items-center cursor-pointer ${
                          nav?.active ? "text-gray-500" : "text-black"
                        }`}
                      >
                        {nav.name}
                        <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                      </div>
                      {nav?.subCategory && (
                        <ul className='absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md'>
                          {nav?.subCategory.map((sub) => (
                            <li
                              key={sub?.id}
                              className='whitespace-nowrap px-4 py-2 text-gray-700 hover:bg-gray-100'
                            >
                              <Link to={`/study_abroad/${sub?.value}`}>
                                {sub?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <div className='relative flex items-center justify-center gap-5'>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='w-5 h-6 flex items-center md:hidden '
                  >
                    <FaBarsStaggered />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Main content goes here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
