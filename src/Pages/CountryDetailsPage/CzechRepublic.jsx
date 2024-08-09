import { Helmet } from "react-helmet";

const czech_republic = [
  { about: "lorem Ipsum and others are the industry's standard dummy" },
  {
    admission_requirement: [
      {
        description:
          "lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        point: [
          {
            value: "lorem Ipsum and others are the industry's standard dummy",
          },
          {
            value: "lorem Ipsum and others are the industry's standard dummy",
          },
          {
            value: "lorem Ipsum and others are the industry's standard dummy",
          },
        ],
      },
    ],
  },
  {
    facility: [
      "Czech Republic Flag",
      "Czech Republic Flag",
      "Czech Republic Flag",
      "Czech Republic Flag",
    ],
  },
  { living_cost: "Czech Republic" },
  { study_cost: "Czech Republic" },
];



const CzechRepublic = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Czech Republic Education Details</title>
        <meta name="description" content="Comprehensive information about studying in Czech Republic including admission requirements, facilities, and costs." />
      </Helmet>

      {/* About Section */}
      {czech_republic[0]?.about && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Czech Republic</h2>
          <p className="text-gray-700">{czech_republic[0].about}</p>
        </section>
      )}

      {/* Admission Requirement Section */}
      {czech_republic[1]?.admission_requirement && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Admission Requirements</h2>
          {czech_republic[1].admission_requirement.map((item, index) => (
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
      {czech_republic[2]?.facility && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Facilities</h2>
          <ul className="list-disc list-inside text-gray-600">
            {czech_republic[2].facility.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Living Cost Section */}
      {czech_republic[3]?.living_cost && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Living Cost</h2>
          <p className="text-gray-700">{czech_republic[3].living_cost}</p>
        </section>
      )}

      {/* Study Cost Section */}
      {czech_republic[4]?.study_cost && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Study Cost</h2>
          <p className="text-gray-700">{czech_republic[4].study_cost}</p>
        </section>
      )}
    </div>
  );
};

export default CzechRepublic;
  