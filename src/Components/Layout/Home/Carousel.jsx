// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import photo1 from "../../../assets/banner/1.jpg";
import photo2 from "../../../assets/banner/2.jpg";
import photo3 from "../../../assets/banner/3.jpg";
import photo4 from "../../../assets/banner/4.jpg";
import photo5 from "../../../assets/banner/5.jpg";
import photo6 from "../../../assets/banner/6.jpg";
import photo7 from "../../../assets/banner/7.jpg";

import "./styles.css";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Carousel = () => {
  const images = [
    { src: photo1, alt: "Welcome To New Era Consultancy" },
    { src: photo2, alt: "Our Team at Work" },
    { src: photo3, alt: "Students Achieving Success" },
    { src: photo4, alt: "Guiding Students Abroad" },
    { src: photo5, alt: "Expert Guidance" },
    { src: photo6, alt: "Global Opportunities" },
    { src: photo7, alt: "Your Path to Success" },
  ];

  const [loaded, setLoaded] = useState(false);

  const textField = (
    <div className='absolute inset-0 flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
      <div
        className='w-full px-5 md:p-10 text-white space-y-3 md:space-y-8 md:max-w-7xl mx-auto'
        data-aos='zoom-in-left'
      >
        <h2 className='md:text-5xl font-bold text-left'>
          <span className='text-white'>Welcome</span> <br />
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[500, "To New Era", 1000, "To New Era Consultancy", 500]}
            speed={50}
            className=' text-3xl md:text-7xl text-customBg'
            repeat={Infinity}
          />
        </h2>
        <p className='text-lg md:text-xl text-justify md:text-left w-full md:px-0 '>
          New Era Consultancy is UK, USA, Australia, Hungary, Sweden, Denmark,
          Czech Republic based consultancy firm in Bangladesh. Who prepares
          students to choose their right path in pursuing higher studies abroad.
        </p>
      </div>
    </div>
  );

  return (
    <section aria-label='Carousel'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper relative'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-[60vh] md:h-[90vh]'>
              <img
                src={image.src}
                alt={image.alt}
                loading='lazy'
                className={`w-full h-full object-cover transition-all duration-700 ${
                  loaded ? "blur-0" : "blur-lg"
                }`}
                onLoad={() => setLoaded(true)}
              />
              {textField}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
