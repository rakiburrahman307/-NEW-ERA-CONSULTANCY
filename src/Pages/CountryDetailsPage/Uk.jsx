import { useState } from "react";
import { Helmet } from "react-helmet";
import "./style.css";
const uk = [
  {
    about:
      "The United Kingdom or Great Britain is composed of England, Wales, Scotland, and Northern Ireland territories and is located between the North Atlantic Ocean and the North Sea. The population is 62.8 million. The official language is English combined with local languages such as Scottish, Welsh, Irish, and Cornish. The UK is a key global player in political, economic, and military spheres. London is the Capital city and one of the most famous cities in the UK and also around the world. London is a very popular destination among tourists. With its history, culture, and modernity, London can amaze any person. The UK higher education system is one of the most prestigious in the world. Thousands of international students every year choose Great Britain as a study abroad country. The academic year in the UK begins in September and lasts till July. Undergraduate degree courses (Bachelors of Arts and Bachelors of Science) last 3 years. Master's degrees usually take a one-year course after completing an undergraduate degree. Course costs vary between 10,000 and 30,000 euros according to the degree and subject international students prefer to study.",
  },
  {
    education_system: [
      {
        description:
          "The education system in the UK is divided into four main parts: Primary Education, Secondary Education, Further Education, and Higher Education.\n\n Children in the UK have to legally attend Primary and Secondary education which runs from about 5 years old until the student is 16 years old. The education system in the UK is also split into 'Key Stages' which breaks down as follows.",
        point: [
          { key: "Key stage 1:", value: "5 to 7 years old" },
          { key: "Key stage 2:", value: "7 to 11 years old" },
          { key: "Key stage 3:", value: "11 to 14 years old" },
          { key: "Key stage 4:", value: "14 to 16 years old" },
        ],
        overView_title: "Our Overview of the Education System in the UK",
        overview: [
          {
            title: "Primary Education",
            primary_education:
              "Primary education begins in the UK at age 5 and continues until 11, comprising key stage one and two under the UK educational system.",
          },
          {
            title: "Secondary Education",
            secondary_education:
              "From age 11 to 16, students will enter secondary school for key stages three and four and start their move towards taking the GCSEs. Learn more about secondary education in the UK and what it will involve. Primary and secondary education is mandatory in the UK. After age 16, education is optional.",
          },
          {
            title: "Further Education",
            further_education:
              "Once a student finishes secondary education, they have the option to extend into further education to take their A-Levels, GNVQs, BTECs, or other such qualifications.",
          },
          {
            title: "Higher Education",
            higher_education:
              "Probably the most important subject area on this site, this explains more about the higher education system in the UK and how it works for international students. Most international students will enter directly into the UK higher education system after completing their home country's equivalent to the UK's 'Further Education'.",
          },
        ],
      },
    ],
  },
  {
    secondary_education:
      "The following checklist will be helpful while applying in the UK.",
    checklist: [
      { value: "Passport with validity of at least 6 months." },
      { value: "HSC or equivalent completed." },
      {
        value:
          "Graduation degree certificate/Provisional certificate (if applying for PG).",
      },
      { value: "IELTS/TOEFL/PTE score result." },
      { value: "Passport size white background photo." },
      { value: "CV (Curriculum Vitae)." },
      { value: "Statement of Purpose (SOP)." },
      { value: "Any other relevant certificate." },
    ],
    note: "Please contact us at New Era Consultancy personally for further assistance on the above and visa procedures.",
  },
  {
    study_cost:
      "The USA is home to the maximum number of top universities in the world. So, the cost of living and education expenses can vary.",
  },
  {
    living_cost:
      "For a single person, it costs around $12,240 per year to maintain their living expenses.",
  },
  {
    how_much_cost: [
      { key: "Undergraduate Bachelor Degree", value: "$15,000 to $33,000" },
      { key: "Postgraduate Master Degree", value: "$20,000 to $37,000" },
    ],
    note: "High-value courses like medicine and veterinary are not included.",
  },
  {
    details:
      "International students, you have to pay your tuition fee first before you study. Normally, all universities take about 50% in advance from the 1st year's tuition fee. Overseas Student Health Cover (OSHC) also has to be paid with the tuition fee. Other additional costs like course materials and access to institution facilities will be charged when you are at your designated university.",
  },
];

const Uk = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className='flex flex-col lg:flex-row items-start p-6 bg-gray-100 min-h-screen md:text-justify'>
      <Helmet>
        <title>UK Education Details</title>
        <meta
          name='description'
          content='Detailed information about education in the UK, including living costs, study costs, and admission requirements.'
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
          { id: "educationSystem", label: "Education System" },
          { id: "secondaryEducation", label: "Secondary Education" },
          { id: "studyCost", label: "Study Cost" },
          { id: "livingCost", label: "Living Cost" },
          { id: "howMuchCost", label: "Cost Details" },
          { id: "details", label: "In-depth Details" },
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
        {/* About UK */}
        {activeTab === "about" && (
          <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>About UK</h2>
            <p className='text-gray-700 text-lg'>{uk[0]?.about}</p>
          </section>
        )}

        {/* UK Education System */}
        {activeTab === "educationSystem" &&
          uk[1]?.education_system?.map((edu, index) => (
            <section
              key={index}
              className='mb-8 text-lg bg-white p-6 rounded-lg shadow-lg transition-transform transform'
            >
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                UK Education System
              </h2>
              <p className='mb-4 text-gray-700'>{edu?.description}</p>
              {edu?.point && (
                <ul className='list-disc list-inside mb-4 text-gray-600'>
                  {edu?.point?.map((item, i) => (
                    <li key={i} className='mb-2'>
                      <strong className='text-gray-900'>{item?.key}</strong>{" "}
                      {item?.value}
                    </li>
                  ))}
                </ul>
              )}
              <h3 className='text-2xl font-semibold mb-2 text-gray-800'>
                {edu?.overView_title}
              </h3>
              {edu?.overview && (
                <ul className='list-none list-inside text-justify'>
                  {edu?.overview?.map((item, i) => (
                    <div key={i}>
                      <h2 className='text-xl text-black font-bold'>
                        {Object.values(item)[0]}
                      </h2>
                      <li className='mb-5'>{Object.values(item)[1]}</li>
                    </div>
                  ))}
                </ul>
              )}
            </section>
          ))}

        {/* Secondary Education */}
        {activeTab === "secondaryEducation" && (
          <section className='mb-8 text-lg bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Secondary Education
            </h2>
            <p className='mb-4 text-gray-700'>{uk[2]?.secondary_education}</p>
            {uk[2]?.checklist && (
              <ul className='list-disc list-inside mb-4 text-gray-600'>
                {uk[2]?.checklist?.map((item, i) => (
                  <li key={i} className='mb-2'>
                    {item?.value}
                  </li>
                ))}
              </ul>
            )}
            {uk[2]?.note && (
              <p className='font-semibold text-gray-800'>
                <strong>Note:</strong> {uk[2]?.note}
              </p>
            )}
          </section>
        )}

        {/* Study Cost */}
        {activeTab === "studyCost" && (
          <section className='mb-8 text-lg bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Study Cost
            </h2>
            <p className='text-gray-700'>{uk[3]?.study_cost}</p>
          </section>
        )}

        {/* Living Cost */}
        {activeTab === "livingCost" && (
          <section className='mb-8 text-lg bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Living Cost
            </h2>
            <p className='text-gray-700'>{uk[4]?.living_cost}</p>
          </section>
        )}

        {/* How Much Does it Cost to Study? */}
        {activeTab === "howMuchCost" && (
          <section className='mb-8 text-lg bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              How Much Does it Cost to Study?
            </h2>
            {uk[5]?.how_much_cost?.map((item, i) => (
              <p key={i} className='mb-2 text-gray-700'>
                <strong className='text-gray-900'>{item?.key}:</strong>{" "}
                {item?.value}
              </p>
            ))}
            {uk[5]?.note && (
              <p className='font-semibold text-gray-800'>
                <strong>Note:</strong> {uk[5]?.note}
              </p>
            )}
          </section>
        )}

        {/* In-depth Details */}
        {activeTab === "details" && (
          <section className='mb-8 text-lg bg-white p-6 rounded-lg shadow-lg transition-transform transform'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              In-depth Details
            </h2>
            <p className='text-gray-700'>{uk[6]?.details}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Uk;
