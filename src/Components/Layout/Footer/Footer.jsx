import footerLogo from "../../../assets/logo/logo.png";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const miniNav = [
    { name: "About", link: "/aboutUs" },
    { name: "Contact", link: "/contactUs" },
  ];
  const quickLinks = [
    { name: "USA", link: "/study_abroad/usa" },
    { name: "UK", link: "/study_abroad/uk" },
    { name: "Australia", link: "/study_abroad/australia" },
    { name: "Sweden", link: "/study_abroad/sweden" },
    { name: "Denmark", link: "/study_abroad/denmark" },
    { name: "Hungary", link: "/study_abroad/hungary" },
    { name: "Czech Republic", link: "/study_abroad/czech_republic" },
  ];
  return (
    <footer className='pt-16 bg-[#0E1E32] text-primary-content'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Logo and Branding */}
        <div className='flex flex-col items-center gap-2'>
          <img
            src={footerLogo}
            alt='New Era Consultancy Logo'
            className='w-20 h-14 md:w-20 md:h-16'
          />
          <p className='text-xl md:text-2xl text-white font-semibold'>
            New Era Consultancy
          </p>
        </div>

        {/* Quick Links */}
        <div className='grid grid-cols-3 md:grid-cols-4 gap-2 text-center mt-5 md:mt-0'>
          {/* Title spanning all columns */}
          <h2 className='col-span-3 md:col-span-4 text-lg text-white font-bold mb-2'>
            Quick Links
          </h2>
          {quickLinks?.map((country) => (
            <Link
              to={country?.link}
              key={country?.name}
              className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'
            >
              {country?.name}
            </Link>
          ))}
        </div>

        {/* Navigation and Social Icons */}
        <div className='flex flex-col items-center gap-6 mt-5 md:mt-0'>
          <div className='flex gap-6'>
            {miniNav?.map((item) => (
              <Link
                to={item?.link}
                key={item?.name}
                className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'
              >
                {item?.name}
              </Link>
            ))}
          </div>
          <div className='flex gap-5'>
            <a
              href='https://wa.me/8801717155730'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='WhatsApp'
            >
              <FaWhatsapp
                size={20}
                className='text-white cursor-pointer hover:text-white/70 hover:scale-110'
              />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100066718226419&mibextid=ZbWKwL'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <FaFacebook
                size={20}
                className='text-white cursor-pointer hover:text-white/70 hover:scale-110'
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className='flex flex-col justify-center items-center mt-10 pb-5'>
        <h4 className='text-white text-sm text-center'>
          &copy; 2024 New Era Consultancy. All Rights Reserved.
        </h4>
        <p className='text-white text-xs text-center mt-2'>
          Designed and crafted with 💙 by Rakibur Rahman.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
