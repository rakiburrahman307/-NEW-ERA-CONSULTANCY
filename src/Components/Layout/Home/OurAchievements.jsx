import { useState } from 'react';
import Slider from 'react-slick';

const OurAchievements = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
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

  const achievements = [
    { src: "https://source.unsplash.com/300x300/?trophy", alt: "Achievement 1", title: "Top Performer Award" },
    { src: "https://source.unsplash.com/300x300/?medal", alt: "Achievement 2", title: "Innovation Excellence" },
    { src: "https://source.unsplash.com/300x300/?award", alt: "Achievement 3", title: "Best Project Award" },
    { src: "https://source.unsplash.com/300x300/?certificate", alt: "Achievement 4", title: "Outstanding Contribution" },
    { src: "https://source.unsplash.com/300x300/?success", alt: "Achievement 5", title: "Achievement in Leadership" },
    { src: "https://source.unsplash.com/300x300/?recognition", alt: "Achievement 6", title: "Excellence in Customer Service" },
  ];

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set(prev.add(index)));
  };

  return (
    <div className='slider-container mx-auto px-4 py-10'>
      <h2 className='text-3xl sm:text-5xl text-center text-customBg font-bold mb-4'>Our Achievements</h2>
      <Slider {...settings}>
        {achievements.map((achievement, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className={`relative w-[110px] h-[110px] rounded-full overflow-hidden ${loadedImages.has(index) ? 'blur-0' : 'blur-lg transition-all duration-300 ease-in-out'}`}>
              <img
                width={110}
                height={110}
                className="w-full h-full object-cover"
                src={achievement.src}
                alt={achievement.alt}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
            </div>
            <h3 className='mt-2 text-xl font-semibold text-gray-800'>{achievement.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurAchievements;
