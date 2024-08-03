// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  const textField = (
    <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div
        className="w-full max-w-3xl p-10 text-white space-y-8"
        data-aos="zoom-in-left"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Unlock Your Career Potential with JobSwift
        </h2>
        <p className="text-lg md:text-xl">
          Explore a world of opportunities and take the next step in your
          professional journey with JobSwift Industries Ltd. We are dedicated
          to connecting talented individuals with rewarding careers. Your
          dream job awaits!
        </p>
      </div>
    </div>
  );

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper relative"
    >
      <SwiperSlide>
        <div className="w-full h-[60vh] md:h-[80vh]">
          <img
            src="https://i.ibb.co/8X9jbJ9/pexels-alena-darmel-7710118.jpg"
            alt="Carousel Image"
            className="w-full h-full object-cover"
          />
          {textField}
        </div>
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};

export default Carousel;
