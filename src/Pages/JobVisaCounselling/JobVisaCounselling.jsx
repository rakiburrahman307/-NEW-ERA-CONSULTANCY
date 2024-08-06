

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
  "Hotel - Room boy Attendant cleaner",
  "Dairy Farm",
  "Factory Packaging, food Packaging, Vegetable Picker",
  "Shopping Mall - cleaning",
  "Restaurant - Dishwasher, Kitchen Helper, Cleaner",
  "Construction Machine operator, Packaging Labour, Welder, Electrician",
  "Driving - Heavy driving (Lorry driver, Bus driver), Taxi Driver, Food delivery",
];

const documents = [
  "Valid Passport (Colour Copy)",
  "NID (Colour Copy)",
  "Educational Certificate",
  "Job experience (If you have)",
  "Police clearance",
];

const facilities = [
  "Better life style",
  "High Salary",
  "Permanent Residency with Spouse",
  "Life Security",
  "Free Health Care Service",
];

const JobVisaCounselling = () => {


  return (
    <section className="py-16 bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-customBg text-center mb-12" data-aos="zoom-in">
          Job Visa Counselling
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Countries List */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105" data-aos="fade-up" data-aos-duration="1500">
            <h3 className="text-3xl font-semibold text-white mb-4">Countries We Serve</h3>
            <ul className="list-decimal list-inside text-white space-y-2">
              {countries.map((country, index) => (
                <li key={index} className="transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out">
                  {country}
                </li>
              ))}
            </ul>
          </div>
          {/* Job Vacancies */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
            <h3 className="text-3xl font-semibold text-white mb-4">Job Vacancies</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              {jobVacancies.map((job, index) => (
                <li key={index} className="transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out">
                  {job}
                </li>
              ))}
            </ul>
          </div>
          {/* Required Documents */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
            <h3 className="text-3xl font-semibold text-white mb-4">Required Documents</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              {documents.map((document, index) => (
                <li key={index} className="transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out">
                  {document}
                </li>
              ))}
            </ul>
          </div>
          {/* Facilities */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-lg transition transform hover:shadow-2xl hover:scale-105" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
            <h3 className="text-3xl font-semibold text-white mb-4">Facilities for Immigration Workers</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              {facilities.map((facility, index) => (
                <li key={index} className="transition transform hover:scale-105 hover:text-yellow-200 duration-300 ease-in-out">
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobVisaCounselling;
