import { useState } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/achievements/1.jpg";
import img2 from "../../../assets/achievements/2.jpg";
import img3 from "../../../assets/achievements/3.jpg";
import img4 from "../../../assets/achievements/4.jpg";

const OurAchievements = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
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
    { src: img1, alt: "Achievement 1" },
    { src: img2, alt: "Achievement 2" },
    { src: img3, alt: "Achievement 3" },
    { src: img4, alt: "Achievement 4" },
  ];

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set(prev.add(index)));
  };

  const handleImageError = (index) => {
    // Handle image load error, maybe show a placeholder or log the error
    console.error(`Image at index ${index} failed to load.`);
  };

  return (
    <div className='slider-container mx-auto px-4 py-10'>
      <h2 className='text-3xl sm:text-5xl text-center text-customBg font-bold mb-8'>
        Our Achievements
      </h2>
      <Slider {...settings}>
        {achievements.map((achievement, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div
              className={`relative w-[330px] h-[200px] overflow-hidden ${
                loadedImages.has(index)
                  ? "blur-0"
                  : "blur-lg transition-all duration-500 ease-in-out"
              }`}
            >
              <img
                width={330}
                height={200}
                className='w-full h-full object-fill md:object-cover'
                src={achievement.src}
                alt={achievement.alt}
                loading='lazy'
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurAchievements;
