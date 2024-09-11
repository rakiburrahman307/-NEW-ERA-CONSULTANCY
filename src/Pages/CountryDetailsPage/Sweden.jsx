import { useState } from "react";
import { Helmet } from "react-helmet";

const sweden = [
  {
    about:
      "Sweden is known for its openness toward the international community and its education system is no exception. International students from all over the world study in Sweden, where there are over 1,000-degree programs taught entirely in English. Unlike many countries, Sweden gives their international students the right to work in Sweden during their studies. If you are interested in working in Sweden, The innovation capital of Europe. After you complete your studies, you can apply for time to search for employment even if you are not from an EU/EEA country.",
  },
  {
    admission_requirement: [
      {
        description:
          "The following checklist will be helpful while applying in Sweden:",
      },
      {
        point: [
          { value: "Valid Passport." },
          { value: "Application form." },
          { value: "Transcript and certificates." },
          { value: "Language proficiency certificates." },
          { value: "LOR" },
          { value: "Motivation letter" },
          { value: "CV" },
        ],
      },
      {
        note: "Please contact us at new era consultancy personally for further assistance on the above and visa procedure",
      },
    ],
  },
  {
    requirement: [
      {
        key: "Undergraduate",
        value:
          "GPA 3.80/5.00 on HSC. Language Proficiency Certificate IELTS: 6.00 or equivalent",
      },
      {
        key: "Postgraduate",
        value: "GPA 2.50/4.00",
      },
    ],
  },
  {
    facility: [
      "Many options to study in English. Universities in Sweden offer many degree courses taught in English. There are about 1,000 English taught programs offered by Universities in the country. So, the choice is vast!",
      "Sustainability is a priority.",
      "Perfect for outdoor lovers. Outdoor lovers, Sweden is the country for you. The most intrepid outdoor adventures out. There will also be pleased to know that wild camping is allowed in Sweden.",
      "Employment opportunities! Sweden offers many opportunities to highly skilled professionals and graduates. One of the most exciting sectors is that of tech startups.",
    ],
  },
  {
    living_costs:
      "For a single person it costs around SEK 8,000 to SEK 13,500 per month to maintain their living expenses",
  },
  {
    how_much_cost: [
      {
        key: "Undergraduate Bachelor Degree",
        value: "80,000 to 100,000 SEK per year.",
      },
      {
        key: "Post Graduate Masters Degree",
        value: "100,000 to 140,000 SEK per year.",
      },
    ],
    note: "High value courses like medicine and veterinary are not included.",
  },
];

const Sweden = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className='flex flex-col lg:flex-row items-start p-6 bg-gray-100 min-h-screen md:text-justify'>
      <Helmet>
        <title>Sweden Education Details</title>
        <meta
          name='description'
          content='Detailed information about education in Sweden, including admission requirements, living costs, and facilities.'
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
          { id: "studyCost", label: "Cost of Study" },
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
        {/* About Sweden */}
        {activeTab === "about" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              About Sweden
            </h2>
            <p className='text-gray-700 text-lg'>{sweden[0].about}</p>
          </section>
        )}

        {/* Admission Requirements */}
        {activeTab === "admission" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Admission Requirements
            </h2>
            {sweden[1].admission_requirement.map((item, index) => (
              <div key={index} className='mb-4 text-lg'>
                {item.description && (
                  <p className='text-gray-700 mb-2'>{item.description}</p>
                )}
                {item.point && (
                  <ul className='list-disc list-inside mb-2 text-gray-600'>
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
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>Facilities</h2>
            <ul className='list-disc list-inside text-lg text-gray-600'>
              {sweden[3].facility.map((item, index) => (
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
            <ul className='list-disc list-inside text-gray-600 text-lg'>
              {sweden[2].requirement.map((item, index) => (
                <li key={index} className='mb-2'>
                  <strong className='text-gray-900'>{item.key}</strong>{" "}
                  {item.value}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Living Cost */}
        {activeTab === "livingCost" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>Living Cost</h2>
            <p className='text-gray-700 text-lg'>{sweden[4].living_costs}</p>
          </section>
        )}

        {/* Cost of Study */}
        {activeTab === "studyCost" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              How Much Does It Cost to Study?
            </h2>
            <ul className='list-disc list-inside text-lg text-gray-600'>
              {sweden[5].how_much_cost.map((item, index) => (
                <li key={index} className='mb-2'>
                  <strong className='text-gray-900'>{item.key}</strong>{" "}
                  {item.value}
                </li>
              ))}
            </ul>
            {sweden[5]?.note && (
              <p className='font-semibold text-lg text-gray-800'>
                <strong>Note:</strong> {sweden[5].note}
              </p>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Sweden;
