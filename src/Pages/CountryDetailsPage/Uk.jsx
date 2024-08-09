import { Helmet } from "react-helmet";
const uk = [
  { about: "https://source.unsplash.com/300x300/?uk" },
  {
    education_system: [
      {
        description:
          "lorem ipsum d tempor inv sapiente vel aug recus dshd about tempor",
        point: [
          { key: "Key stage 1 :", value: "5 to 7 years old" },
          { key: "Key stage 2 :", value: "7 to 11 years old" },
          { key: "Key stage 3 :", value: "11 to 14 years old" },
          { key: "Key stage 4 :", value: "14 to 16 years old" },
        ],
        overView_title: "lorem ipsum dolor sit amet, consect",
        overview: [
          {
            primary_education:
              "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          },
          {
            secondary_education:
              "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          },
          {
            further_education:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been a type specimen book",
          },
          {
            higher_education:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          },
        ],
      },
    ],
  },
  {
    admission_requirement: [
      {
        description:
          "lorem Ipsum is simply dummy text of the printing and typesetting industry",
        point: [
          { value: "lorem Ipsum and others are the industry's standard dummy" },
          { value: "lorem Ipsum and others are the industry's standard dummy" },
        ],
        note: "please contact us at new era consultancy personally for further assistance on the above and visa procedure",
      },
    ],
  },
  {
    living_cost:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    study_cost: [
      {
        description:
          "lorem Ipsum is simply dummy text of the printing and typesetting industry",
        question:
          "lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
        point: [
          { key: "Key stage 1 :", value: "5 to 7 years old" },
          { key: "Key stage 2 :", value: "7 to 11 years old" },
        ],
        note: "High value courses like medical and veterinary are not included",
      },
    ],
  },
  {
    details:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
];

const Uk = () => {
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <Helmet>
        <title>UK Education Details</title>
        <meta
          name='description'
          content='Detailed information about education in the UK, including living costs, study costs, and admission requirements.'
        />
      </Helmet>

      {/* About Section */}
      {uk[0].about && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-blue-600'>About</h2>
          <img
            src={uk[0].about}
            alt='UK'
            className='w-64 h-64 object-cover rounded-lg border-2 border-gray-300'
          />
        </section>
      )}

      {/* Education System Section */}
      {uk[1].education_system &&
        uk[1].education_system.map((edu, index) => (
          <section
            key={index}
            className='mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'
          >
            <h2 className='text-2xl font-bold mb-4 text-green-600'>
              Education System
            </h2>
            <p className='mb-4 text-gray-700'>{edu.description}</p>
            {edu.point && (
              <ul className='list-disc list-inside mb-4 text-gray-600'>
                {edu.point.map((item, i) => (
                  <li key={i} className='mb-2'>
                    <strong className='text-gray-900'>{item.key}</strong>{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            )}
            <h3 className='text-xl font-semibold mb-2 text-yellow-600'>
              {edu.overView_title}
            </h3>
            {edu.overview && (
              <ul className='list-disc list-inside text-gray-600'>
                {edu.overview.map((item, i) => (
                  <li key={i} className='mb-2'>
                    {Object.values(item)[0]}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

      {/* Admission Requirements Section */}
      {uk[2].admission_requirement &&
        uk[2].admission_requirement.map((req, index) => (
          <section
            key={index}
            className='mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'
          >
            <h2 className='text-2xl font-bold mb-4 text-purple-600'>
              Admission Requirements
            </h2>
            <p className='mb-4 text-gray-700'>{req.description}</p>
            {req.point && (
              <ul className='list-disc list-inside mb-4 text-gray-600'>
                {req.point.map((item, i) => (
                  <li key={i} className='mb-2'>
                    {item.value}
                  </li>
                ))}
              </ul>
            )}
            {req.note && (
              <p className='font-semibold text-gray-800'>
                <strong>Note:</strong> {req.note}
              </p>
            )}
          </section>
        ))}

      {/* Living Cost Section */}
      {uk[3].living_cost && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-red-600'>Living Cost</h2>
          <p className='text-gray-700'>{uk[3].living_cost}</p>
        </section>
      )}

      {/* Study Cost Section */}
      {uk[4].study_cost &&
        uk[4].study_cost.map((cost, index) => (
          <section
            key={index}
            className='mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'
          >
            <h2 className='text-2xl font-bold mb-4 text-teal-600'>
              Study Cost
            </h2>
            <p className='mb-4 text-gray-700'>{cost.description}</p>
            {cost.question && (
              <p className='font-semibold text-gray-800'>
                <strong>Question:</strong> {cost.question}
              </p>
            )}
            {cost.point && (
              <ul className='list-disc list-inside mb-4 text-gray-600'>
                {cost.point.map((item, i) => (
                  <li key={i} className='mb-2'>
                    <strong className='text-gray-900'>{item.key}</strong>{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            )}
            {cost.note && (
              <p className='font-semibold text-gray-800'>
                <strong>Note:</strong> {cost.note}
              </p>
            )}
          </section>
        ))}

      {/* Details Section */}
      {uk[5].details && (
        <section className='mb-8 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <h2 className='text-2xl font-bold mb-4 text-indigo-600'>Details</h2>
          <p className='text-gray-700'>{uk[5].details}</p>
        </section>
      )}
    </div>
  );
};

export default Uk;
