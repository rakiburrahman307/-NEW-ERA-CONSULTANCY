import { useState } from "react";
import { Helmet } from "react-helmet";

const hungary = [
  {
    about:
      "Hungary is located in Central/Eastern Europe bordering Austria in the west and Romania in the East. Budapest is the capital city of Hungary. Dozens of universities across the country offer programs that are fully taught in English. There are hundreds of study programs available for international students. If you are looking for high-quality education, you have come to the right place. Hungarian universities have spawned many smart minds, including well-renowned scientists. Hungary is the best option for Bangladeshi students.",
  },
  {
    admission_requirement: [
      {
        description:
          "The following checklist will be helpful while applying in Hungary:",
      },
      {
        point: [
          { value: "Passport" },
          { value: "An up-to-date CV" },
          { value: "All academic certificates & mark sheets" },
          { value: "6 copies of passport size photos" },
          { value: "Recommendation letter" },
          { value: "Language proficiency certificate" },
          { value: "Bank statement & solvency certificate" },
        ],
      },
    ],
  },
  {
    facility: [
      "Hungarian universities charge tuition fees, but compared to other countries in Europe, they are very affordable.",
      "Minimum IELTS requirement.",
      "As a student, you can work in Hungary (20 hours per week).",
      "Hungary is becoming an increasingly popular host country for international students, partly due to the Hungarian Scholarship.",
      "The cost of living in Hungary is among the lowest in Europe.",
    ],
  },
  {
    requirement: [
      {
        key: "Undergraduate",
        value:
          "GPA 3.80/5.00. Language Proficiency Certificate IELTS - Minimum 5.5 or equivalent.",
      },
      {
        key: "Postgraduate",
        value:
          "CGPA 2.50/4.00. Language Proficiency Certificate IELTS - Minimum 5.5 or equivalent.",
      },
    ],
  },
  {
    living_cost:
      "For a single person, it costs around 500 to 900 EUR per month to maintain their living expenses.",
  },
  {
    study_cost: [
      {
        key: "Undergraduate Bachelor Degree",
        value: "4000 to 6000 EUR per year",
      },
      {
        key: "Postgraduate Master Degree",
        value: "5000 to 8000 EUR per year",
      },
    ],
  },
];

const Hungary = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className='flex flex-col lg:flex-row items-start p-6 bg-gray-100 min-h-screen md:text-justify'>
      <Helmet>
        <title>Hungary Education Details</title>
        <meta
          name='description'
          content='Explore comprehensive information about studying in Hungary, including admission requirements, facilities, and costs.'
        />
      </Helmet>

      {/* Tabs Navigation */}
      <div
        className='flex lg:flex-col overflow-x-auto w-full lg:overflow-visible lg:w-1/4 mb-4 lg:mb-0 lg:mr-3 space-x-3 lg:space-x-0 lg:space-y-2'
        role='tablist'
        aria-orientation='vertical'
      >
        {[
          { id: "about", label: "About" },
          { id: "admission", label: "Admission Requirements" },
          { id: "facility", label: "Facilities" },
          { id: "requirement", label: "Requirements" },
          { id: "livingCost", label: "Living Cost" },
          { id: "studyCost", label: "Study Cost" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "bg-customBg  text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            } py-2 px-4 rounded text-left whitespace-nowrap flex-shrink-0`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='flex-grow lg:w-3/4'>
        {/* About Hungary */}
        {activeTab === "about" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              About Hungary
            </h2>
            <p className='text-gray-700 text-lg'>{hungary[0].about}</p>
          </section>
        )}

        {/* Admission Requirements */}
        {activeTab === "admission" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Admission Requirements
            </h2>
            {hungary[1].admission_requirement.map((item, index) => (
              <div key={index} className='mb-4 text-lg'>
                {item.description && (
                  <p className='text-gray-700 mb-2'>{item.description}</p>
                )}
                {item.point && (
                  <ul className='list-disc list-inside text-gray-600'>
                    {item.point.map((point, i) => (
                      <li key={i} className='mb-1'>
                        {point.value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Facilities */}
        {activeTab === "facility" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Facilities
            </h2>
            <ul className='list-disc list-inside text-lg text-gray-600'>
              {hungary[2].facility.map((item, index) => (
                <li key={index} className='mb-2'>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Requirements */}
        {activeTab === "requirement" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Requirements
            </h2>
            <ul className='list-disc list-inside text-lg text-gray-600'>
              {hungary[3].requirement.map((item, index) => (
                <li key={index} className='mb-2'>
                  <strong className='text-gray-900'>{item.key}</strong>:{" "}
                  {item.value}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Living Cost */}
        {activeTab === "livingCost" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Living Cost
            </h2>
            <p className='text-gray-700 text-lg'>{hungary[4].living_cost}</p>
          </section>
        )}

        {/* Study Cost */}
        {activeTab === "studyCost" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Study Cost
            </h2>
            <ul className='list-disc list-inside text-lg text-gray-600'>
              {hungary[5].study_cost.map((item, index) => (
                <li key={index} className='mb-2'>
                  <strong className='text-gray-900'>{item.key}</strong>:{" "}
                  {item.value}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default Hungary;
