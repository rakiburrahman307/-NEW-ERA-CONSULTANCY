
import { TypeAnimation } from 'react-type-animation';

const OurObjective = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-customBg text-center mb-12" data-aos="zoom-in">
          Our Objective
        </h2>
        <div className="bg-gradient-to-l from-slate-700 to-slate-900 p-8 rounded-lg shadow-lg relative">
          <TypeAnimation
            style={{ whiteSpace: 'pre-line', height: '450px', display: 'block' }}
            sequence={[
              `The key objective of New Era Consultancy is to be an internationally recognized consultancy firm that prepares students, workers, and visitors to "Choose their right path" in pursuing higher studies abroad.\n\nOur aim is to provide excellent service at a reasonable cost, within an agreed time scale.\n\nWe aim to provide cost predictability whenever possible so that our clients can prepare a budget for any given transaction.\n\nWe do not believe that our clients should be expected to pay disproportionately high charging rates for any matter.\n\nTherefore, we charge very competitive rates which reflect the complexity and size of the matter involved.\n\nWe believe in maintaining the highest level of transparency while we work for you.\n\nOur goal is to provide tailor-made solutions to cater to individual needs, meet immigration objectives, and help clients make informed decisions.\n\nWe aim to provide professional, competent, and experienced services which will help you accomplish your personal goals.`,
              10000,
              '',
            ]}
            wrapper="p"
            speed={80}
            cursor={false}
            repeat={Infinity}
            deletionSpeed={90}
            omitDeletionAnimation={true}
            className="text-lg text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default OurObjective;
