import { useState, useRef, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import TopNavInfo from "./TopNavInfo";
import MobileSidebar from "./MobileSlider";
import logo from "../../../assets/logo/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target)
      ) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", link: "/" },
    {
      label: "Study Abroad",
      dropdown: true,
      submenu: [
        { label: "USA", link: "/study_abroad/usa" },
        { label: "UK", link: "/study_abroad/uk" },
        { label: "Australia", link: "/study_abroad/australia" },
        { label: "Sweden", link: "/study_abroad/sweden" },
        { label: "Denmark", link: "/study_abroad/denmark" },
        { label: "Hungary", link: "/study_abroad/hungary" },
        { label: "Czech Republic", link: "/study_abroad/czech_republic" },
      ],
    },
    { label: "Job Visa Counselling", link: "/jobVisaCounselling" },
    { label: "Tourist Visa Processing", link: "/touristVisaProcessing" },
    { label: "About", link: "/aboutUs" },
    { label: "Contact", link: "/contactUs" },
  ];

  return (
    <nav
      className={`h-30 mb-10 max-w-[1920px] mx-auto sticky ${
        scrollY > 0
          ? "top-0 transition-all duration-300"
          : "top-10 transition-all duration-500"
      } z-20 shadow-lg`}
      aria-label='Main Navigation'
    >
      <TopNavInfo />
      <div className='flex bg-navBg'>
        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Desktop Navbar */}
        <div className='flex-1 flex flex-col'>
          <div className='bg-navBg shadow w-full'>
            <div className='mx-auto'>
              <div className='flex justify-between items-center py-4 px-5 max-w-[1920px] mx-auto'>
                <Link to='/' className="flex flex-col justify-center items-center" aria-label='New Era Consultancy Home'>
                <img src={logo} alt="New Era Consultancy" className="w-16 h-8"/>
                  <h2 className='text-xs font-bold text-center text-customTextColor whitespace-pre-line'>
                    NEW ERA <br /> <span className='text-xs text-black'>CONSULTANCY</span>
                  </h2>
                </Link>

                <ul className='md:flex justify-around items-center gap-8 list-none hidden'>
                  {menuItems?.map((item, index) => (
                    <li
                      key={index}
                      className='relative group flex cursor-pointer flex-col'
                      ref={item?.dropdown ? dropDownMenuRef : null}
                    >
                      {item?.dropdown ? (
                        <>
                          <button
                            onClick={() => setDropDownState(!dropDownState)}
                            className='relative flex flex-col items-center py-2'
                            aria-expanded={dropDownState}
                            aria-controls={`submenu-${index}`}
                          >
                            {item?.label}
                            <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                          </button>
                          {dropDownState && (
                            <ul
                              id={`submenu-${index}`}
                              className='absolute top-12 z-10 space-y-2 rounded-lg bg-customBg whitespace-nowrap px-4 py-2 text-gray-100'
                              role='menu'
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className='px-3 hover:underline'
                                  role='menuitem'
                                  onClick={() =>
                                    setDropDownState(!dropDownState)
                                  }
                                >
                                  <Link to={subItem?.link}>
                                    {subItem?.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <NavLink
                          className={({ isActive }) =>
                            `${isActive && `text-orange-500 animate-pulse`}`
                          }
                          to={item?.link}
                          role='menuitem'
                        >
                          <li className='group flex cursor-pointer flex-col'>
                            {item?.label}
                            <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                          </li>
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>

                <div className='relative flex items-center justify-center gap-5 md:hidden'>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='w-5 h-6 flex items-center'
                    aria-label='Toggle Mobile Menu'
                  >
                    <FaBarsStaggered />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
