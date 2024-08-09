import { Helmet } from "react-helmet";
const denmark = [
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
      "Czech Republic Flag",
    ],
  },
  {
    requirement: [
      {
        kye: "Undergraduate",
        value: "lorem Ipsum and others are the industry's standard dummy",
      },
      {
        kye: "Postgraduate",
        value: "lorem Ipsum and others are the industry's standard dummy",
      },
    ],
  },
  { living_cost: "is simply dummy text of the printing" },
  { study_cost: "is simply dummy text of the printing" },
];

const Denmark = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Denmark Education Details</title>
        <meta name="description" content="Explore comprehensive information about studying in Denmark, including admission requirements, facilities, and costs." />
      </Helmet>

      {/* About Section */}
      {denmark[0]?.about && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Denmark</h2>
          <p className="text-gray-700">{denmark[0].about}</p>
        </section>
      )}

      {/* Admission Requirement Section */}
      {denmark[1]?.admission_requirement && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Admission Requirements</h2>
          {denmark[1].admission_requirement.map((item, index) => (
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
      {denmark[2]?.facility && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Facilities</h2>
          <ul className="list-disc list-inside text-gray-600">
            {denmark[2].facility.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Requirement Section */}
      {denmark[3]?.requirement && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            {denmark[3].requirement.map((item, index) => (
              <li key={index} className="mb-2">
                <strong className="text-gray-900">{item.kye}</strong>: {item.value}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Living Cost Section */}
      {denmark[4]?.living_cost && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Living Cost</h2>
          <p className="text-gray-700">{denmark[4].living_cost}</p>
        </section>
      )}

      {/* Study Cost Section */}
      {denmark[5]?.study_cost && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Study Cost</h2>
          <p className="text-gray-700">{denmark[5].study_cost}</p>
        </section>
      )}
    </div>
  );
};

export default Denmark;
