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


const Carousel = () => {
  const images = [
    { src: photo1, alt: "Carousel Image 1" },
    { src: photo2, alt: "Carousel Image 2" },
    { src: photo3, alt: "Carousel Image 3" },
    { src: photo4, alt: "Carousel Image 4" },
    { src: photo5, alt: "Carousel Image 5" },
    { src: photo6, alt: "Carousel Image 6" },
    { src: photo7, alt: "Carousel Image 7" },
  ];

  const [loaded, setLoaded] = useState(false);

  const textField = (
    <div className='absolute inset-0 flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
      <div className='w-full p-10 text-white space-y-8' data-aos='zoom-in-left'>
        <h2 className='text-4xl md:text-6xl font-bold text-center'>
          Welcome To New Era Consultancy
        </h2>
        <p className='text-lg md:text-xl text-justify md:text-center w-full px-5 md:px-0 md:max-w-4xl mx-auto'>
          New Era Consultancy is UK, USA, Australia, Hungary, Sweden, Denmark
          and Czech Republic based Consultancy firm in BD. Who Prepares Students
          to choose their right path in pursuing higher studies abroad.
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
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper relative'
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className='w-full h-[60vh] md:h-[90vh]'>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'blur-0' : 'blur-lg'}`}
              onLoad={() => setLoaded(true)}
            />
            {textField}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
