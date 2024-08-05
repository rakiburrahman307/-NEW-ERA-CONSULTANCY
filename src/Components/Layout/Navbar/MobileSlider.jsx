import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import PropTypes from 'prop-types';
const MobileSidebar = ({ isOpen, setIsOpen }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef(null);

  return (
    <div
      className={`fixed z-[100] inset-0 bg-black/20 backdrop-blur-sm min-h-screen duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`absolute min-h-full w-80 right-0 top-0 min-w-96 rounded-lg bg-white pb-5 text-center drop-shadow-2xl transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
          <Link to='/'>
            <li className='py-3 hover:bg-gray-200'>
              Home
            </li>
          </Link>
          <li className='' ref={dropDownMenuRef}>
            <button
              onClick={() => setDropDownState(!dropDownState)}
              className='py-3 hover:bg-gray-200 w-full'
            >
              Study Abroad
            </button>
            {dropDownState && (
              <ul className='space-y-2 rounded-lg whitespace-nowrap px-4 py-2 text-gray-900'>
                <li className='py-3 hover:bg-gray-200'>
                  <Link to='/study_abroad/usa'>USA</Link>
                </li>
                <li className='py-3 hover:bg-gray-200'>
                  <Link to='/study_abroad/uk'>UK</Link>
                </li>
                <li className='py-3 hover:bg-gray-200'>
                  <Link to='/study_abroad/australia'>Australia</Link>
                </li>
                <li className='py-3 hover:bg-gray-200'>
                  <Link to='/study_abroad/sweden'>Sweden</Link>
                </li>
                <li className='py-3 hover:bg-gray-200'>
                  <Link to='/study_abroad/denmark'>Denmark</Link>
                </li>
                <li className='py-3 hover:bg-gray-200'>
                  <Link to='/study_abroad/hungary'>Hungary</Link>
                </li>
                <li className='py-3 hover:bg-gray-200'>
                  <Link to='/study_abroad/czech_republic'>Czech Republic</Link>
                </li>
              </ul>
            )}
          </li>
          <Link to='#'>
            <li className='py-3 hover:bg-gray-200'>
              Job Visa Processing
            </li>
          </Link>
          <Link to='#'>
            <li className='py-3 hover:bg-gray-200'>
              Tourist Visa Processing
            </li>
          </Link>
          <Link to='/aboutUs'>
            <li className='py-3 hover:bg-gray-200'>
              About
            </li>
          </Link>
          <Link to='#'>
            <li className='py-3 hover:bg-gray-200'>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
MobileSidebar.propTypes ={
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
  };

export default MobileSidebar;
