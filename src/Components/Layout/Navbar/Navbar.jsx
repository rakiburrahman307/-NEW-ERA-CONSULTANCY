import { useState, useRef, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import TopNavInfo from "./TopNavInfo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const closeTimer = useRef(null);

  const handleNavClick = (idx) => {
    const updatedNavLink = navLink.map((nav, index) => {
      if (index === idx) {
        return { ...nav, active: true };
      }
      return { ...nav, active: false };
    });
    setNavLink(updatedNavLink);
  };

  const handleMouseEnter = (idx) => {
    setDropdownOpen(true);
    clearTimeout(closeTimer.current);
    setHoveredCategory(idx);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 300);
    setDropdownOpen(false);
  };
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
  return (
    <nav
      className={`h-20 max-w-[1920px] mx-auto sticky ${
        scrollY > 0
          ? "top-0 transition-all duration-300"
          : "top-10 transition-all duration-500"
      } z-20 shadow-lg`}
    >
      <TopNavInfo></TopNavInfo>
      <div className='flex bg-navBg'>
        {/* Start Mobile View navbar  */}
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
              <h1 className='text-sm font-semibold text-customTextColor'>
                NEW ERA <span className='text-black'>CONSULTANCY</span>
              </h1>
              <IoMdClose onClick={() => setIsOpen(!isOpen)} size={25} />
            </div>
            <ul className='mt-4 w-full'>
              {navLink.map((nav, idx) => (
                <li key={idx} className='relative'>
                  <div
                    onClick={() => handleNavClick(idx)}
                    className={`text-[#2A2A2A] hover:text-[#2A2A2A]/80 cursor-pointer py-3.5 w-full hover:text-customTextColor hover:bg-blue-50 ${
                      nav.active ? "font-bold" : ""
                    }`}
                  >
                    {nav.name}
                  </div>
                  {nav.subCategory && nav.active && (
                    <ul className='pl-4 transition-all duration-500'>
                      {nav.subCategory.map((sub) => (
                        <li
                          key={sub.id}
                          className='text-[#2A2A2A] hover:text-[#2A2A2A]/80 cursor-pointer py-2 w-full hover:text-customTextColor hover:bg-blue-50'
                        >
                          <Link to={`/study_abroad/${sub.value}`}>
                            {sub.name}
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
        {/* End Mobile View navbar  */}
        {/* Start Desktop View navbar  */}
        <div className='flex-1 flex flex-col'>
          <div className='bg-navBg shadow w-full'>
            <div className='mx-auto'>
              <div className='flex justify-between items-center py-4 px-2 max-w-[1366px] mx-auto'>
                <Link to='/'>
                  <h2 className='text-base text font-bold text-customTextColor'>
                    NEW ERA <br />
                    <span className='text-xl text-black'>CONSULTANCY</span>
                  </h2>
                </Link>

                <ul className='md:flex justify-around items-center gap-8 list-none hidden'>
                  {navLink.map((nav, idx) => (
                    <li
                      key={idx}
                      className='relative group'
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        onClick={() => handleNavClick(idx)}
                        className={`flex flex-col font-extrabold items-center cursor-pointer ${
                          nav.active ? "text-gray-500" : "text-black"
                        }`}
                      >
                        {nav.name}
                        <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                      </div>
                      {nav.subCategory && hoveredCategory === idx && (
                        <ul
                          className={`${
                            dropdownOpen ? "visible" : "invisible"
                          } absolute z-50 w-40 space-y-1 rounded-sm left-0 mt-5`}
                        >
                          <span className='absolute -top-2.5 left-[10%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-orange-400'></span>
                          {nav.subCategory.map((sub, subIdx) => (
                            <li
                              key={sub.id}
                              className={`whitespace-nowrap px-4 py-2 text-gray-700 ${
                                dropdownOpen
                                  ? "opacity-100 duration-500"
                                  : "opacity-0 duration-500"
                              } rounded-sm bg-customBg text-white cursor-pointer hover:bg-customBg/80`}
                              style={{
                                transform: `translateX(${
                                  dropdownOpen ? 0 : (subIdx + 1) * 20
                                }px)`,
                              }}
                            >
                              <Link to={`/study_abroad/${sub.value}`}>
                                {sub.name}
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
        </div>
        {/* End Desktop View navbar  */}
      </div>
    </nav>
  );
};

export default Navbar;
