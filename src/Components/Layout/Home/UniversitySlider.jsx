import { useState } from 'react';
import Slider from 'react-slick';
import Amsterdam from "../../../assets/university/amsterdam.png"
import Boston from "../../../assets/university/boston.jpg"
import Budapest from "../../../assets/university/budapest.jpg"
import Copenhagen  from "../../../assets/university/cbs.jpg"
import Debrecen   from "../../../assets/university/debrecen.svg"
import Jonkoping    from "../../../assets/university/jonkoping.jpg"
import Stanton     from "../../../assets/university/stanton.png"
import Stockholm      from "../../../assets/university/stockholm.jpg"
import Tilburg       from "../../../assets/university/tilburg.png"
import SouthDenmark       from "../../../assets/university/university-of-southern-denmark.svg"

const UniversitySlider = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
    dots: false,
    arrows: false,
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
  
  const universities = [
    { src:Amsterdam, alt: "University of Amsterdam" },
    { src: Boston, alt: "Boston College" },
    { src: Budapest, alt: "Budapest Business school" },
    { src: Copenhagen, alt: "Copenhagen Business school" },
    { src: Debrecen, alt: "University of Debrecen" },
    { src: Jonkoping, alt: "Jonkoping University" },
    { src: Stanton, alt: "Stanton University" },
    { src: Stockholm, alt: "Stockholm University" },
    { src: Tilburg, alt: "Tilburg University" },
    { src: SouthDenmark, alt: "University College South Denmark." },
  ];

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set(prev.add(index)));
  };

  return (
    <div className='slider-container mx-auto px-4 py-10'>
      <h2 className='text-3xl sm:text-5xl text-center text-customBg font-bold mb-8'>University</h2>
      <Slider {...settings}>
        {universities.map((university, index) => (
          <div key={index} className='flex flex-col items-center justify-center'>
            <div className={`relative w-[110px] mx-auto h-[110px] rounded-full overflow-hidden ${loadedImages.has(index) ? 'blur-0' : 'blur-lg transition-all duration-300 ease-in-out'}`}>
              <img
                width={110}
                height={110}
                className="w-full h-full object-cover"
                src={university?.src}
                alt={university?.alt}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
            </div>
            <h3 className='mt-2 text-xl text-center font-semibold text-gray-800'>{university?.alt}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UniversitySlider;
