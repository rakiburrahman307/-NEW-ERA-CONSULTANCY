const countries = [
  "USA",
  "UK",
  "Turkiye",
  "Canada",
  "Switzerland",
  "Singapore",
  "Malaysia",
  "Dubai",
  "UAE",
  "Saudi Arabia",
  "Egypt",
  "Japan",
  "Sweden",
  "Australia",
  "China",
  "Germany",
  "Thailand",
  "Vietnam",
];

const documents = [
  "Valid Passport for at least 6 months from the intended date of travel.",
  "NID",
  "Recent Photographs",
  "Bank Statement",
  "Tax Return",
  "Asset Valuation",
  "Visiting Card",
  "Invitation Letter",
];

const TouristVisaProcessing = () => {
  return (
    <section className='py-16 bg-gradient-to-r from-slate-500 to-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1
          className='text-3xl sm:text-5xl font-extrabold text-customBg text-center mb-12'
          data-aos='zoom-in'
        >
          Tourist Visa Processing
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
          {/* Required Documents */}
          <article
            className='bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105'
            data-aos='fade-up'
            data-aos-delay='200'
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
        </div>
      </div>
    </section>
  );
};

export default TouristVisaProcessing;
