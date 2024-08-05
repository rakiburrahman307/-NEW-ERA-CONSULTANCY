import { useState, useRef, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TopNavInfo from "./TopNavInfo";
import MobileSidebar from "./MobileSlider";

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
      className={`h-30 mb-10 max-w-[1920px] mx-auto sticky ${
        scrollY > 0
          ? "top-0 transition-all duration-300"
          : "top-10 transition-all duration-500"
      } z-20 shadow-lg`}
    >
      <TopNavInfo />
      <div className='flex bg-navBg'>
        {/* Start Mobile View navbar */}
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen}></MobileSidebar>
        {/* End Mobile View navbar */}
        {/* Start Desktop View navbar */}
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
                  <Link to='/'>
                    <li className='group flex  cursor-pointer flex-col'>
                      Home{" "}
                      <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                    </li>
                  </Link>
                  <li className='relative group' ref={dropDownMenuRef}>
                    <button
                      onClick={() => setDropDownState(!dropDownState)}
                      className='relative flex flex-col items-center py-2'
                    >
                      Study Abroad{" "}
                      <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                    </button>
                    {dropDownState && (
                      <ul className='absolute top-12 z-10 space-y-2 rounded-lg bg-customBg whitespace-nowrap px-4 py-2 text-gray-100'>
                        <li className='px-3 hover:underline cursor-pointer'>
                          <Link to='/study_abroad/usa'>USA</Link>
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                          <Link to='/study_abroad/uk'>UK</Link>
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                          <Link to='/study_abroad/australia'>Australia</Link>
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                          <Link to='/study_abroad/sweden'>Sweden</Link>
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                          <Link to='/study_abroad/denmark'>Denmark</Link>
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                          <Link to='/study_abroad/hungary'>Hungary</Link>
                        </li>
                        <li className='px-3 hover:underline cursor-pointer'>
                          <Link to='/study_abroad/czech_republic'>
                            Czech Republic
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <Link to='#'>
                    <li className='group flex  cursor-pointer flex-col'>
                      Job Visa Processing{" "}
                      <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                    </li>
                  </Link>
                  <Link to='#'>
                    <li className='group flex  cursor-pointer flex-col'>
                      Tourist Visa Processing{" "}
                      <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                    </li>
                  </Link>
                  <Link to='/aboutUs'>
                    <li className='group flex  cursor-pointer flex-col'>
                      About{" "}
                      <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                    </li>
                  </Link>
                  <Link to='#'>
                    <li className='group flex  cursor-pointer flex-col'>
                      Contact{" "}
                      <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-customBg transition-all duration-300 group-hover:w-full'></span>
                    </li>
                  </Link>
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
        {/* End Desktop View navbar */}
      </div>
    </nav>
  );
};

export default Navbar;
