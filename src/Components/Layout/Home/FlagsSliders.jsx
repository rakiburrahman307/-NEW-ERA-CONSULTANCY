import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Parallax } from "react-parallax";
import ParallaxBg from "../../../assets/banner/7.jpg";
import usaFlag from "../../../assets/flags/usa.png";
import ukFlag from "../../../assets/flags/uk.png";
import australiaFlag from "../../../assets/flags/australia.png";
import swedenFlag from "../../../assets/flags/sweden.png";
import denmarkFlag from "../../../assets/flags/denmark.png";
import hungaryFlag from "../../../assets/flags/hungary.png";
import czechRepublicFlag from "../../../assets/flags/Czech_Republic.png";
import { useState } from "react";

const FlagsSliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const flags = [
    { src: usaFlag, alt: "USA Flag", name: "USA" },
    { src: ukFlag, alt: "UK Flag", name: "UK" },
    { src: australiaFlag, alt: "Australia Flag", name: "Australia" },
    { src: swedenFlag, alt: "Sweden Flag", name: "Sweden" },
    { src: denmarkFlag, alt: "Denmark Flag", name: "Denmark" },
    { src: hungaryFlag, alt: "Hungary Flag", name: "Hungary" },
    { src: czechRepublicFlag, alt: "Czech Republic Flag", name: "Czech Republic" },
  ];

  const [loadedFlags, setLoadedFlags] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedFlags((prev) => [...prev, index]);
  };

  return (
    <Parallax
      blur={{ min: -1, max: 3 }}
      bgImage={ParallaxBg}
      bgImageAlt="Vision Background"
      strength={500}
      className="my-10"
    >
      <section className="py-10 max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl text-center leading-normal font-extrabold tracking-tight text-gray-100 mb-8" data-aos="zoom-in">
          Countries We <span className="text-customBg">Work With</span>
        </h2>
        <Slider {...settings}>
          {flags.map((flag, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className={`w-60 h-60 mx-auto flex items-center justify-center relative transition-transform duration-300 ${loadedFlags.includes(index) ? "blur-0" : "blur-lg"}`}
              >
                <img
                  src={flag.src}
                  alt={flag.alt}
                  className="w-full h-full object-contain rounded-lg transition duration-500 ease-in-out"
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
              <p className="text-white text-center text-xl font-bold mt-4">{flag.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </Parallax>
  );
};

export default FlagsSliders;
