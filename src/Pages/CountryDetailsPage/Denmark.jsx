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
  return (
    <div className='p-6 bg-gray-100 min-h-screen text-justify'>
      <Helmet>
        <title>Denmark Education Details</title>
        <meta
          name='description'
          content='Explore comprehensive information about studying in Denmark, including admission requirements, facilities, and costs.'
        />
      </Helmet>

      {/* About Section */}
      {denmark[0]?.about && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-blue-600'>
            About Denmark
          </h2>
          <p className='text-gray-700 text-lg'>{denmark[0].about}</p>
        </section>
      )}

      {/* Admission Requirement Section */}
      {denmark[1]?.admission_requirement && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-green-600'>
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

      {/* Facility Section */}
      {denmark[2]?.facility && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-teal-600'>Facilities</h2>
          <ul className='list-disc list-inside text-lg text-gray-600'>
            {denmark[2].facility.map((item, index) => (
              <li key={index} className='mb-2'>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Requirement Section */}
      {denmark[3]?.requirement && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-purple-600'>
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

      {/* Living Cost Section */}
      {denmark[4]?.living_cost && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-red-600'>Living Cost</h2>
          <p className='text-gray-700 text-lg'>{denmark[4].living_cost}</p>
        </section>
      )}

      {/* Study Cost Section */}
      {denmark[5]?.study_cost && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-indigo-600'>
            Study Cost
          </h2>
          <p className='text-gray-700 text-lg'>{denmark[5].study_cost}</p>
        </section>
      )}
    </div>
  );
};

export default Denmark;
