import { useState } from "react";
import { Helmet } from "react-helmet";
import "./style.css";

const australia = [
  {
    about:
      "Did you know Australia is the worlds sixth largest country by total area and has the third highest number of international students in the world behind only UK and USA despite having a population of only 23 million! This isn’t surprising when you consider Australia has Seven of the top 100 Universities in the world! In-fact with over 22,000 courses, 1,100 institutions. Australia sits above the likes of Germany, The Netherland and Japan, ranking eight in the Universities 2012 U21 Ranking of National Higher Education Systems. Their Gross Domestic Product (GDP) $46,631 per capita and Gross National Product (GNP) $62,822 per capita.",
  },
  {
    why_choose_australia: [
      {
        key: "Top University",
        value:
          ": Most Universities are ranked high in the global University rankings.",
      },
      {
        key: "Field of Study",
        value:
          "Choose from a vast number of courses that suit you the most and enhance your career.",
      },
      {
        key: "Student Support",
        value:
          "All Universities provide excellent support for International students.",
      },
      {
        key: "Great Lifestyle",
        value:
          "Experience living in the most livable and vibrant cities in the world.",
      },
      {
        key: "Placement",
        value:
          "Graduates from Australian Universities are placed in the most renowned organizations in the world.",
      },
      {
        key: "Successful Alumni",
        value:
          "Students have achieved good success after getting their Australian degree.",
      },
    ],
  },
  {
    why_study_australia: [
      "Australia has the third longest number of International students in the English-speaking world after the USA and UK.",
      "Australia qualifications and institutions are recognized globally for their high quality and excellence. Graduation from Australia are very successful in finding jobs and hold prominent positions worldwide.",
      "More than 2,80,000 international students from over 195 countries are studying at Australian Universities.",
      "Many Australian Universities concentrate on traditional areas of learning and inquiry. While others are more vocational and applied in focus. All, to some extent combine tuition with research.",
    ],
  },
  {
    visa_requirement: [
      "Valid Passport",
      "Letter of Offer",
      "ECOE",
      "SOP",
      "Passport size photograph",
      "Academic documents (IELTS/TOEFL/IBT/PTE)",
      "Work Experience (if applicable)",
      "Financial requirements",
      "Financial documents for Australian student's visa.",
      {
        note: "Please contact us at New Era Consultancy personally for further assistance on the above and visa procedure.",
      },
    ],
  },
  {
    other: [
      "20 hours per week.",
      "Full time during study break.",
      "Pro-study work rights.",
      "PHD graduates to receive four years post-study work rights.",
      "Per year living for a single student is AUD $29,710.",
    ],
  },
];

const Australia = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className='bg-gray-100 min-h-screen text-start md:text-justify'>
      <Helmet>
        <title>Study in Australia</title>
        <meta
          name='description'
          content='Discover why studying in Australia is a great choice, including visa requirements, benefits, and more.'
        />
      </Helmet>

      <div className='flex flex-col lg:flex-row items-start p-6'>
        {/* Tabs Navigation */}
        <div
          className='flex lg:flex-col w-full overflow-x-auto lg:overflow-visible lg:w-1/4 mb-4 lg:mb-0 lg:mr-3 space-x-3 lg:space-x-0 lg:space-y-2'
          role='tablist'
          aria-orientation='vertical'
        >
          {[
            { id: "about", label: "About" },
            { id: "whyChoose", label: "Why Choose Australia" },
            { id: "whyStudy", label: "Why Study in Australia" },
            { id: "visa", label: "Visa Requirements" },
            { id: "other", label: "Other" },
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
          {/* About Australia */}
          {activeTab === "about" && australia[0]?.about && (
            <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                About Australia
              </h2>
              <p className='text-gray-700 text-lg'>{australia[0].about}</p>
            </section>
          )}

          {/* Why Choose Australia */}
          {activeTab === "whyChoose" && australia[1]?.why_choose_australia && (
            <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Why Choose Australia
              </h2>
              <ul className='list-disc text-lg list-inside text-gray-600'>
                {australia[1].why_choose_australia.map((item, index) => (
                  <li key={index} className='mb-2'>
                    <strong className='text-gray-800'>{item.key}</strong>{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Why Study in Australia */}
          {activeTab === "whyStudy" && australia[2]?.why_study_australia && (
            <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Why Study in Australia
              </h2>
              <ul className='list-disc text-lg list-inside text-gray-600'>
                {australia[2].why_study_australia.map((item, index) => (
                  <li key={index} className='mb-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Visa Requirements */}
          {activeTab === "visa" && australia[3]?.visa_requirement && (
            <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Visa Requirements
              </h2>
              <ul className='list-disc text-lg list-inside text-gray-600'>
                {australia[3].visa_requirement.map((item, index) =>
                  typeof item === "string" ? (
                    <li key={index} className='mb-2'>
                      {item}
                    </li>
                  ) : (
                    <li key={index} className='mb-2'>
                      <strong className='text-gray-800'>Note:</strong>{" "}
                      {item.note}
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

          {/* Other Information */}
          {activeTab === "other" && australia[4]?.other && (
            <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Our Facilities & Requirements in Australia
              </h2>
              <ul className='list-disc text-lg list-inside text-gray-600'>
                <p className='font-semibold mb-2'>Work Regulations:</p>
                {australia[4].other.map((item, index) => (
                  <li key={index} className='mb-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Australia;
