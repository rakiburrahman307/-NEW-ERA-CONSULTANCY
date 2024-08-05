import { useEffect, useState } from "react";

const TopNavInfo = () => {
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
    <div
      className={`max-w-[1366px] bg-customBg w-full mx-auto h-10 px-5 md:px-20 flex items-center justify-between fixed top-0 transition-transform duration-300 ${
        scrollY > 50 ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h3 className='text-sm text-black font-bold'>
        Contact US:+880 01700000000
      </h3>
      <div className='flex justify-center items-center'>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/color/48/facebook-new.png'
            alt='facebook-new'
          />
        </a>
        <a
          href='https://www.linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/color/48/linkedin.png'
            alt='linkedin'
          />
        </a>
        <a
          href='https://www.whatsapp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/color/48/whatsapp--v1.png'
            alt='whatsapp--v1'
          />
        </a>
      </div>
    </div>
  );
};

export default TopNavInfo;
