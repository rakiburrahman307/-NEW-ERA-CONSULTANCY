import { Helmet } from 'react-helmet';
const hungary = [
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
    { living_cost: "Czech Republic" },
    {
      study_cost: [
        {
          kye: "Undergraduate Bachelor Degree",
          value: "lorem Ipsum and others are the industry's standard dummy",
        },
        {
          kye: "Postgraduate Master Degree",
          value: "lorem Ipsum and others are the industry's standard dummy",
        },
      ],
    },
  ];
  const Hungary = () => {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <Helmet>
          <title>Hungary Education Details</title>
          <meta name="description" content="Comprehensive information about studying in Hungary, including admission requirements, facilities, living and study costs." />
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
                  <strong className="text-gray-900">{item.kye}</strong>: {item.value}
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
                  <strong className="text-gray-900">{item.kye}</strong>: {item.value}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  };
  
  export default Hungary;