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
      className={`max-w-[1920px] bg-customBg w-full mx-auto h-13 px-5 md:px-20 fixed top-0 transition-transform duration-300 ${
        scrollY > 50 ? "-translate-y-full" : "translate-y-0"
      }`}
      role='banner'
    >
      <div className='max-w-[1440px] flex items-center justify-between mx-auto'>
        <h3 className='text-sm text-black font-bold'>
          Contact Us: +880 01717155730
        </h3>
        <div className='flex justify-center items-center'>
          <a
            href='https://www.facebook.com/profile.php?id=100066718226419&mibextid=ZbWKwL'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <img
              width='35'
              height='35'
              src='https://img.icons8.com/color/48/facebook-new.png'
              alt='Facebook logo'
              loading='lazy'
            />
          </a>
          <a
            href='https://wa.me/8801717155730'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp'
          >
            <img
              width='35'
              height='35'
              src='https://img.icons8.com/color/48/whatsapp--v1.png'
              alt='WhatsApp logo'
              loading='lazy'
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopNavInfo;
