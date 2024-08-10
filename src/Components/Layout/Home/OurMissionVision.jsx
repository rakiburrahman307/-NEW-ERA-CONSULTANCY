import { useState } from "react";
import { Parallax } from "react-parallax";
import img2 from "../../../assets/banner/6.jpg";
import img3 from "../../../assets/banner/6.jpg";
import img4 from "../../../assets/banner/6.jpg";
import img7 from "../../../assets/banner/7.jpg";

const OurMissionVision = () => {
  // State to track if images are loaded
  const [loadedImages, setLoadedImages] = useState({
    img2: false,
    img3: false,
    img4: false,
  });

  // Handler to update the state when an image is loaded
  const handleImageLoad = (imageKey) => {
    setLoadedImages((prev) => ({ ...prev, [imageKey]: true }));
  };

  return (
    <section>
      <Parallax
        blur={{ min: -1, max: 3 }}
        bgImage={img7}
        bgImageAlt='Vision Background'
        strength={500}
        className='mt-10'
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2
            className='text-4xl text-customBg font-bold text-center mt-16 mb-10'
            data-aos='zoom-in'
          >
            Why Choose Us
          </h2>

          {/* Section 2: Right Content, Left Image */}
          <div className='flex flex-col md:flex-row items-center p-8'>
            <div
              className='md:w-1/2 order-2 md:order-1'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <img
                src={img2}
                alt='Our Mission'
                className={`w-full h-full object-cover transition duration-500 ease-in-out ${
                  loadedImages.img2 ? "filter-none" : "filter blur-lg"
                }`}
                loading='lazy'
                onLoad={() => handleImageLoad("img2")}
              />
            </div>
            <div
              className='md:-ml-5 md:w-1/2 order-1 md:order-2 bg-customBg h-auto md:min-h-96 py-10 px-5 md:px-10 flex flex-col justify-center'
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <h3 className='text-3xl font-bold mb-4 text-white'>
                Our Mission
              </h3>
              <p className='text-lg text-white text-justify'>
                Our mission is to be the best Centre of excellence in learning
                and innovation driven by social sensitivity. By 2026 it will be
                amongst the top rated educational and professional studies,
                Immigrational worker, institute in the country. And we will
                provide training and consultancy services to suit the
                ever-changing needs of the society. To provide learning
                opportunities of quality and relevance which help all to attain
                their educational and professional objectives. To provide equal
                opportunities for all people whatever their gender, ethnic,
                origin or special.
              </p>
            </div>
          </div>

          {/* Section 3: Our Vision with Parallax */}
          <div className='flex flex-col md:flex-row items-center p-8'>
            <div
              className='md:-mr-5 md:w-1/2 bg-customBg h-auto sm:h-auto md:min-h-96 py-10 px-5 md:px-10 flex flex-col justify-center'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <h3 className='text-3xl font-bold mb-4 text-white'>Our Vision</h3>
              <p className='text-lg text-white text-justify'>
              Develop multifaced professional in diverse fields to understand the rapidly changing needs of the complex global economy and to prepare their mindset to be confident, creative and proactive. Develop sustainable network with high quality academicians and professionals in the corporate and social arena.
              </p>
            </div>
            <div
              className='md:w-1/2'
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <img
                src={img3}
                alt='Our Vision'
                className={`w-full h-full object-cover rounded-lg transition duration-500 ease-in-out ${
                  loadedImages.img3 ? "filter-none" : "filter blur-lg"
                }`}
                loading='lazy'
                onLoad={() => handleImageLoad("img3")}
              />
            </div>
          </div>

          {/* Section 4: Left Image, Right Content */}
          <div className='flex flex-col md:flex-row items-center p-8'>
            <div
              className='md:w-1/2 order-2 md:order-1'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <img
                src={img4}
                alt='Our Values'
                className={`w-full h-full object-cover rounded-lg transition duration-500 ease-in-out ${
                  loadedImages.img4 ? "filter-none" : "filter blur-lg"
                }`}
                loading='lazy'
                onLoad={() => handleImageLoad("img4")}
              />
            </div>
            <div
              className='md:-ml-5 md:w-1/2 order-1 md:order-2 bg-customBg h-auto md:min-h-96 py-10 px-5 md:px-10 flex flex-col justify-center'
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <h3 className='text-3xl font-bold mb-4 text-white'>Our Values</h3>
              <p className='text-lg text-white text-justify'>
                Integrity, excellence, and commitment are at the core of
                everything we do. We strive to provide the highest quality
                service to our students and partners.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default OurMissionVision;
