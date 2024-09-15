import { TypeAnimation } from 'react-type-animation';

const OurObjective = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-500 to-slate-800 max-w-[1920px] mx-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl text-center leading-normal font-extrabold tracking-tight text-gray-100 mb-12" data-aos="zoom-in">
          Our <span className='text-customBg'>Objective</span>
        </h2>
        <div className="bg-gradient-to-l from-slate-700 to-slate-900 p-8 rounded-lg shadow-lg relative min-h-[600px] md:min-h-[550px]">
          <TypeAnimation
            style={{ whiteSpace: 'pre-line', display: 'block' }}
            sequence={[
              `The key objective of New Era Consultancy is to be an internationally recognized consultancy firm that prepares students, workers, and visitors to choose their right path in pursuing higher studies around the world.\n\nOur aim is to provide an excellent service at a reasonable cost within an agreed time scale.\n\nWe aim to provide cost predictability whenever it is possible so that our clients can prepare a budget for any given transaction.\n\nWe do not believe that our clients should be expected to pay disproportionately high charging rates for any matter.\n\nTherefore, we charge very competitive rates which reflect the complexity and size of the matter involved.\n\nWe believe in maintaining the highest level of transparency while we work for you.\n\nWe aim to provide tailor-made solutions to cater to individual needs, meet their immigration objectives, and help them make more informed decisions.\n\nOur goal is to provide you with professional, competent, and experienced services which will help you accomplish your personal goals.`,
              10000,
              '',
            ]}
            wrapper="article"
            speed={80}
            cursor={false}
            repeat={Infinity}
            deletionSpeed={90}
            omitDeletionAnimation={true}
            className="text-xl text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default OurObjective;
