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

const FlagsSliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: "linear",
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

  return (
    <Parallax
      blur={{ min: -1, max: 3 }}
      bgImage={ParallaxBg}
      bgImageAlt='Vision Background'
      strength={500}
      className='my-10'
    >
      <section className='slider-container py-10'>
        <h2 className='text-4xl font-black text-customBg text-center' data-aos="zoom-in">
          Countries We Work With
        </h2>
        <Slider {...settings}>
          {flags?.map((flag, index) => (
            <div
              key={index}
              className='w-60 justify-center h-60 flex flex-col items-center'
            >
              <img
                src={flag?.src}
                alt={flag?.alt}
                className='mx-auto w-full h-full object-contain'
              />
              <p className="text-white text-center text-xl font-bold mt-2">{flag?.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </Parallax>
  );
};

export default FlagsSliders;
