import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

const MobileSidebar = ({ isOpen, setIsOpen }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef(null);
  const dropDownContentRef = useRef(null);

  useEffect(() => {
    if (dropDownState) {
      dropDownContentRef.current.style.maxHeight = `${dropDownContentRef.current.scrollHeight}px`;
      dropDownContentRef.current.style.opacity = "1";
    } else {
      dropDownContentRef.current.style.maxHeight = "0";
      dropDownContentRef.current.style.opacity = "0";
    }
  }, [dropDownState]);

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setDropDownState((prev) => !prev);
  };

  const handleSidebarClose = () => {
    setIsOpen(false);
    setDropDownState(false);
  };

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
    <div
      className={`fixed z-[100] inset-0 bg-black/20 backdrop-blur-sm min-h-screen duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleSidebarClose}
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
          <IoMdClose onClick={handleSidebarClose} size={25} />
        </div>
        <ul className='mt-4 w-full'>
          {menuItems.map((item, index) => (
            <li key={index} className='py-2 hover:bg-gray-200'>
              {item.dropdown ? (
                <>
                  <button
                    onClick={handleDropdownToggle}
                    className='py-2 hover:bg-gray-200 w-full'
                    ref={dropDownMenuRef}
                  >
                    {item.label}
                  </button>
                  <ul
                    ref={dropDownContentRef}
                    className='transition-all duration-300 overflow-hidden max-h-0 opacity-0'
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        to={subItem.link}
                        key={subIndex}
                        onClick={handleSidebarClose}
                      >
                        <li className='py-2 w-full hover:bg-gray-200'>
                          {subItem.label}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    `${isActive && `text-orange-500 animate-pulse`}`
                  }
                  onClick={handleSidebarClose}
                  to={item.link}
                >
                  <li className='py-2 w-full hover:bg-gray-200'>
                    {item.label}
                  </li>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MobileSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileSidebar;
