import { useState } from "react";
import { Helmet } from "react-helmet";

const denmark = [
  {
    about:
      "In Denmark, Old-World Nordic charm meets an avowedly forward-looking society. The nation regularly ranks on lists of most livable, safest and happiest places on earth thanks to its high quality of life and per capita income, as well as its advanced education, health care and civil liberties. Undertaking an education in Denmark places you right in the center of this socially developed utopia.",
  },
  {
    admission_requirement: [
      {
        description:
          "The following checklist will be helpful while applying in Denmark:",
      },
      {
        point: [
          {
            value:
              "Valid passport for at least 6 months from the intended date of travel.",
          },
          { value: "Recent photograph." },
          { value: "Receipt for case order ID and embassy fee payment." },
          { value: "Offer letter from University." },
          { value: "Language proficiency certificate." },
          { value: "Job experience letter." },
          { value: "European standard CV." },
          { value: "SOP." },
          { value: "Sworn declaration." },
        ],
      },
    ],
  },
  {
    facility: [
      "No bank statement needed for single applicant. But if applicant takes spouse and baby then bank statement will be needed.",
      "Many options to study in English. Universities in Denmark offer many degree courses taught in English. There are about 1,000 English-taught programs offered by universities in the country. So, the choice is vast!",
      "Employment opportunities! Denmark offers many opportunities to highly skilled professionals and graduates.",
      "Free healthcare.",
      "Ease of access to Europe.",
    ],
  },
  {
    requirement: [
      {
        key: "Undergraduate",
        value:
          "GPA 3.80/5.00 on HSC. Language Proficiency Certificate IELTS: 6.00 or equivalent.",
      },
      {
        key: "Postgraduate",
        value: "CGPA 2.50/4.00 IELTS: 6.50 or equivalent.",
      },
    ],
  },
  {
    living_cost:
      "For a single person it costs around 9,600 EUR to 14,400 EUR per year to maintain their living expenses.",
  },
  {
    study_cost:
      "Outside the EU/EEA student should expect tuition fees ranging from 6,000 to 9,000 EUR per year.",
  },
];

const Denmark = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className='flex flex-col lg:flex-row items-start p-6 bg-gray-100 min-h-screen md:text-justify'>
      <Helmet>
        <title>Denmark Education Details</title>
        <meta
          name='description'
          content='Explore comprehensive information about studying in Denmark, including admission requirements, facilities, and costs.'
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
        {/* About Denmark */}
        {activeTab === "about" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              About Denmark
            </h2>
            <p className='text-gray-700 text-lg'>{denmark[0].about}</p>
          </section>
        )}

        {/* Admission Requirements */}
        {activeTab === "admission" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Admission Requirements
            </h2>
            {denmark[1].admission_requirement.map((item, index) => (
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
              {denmark[2].facility.map((item, index) => (
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
              {denmark[3].requirement.map((item, index) => (
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
            <p className='text-gray-700 text-lg'>{denmark[4].living_cost}</p>
          </section>
        )}

        {/* Study Cost */}
        {activeTab === "studyCost" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Study Cost
            </h2>
            <p className='text-gray-700 text-lg'>{denmark[5].study_cost}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Denmark;
