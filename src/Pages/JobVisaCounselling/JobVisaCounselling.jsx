const countries = [
  "Canada",
  "Australia",
  "Norway",
  "Hungary",
  "Serbia",
  "Kosovo",
  "Albania",
];

const jobVacancies = [
  "Hotel - Room Boy, Attendant, Cleaner",
  "Dairy Farm",
  "Factory Packaging, Food Packaging, Vegetable Picker",
  "Shopping Mall - Cleaning",
  "Restaurant - Dishwasher, Kitchen Helper, Cleaner",
  "Construction - Machine Operator, Packaging Labour, Welder, Electrician",
  "Driving - Heavy Driving (Lorry Driver, Bus Driver), Taxi Driver, Food Delivery",
];

const documents = [
  "Valid Passport (Colour Copy)",
  "NID (Colour Copy)",
  "Educational Certificate",
  "Job Experience (If Available)",
  "Police Clearance",
];

const facilities = [
  "Better Lifestyle",
  "High Salary",
  "Permanent Residency with Spouse",
  "Life Security",
  "Free Health Care Service",
];

const JobVisaCounselling = () => {
  return (
    <section className='py-16 bg-gradient-to-r from-slate-500 to-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1
          className='text-3xl sm:text-5xl font-extrabold text-customBg text-center mb-12'
          data-aos='zoom-in'
        >
          Job Visa Counselling Services
        </h1>
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Countries List */}
          <article
            className='bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            <h2 className='text-3xl font-semibold text-white mb-4'>
              Countries We Serve
            </h2>
            <ul className='list-decimal list-inside text-white space-y-2'>
              {countries.map((country, index) => (
                <li
                  key={index}
                  className='transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out'
                >
                  {country}
                </li>
              ))}
            </ul>
          </article>
          {/* Job Vacancies */}
          <article
            className='bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1500'
          >
            <h2 className='text-3xl font-semibold text-white mb-4'>
              Job Vacancies
            </h2>
            <ul className='list-disc list-inside text-white space-y-2'>
              {jobVacancies.map((job, index) => (
                <li
                  key={index}
                  className='transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out'
                >
                  {job}
                </li>
              ))}
            </ul>
          </article>
          {/* Required Documents */}
          <article
            className='bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105'
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-duration='1500'
          >
            <h2 className='text-3xl font-semibold text-white mb-4'>
              Required Documents
            </h2>
            <ul className='list-disc list-inside text-white space-y-2'>
              {documents.map((document, index) => (
                <li
                  key={index}
                  className='transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out'
                >
                  {document}
                </li>
              ))}
            </ul>
          </article>
          {/* Facilities */}
          <article
            className='bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105'
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='1500'
          >
            <h2 className='text-3xl font-semibold text-white mb-4'>
              Facilities for Immigration Workers
            </h2>
            <ul className='list-disc list-inside text-white space-y-2'>
              {facilities.map((facility, index) => (
                <li
                  key={index}
                  className='transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out'
                >
                  {facility}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default JobVisaCounselling;
