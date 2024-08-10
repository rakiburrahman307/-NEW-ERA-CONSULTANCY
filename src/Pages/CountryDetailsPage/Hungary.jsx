import { Helmet } from 'react-helmet';

const hungary = [
  {
    about: "Hungary is located in Central/Eastern Europe bordering Austria in the west and Romania in the East. Budapest is the capital city of Hungary. Dozens of universities across the country offer programs that are fully taught in English. There are hundreds of study programs available for international students. If you are looking for high-quality education, you have come to the right place. Hungarian universities have spawned many smart minds, including well-renowned scientists. Hungary is the best option for Bangladeshi students."
  },
  {
    admission_requirement: [
      {
        description: "The following checklist will be helpful while applying in Hungary:"
      },
      {
        point: [
          { value: "Passport" },
          { value: "An up-to-date CV" },
          { value: "All academic certificates & mark sheets" },
          { value: "6 copies of passport size photos" },
          { value: "Recommendation letter" },
          { value: "Language proficiency certificate" },
          { value: "Bank statement & solvency certificate" }
        ]
      }
    ]
  },
  {
    facility: [
      "Hungarian universities charge tuition fees, but compared to other countries in Europe, they are very affordable.",
      "Minimum IELTS requirement.",
      "As a student, you can work in Hungary (20 hours per week).",
      "Hungary is becoming an increasingly popular host country for international students, partly due to the Hungarian Scholarship.",
      "The cost of living in Hungary is among the lowest in Europe."
    ]
  },
  {
    requirement: [
      {
        key: "Undergraduate",
        value: "GPA 3.80/5.00. Language Proficiency Certificate IELTS - Minimum 5.5 or equivalent."
      },
      {
        key: "Postgraduate",
        value: "CGPA 2.50/4.00. Language Proficiency Certificate IELTS - Minimum 5.5 or equivalent."
      }
    ]
  },
  {
    living_cost: "For a single person, it costs around 500 to 900 EUR per month to maintain their living expenses."
  },
  {
    study_cost: [
      {
        key: "Undergraduate Bachelor Degree",
        value: "4000 to 6000 EUR per year"
      },
      {
        key: "Postgraduate Master Degree",
        value: "5000 to 8000 EUR per year"
      }
    ]
  }
];

const Hungary = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-justify">
      <Helmet>
        <title>Hungary Education Details</title>
        <meta name="description" content="Comprehensive information about studying in Hungary, including admission requirements, facilities, living, and study costs." />
      </Helmet>

      {/* About Section */}
      {hungary[0]?.about && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Hungary</h2>
          <p className="text-gray-700">{hungary[0].about}</p>
        </section>
      )}

      {/* Admission Requirement Section */}
      {hungary[1]?.admission_requirement && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Admission Requirements</h2>
          {hungary[1].admission_requirement.map((item, index) => (
            <div key={index} className="mb-4">
              {item.description && <p className="text-gray-700 mb-2">{item.description}</p>}
              {item.point && (
                <ul className="list-disc list-inside text-gray-600">
                  {item.point.map((point, i) => (
                    <li key={i} className="mb-1">{point.value}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Facility Section */}
      {hungary[2]?.facility && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Facilities</h2>
          <ul className="list-disc list-inside text-gray-600">
            {hungary[2].facility.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Requirement Section */}
      {hungary[3]?.requirement && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            {hungary[3].requirement.map((item, index) => (
              <li key={index} className="mb-2">
                <strong className="text-gray-900">{item.key}</strong>: {item.value}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Living Cost Section */}
      {hungary[4]?.living_cost && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Living Cost</h2>
          <p className="text-gray-700">{hungary[4].living_cost}</p>
        </section>
      )}

      {/* Study Cost Section */}
      {hungary[5]?.study_cost && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Study Cost</h2>
          <ul className="list-disc list-inside text-gray-600">
            {hungary[5].study_cost.map((item, index) => (
              <li key={index} className="mb-2">
                <strong className="text-gray-900">{item.key}</strong>: {item.value}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Hungary;
