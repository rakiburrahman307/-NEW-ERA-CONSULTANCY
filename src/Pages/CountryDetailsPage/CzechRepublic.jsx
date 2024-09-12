import { useState } from "react";
import { Helmet } from "react-helmet";
import "./style.css";
const czech_republic = [
  {
    about:
      "If you are looking for a unique European study abroad experience, look no further than the Czech Republic. Known for its impressive castles, vast selection of native beers, medieval old towns, and beautiful landscapes, the Czech Republic combines the best of East and West Europe to create its own unique flair. Popular study abroad cities in the Czech Republic include the capital Prague, Liberec, Brno, and Olomouc. However, with 61 higher education institutions located in more than 20 towns across the country, there are many other fascinating locations to choose from.",
  },
  {
    admission_requirement: [
      {
        description:
          "The following checklist will be helpful while applying in the Czech Republic:",
      },
      {
        point: [
          { value: "Passport with an expiry date beyond 12 months" },
          { value: "Offer letter from the University" },
          { value: "Proof of Accommodation" },
          { value: "Health Insurance" },
          { value: "All academic certificates & mark sheets" },
          { value: "6 copies of passport size photos" },
          { value: "Language proficiency certificate" },
          { value: "Bank statement & solvency certificate" },
        ],
      },
    ],
  },
  {
    facility: [
      {
        description:
          "Many options to study in English Universities in Czech Republic offer many degree courses taught in English. There are about 1,000 English-taught programs offered by universities in the country. So, the choice is vast!",
      },
      {
        title: "Academic Excellence",
        value:
          "The Czech Republic has a long tradition of academic excellence with several universities consistently ranking among the top in the world.",
      },
      {
        title: "Diversity and Cultural Experience",
        value:
          "The Czech Republic is home to a diverse community of students from around the world, offering ample opportunities for cultural exchange and networking.",
      },
      {
        title: "Accommodation",
        points: [
          "Many Czech universities offer affordable on-campus housing options for international students.",
          "Cheapest living cost.",
          "Health insurance needed for international students in the Czech Republic.",
          "You can work without a work permit (20 hours per week).",
          "Language proficiency certificate: TOEFL- 90, IELTS - 6.00 minimum or equivalent.",
        ],
      },
    ],
  },
  {
    living_cost:
      "For a single person it cost around 300 to 650 EUR per month to maintain their living expenses.",
  },
  {
    study_cost:
      "Tuition fees in Czechia for undergraduate and post graduate courses will be between 2,000 EUR to 10,000 EUR ",
  },
];

const CzechRepublic = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className='flex flex-col lg:flex-row items-start p-6 bg-gray-100 min-h-screen md:text-justify'>
      <Helmet>
        <title>Czech Republic Education Details</title>
        <meta
          name='description'
          content='Comprehensive information about studying in the Czech Republic, including admission requirements, facilities, and costs.'
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
          { id: "facility", label: "Facilities & Requirements" },
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
        {/* About Czech Republic */}
        {activeTab === "about" && czech_republic[0]?.about && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              About Czech Republic
            </h2>
            <p className='text-gray-700 text-lg'>{czech_republic[0].about}</p>
          </section>
        )}

        {/* Admission Requirements */}
        {activeTab === "admission" &&
          czech_republic[1]?.admission_requirement && (
            <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Admission Requirements
              </h2>
              {czech_republic[1].admission_requirement.map((item, index) => (
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

        {/* Facilities & Requirements */}
        {activeTab === "facility" && czech_republic[2]?.facility && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Other Facility & Requirements
            </h2>
            {czech_republic[2].facility.map((item, index) => (
              <div key={index} className='mb-4 text-lg'>
                <p>{item?.description}</p>
                <h3 className='text-xl font-bold text-gray-800'>
                  {item?.title}
                </h3>
                <p className='text-gray-700 mb-2'>{item.value}</p>
                {item.points && (
                  <ul className='list-disc list-inside text-gray-600'>
                    {item.points.map((point, i) => (
                      <li key={i} className='mb-1'>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Living Cost */}
        {activeTab === "livingCost" && czech_republic[3]?.living_cost && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Living Cost
            </h2>
            <p className='text-gray-700 text-lg'>
              {czech_republic[3].living_cost}
            </p>
          </section>
        )}

        {/* Study Cost */}
        {activeTab === "studyCost" && czech_republic[4]?.study_cost && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Study Cost
            </h2>
            <p className='text-gray-700 text-lg'>
              {czech_republic[4].study_cost}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default CzechRepublic;
