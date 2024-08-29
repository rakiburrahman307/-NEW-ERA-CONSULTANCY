import footerLogo from "../../../assets/logo/logo.png";
import { FaFacebook, FaRedditAlien, FaRss } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="pt-20 bg-[#0E1E32] text-primary-content">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={footerLogo}
            alt="New Era Consultancy Logo"
            className="w-20 h-16 md:w-24 md:h-20"
          />
          <p className="text-xl md:text-2xl text-white font-semibold">
            New Era Consultancy
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center  mt-5 md:mt-0">
          {/* Title spanning all columns */}
          <h2 className="col-span-3 md:col-span-4 text-lg text-white font-bold mb-2">
            Quick Links
          </h2>
          {[
            "USA",
            "UK",
            "Australia",
            "Sweden",
            "Denmark",
            "Hungary",
            "Czech Republic",
          ].map((country) => (
            <p
              key={country}
              className="font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline"
            >
              {country}
            </p>
          ))}
        </div>

        {/* Navigation and Social Icons */}
        <div className="flex flex-col items-center gap-6 mt-5 md:mt-0">
          <div className="flex gap-6">
            {["About", "Contact"].map((item) => (
              <p
                key={item}
                className="font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex gap-5">
            <FaRss
              aria-label="RSS"
              size={20}
              className="text-white cursor-pointer hover:text-white/70 hover:scale-110"
            />
            <FaRedditAlien
              aria-label="Reddit"
              size={20}
              className="text-white cursor-pointer hover:text-white/70 hover:scale-110"
            />
            <IoLogoTwitter
              aria-label="Twitter"
              size={20}
              className="text-white cursor-pointer hover:text-white/70 hover:scale-110"
            />
            <FaFacebook
              aria-label="Facebook"
              size={20}
              className="text-white cursor-pointer hover:text-white/70 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="flex flex-col justify-center items-center mt-20">
        <h4 className="text-white text-sm text-center">
          &copy; 2024 New Era Consultancy. All Rights Reserved.
        </h4>
        <p className="text-white text-xs text-center mt-2">
          Designed and crafted with 💙 by Rakibur Rahman.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
