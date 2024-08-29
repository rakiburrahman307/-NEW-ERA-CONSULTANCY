import { useState } from 'react';
import Slider from 'react-slick';

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
    { src: "https://source.unsplash.com/300x300/?profile", alt: "University 1" },
    { src: "https://source.unsplash.com/300x300/?profile", alt: "University 2" },
    { src: "https://source.unsplash.com/300x300/?profile", alt: "University 3" },
    { src: "https://source.unsplash.com/300x300/?profile", alt: "University 4" },
    { src: "https://source.unsplash.com/300x300/?profile", alt: "University 5" },
    { src: "https://source.unsplash.com/300x300/?profile", alt: "University 6" },
  ];

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set(prev.add(index)));
  };

  return (
    <div className='slider-container mx-auto px-4 py-10'>
      <h2 className='text-3xl sm:text-5xl text-center text-customBg font-bold mb-4'>University</h2>
      <Slider {...settings}>
        {universities.map((university, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className={`relative w-[110px] h-[110px] rounded-full overflow-hidden ${loadedImages.has(index) ? 'blur-0' : 'blur-lg transition-all duration-300 ease-in-out'}`}>
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
            <h3 className='mt-2 text-xl font-semibold text-gray-800'>{university?.alt}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UniversitySlider;
