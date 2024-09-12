// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import photo1 from "../../assets/banner/1.jpg";
import photo2 from "../../assets/banner/2.jpg";
import photo3 from "../../assets/banner/3.jpg";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

const Slider = () => {
  const images = [
    { src: photo1, alt: "Carousel Image 1" },
    { src: photo2, alt: "Carousel Image 2" },
    { src: photo3, alt: "Carousel Image 3" },
  ];

  const [loaded, setLoaded] = useState(false);

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
          <div className=' h-[50vh] md:h-[50vh]'>
            <img
              src={image.src}
              alt={image.alt}
              loading='lazy'
              className={`w-full rounded-xl h-full object-cover transition-all duration-700 ${
                loaded ? "blur-0" : "blur-lg"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
