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
    <header
      className={`max-w-[1920px] bg-customBg w-full mx-auto h-10 px-5 md:px-20 flex items-center justify-between fixed top-0 transition-transform duration-300 ${
        scrollY > 50 ? "-translate-y-full" : "translate-y-0"
      }`}
      role="banner"
    >
      <h3 className='text-sm text-black font-bold'>
        Contact Us: +880 01700000000
      </h3>
      <div className='flex justify-center items-center'>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Facebook'
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/color/48/facebook-new.png'
            alt='Facebook logo'
            loading='lazy'
          />
        </a>
        <a
          href='https://www.linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/color/48/linkedin.png'
            alt='LinkedIn logo'
            loading='lazy'
          />
        </a>
        <a
          href='https://www.whatsapp.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
        >
          <img
            width='25'
            height='25'
            src='https://img.icons8.com/color/48/whatsapp--v1.png'
            alt='WhatsApp logo'
            loading='lazy'
          />
        </a>
      </div>
    </header>
  );
};

export default TopNavInfo;
