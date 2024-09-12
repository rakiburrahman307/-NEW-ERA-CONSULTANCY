import footerLogo from "../../../assets/logo/logo.png";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer className='bg-[#1A1D2B] text-white pt-10'>
      <div className='container mx-auto p-6 md:p-8'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
          {/* Logo and Description */}
          <div className='flex flex-col items-center lg:items-start mb-10 lg:mb-0'>
            <a
              href='/'
              className='flex items-center space-x-2 text-2xl font-medium'
            >
              <img
                src={footerLogo}
                alt='New Era Consultancy Logo'
                width='64'
                height='64'
                className='w-16'
              />
              <span>New Era Consultancy</span>
            </a>
            <p className='mt-4 max-w-md text-center lg:text-left text-md text-gray-200'>
              New Era Consultancy in Dhaka helps Bangladeshi clients with
              studying, working, and traveling abroad. We make global
              opportunities accessible for everyone.
            </p>
            <div className='flex space-x-4 mt-4'>
              <a
                href='https://www.facebook.com/profile.php?id=100066718226419&mibextid=ZbWKwL'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-200 hover:text-gray-50'
                aria-label='Facebook'
              >
                <FaFacebook size={25} />
              </a>
              <a
                href='https://wa.me/8801717155730'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-200 hover:text-gray-50'
                aria-label='WhatsApp'
              >
                <FaWhatsapp size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='flex flex-col lg:flex-row lg:justify-around mb-10 gap-10 lg:mb-0'>
            <div className='flex flex-col items-center'>
              <h3 className='text-md font-semibold leading-6 mb-4 text-center'>
                Quick Links
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {quickLinks.map((link) => (
                  <div key={link.name} className='text-center'>
                    <Link
                      to={link.link}
                      className='text-md leading-6 text-gray-300 hover:text-gray-50 hover:underline'
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className='border-t border-gray-400/30 pt-6 text-center mt-10'>
          <h4 className='text-sm'>
            &copy; 2024 New Era Consultancy. All Rights Reserved.
          </h4>
          <p className='text-xs mt-2'>
            Designed and crafted with <span className='text-gray-50'>💙</span>{" "}
            by Rakibur Rahman.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
