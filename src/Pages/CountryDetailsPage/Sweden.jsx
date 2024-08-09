import { Helmet } from 'react-helmet';
const sweden = [
    { about: "lorem Ipsum and others are the industry's standard dummy" },
    {
      admission_requirement: [
        {
          description: "lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
          point: [
            {
              value: "lorem Ipsum and others are the industry's standard dummy"
            },
            {
              value: "lorem Ipsum and others are the industry's standard dummy"
            }
          ]
        },
        {
          note: "Please contact us at new era consultancy personally for further assistance on the above and visa procedure"
        }
      ]
    },
    {
      requirement: [
        {
          kye: "Undergraduate",
          value: "lorem Ipsum and others are the industry's standard dummy"
        },
        {
          kye: "Postgraduate",
          value: "lorem Ipsum and others are the industry's standard dummy"
        }
      ]
    },
    {
      facility: [
        "Czech Republic Flag",
        "Czech Republic Flag",
        "Czech Republic Flag",
        "Czech Republic Flag"
      ]
    },
    {
      living_cost: [
        {
          title: "lorem Ipsum and others are the industry's standard dummy"
        },
        {
          question: "lorem Ipsum and others are the industry's standard dummy?"
        },
        {
          point: [
            { key: "Key stage 1 :", value: "5 to 7 years old" },
            { key: "Key stage 2 :", value: "7 to 11 years old" }
          ]
        },
        {
          note: "High value courses like medical and veterinary are not included"
        }
      ]
    }
  ];

  const Sweden = () => {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <Helmet>
          <title>Sweden Education Details</title>
          <meta name="description" content="Detailed information about education in Sweden, including admission requirements, living costs, and facilities." />
        </Helmet>
  
        {/* About Section */}
        {sweden[0]?.about && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">About Sweden</h2>
            <p className="text-gray-700">{sweden[0].about}</p>
          </section>
        )}
  
        {/* Admission Requirement Section */}
        {sweden[1]?.admission_requirement && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Admission Requirements</h2>
            {sweden[1].admission_requirement.map((item, index) => (
              <div key={index} className="mb-4">
                {item.description && <p className="text-gray-700 mb-2">{item.description}</p>}
                {item.point && (
                  <ul className="list-disc list-inside mb-2 text-gray-600">
                    {item.point.map((point, i) => (
                      <li key={i} className="mb-1">{point.value}</li>
                    ))}
                  </ul>
                )}
                {item.note && <p className="font-semibold text-gray-800"><strong>Note:</strong> {item.note}</p>}
              </div>
            ))}
          </section>
        )}
  
        {/* Requirement Section */}
        {sweden[2]?.requirement && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600">
              {sweden[2].requirement.map((item, index) => (
                <li key={index} className="mb-2">
                  <strong className="text-gray-900">{item.kye}</strong> {item.value}
                </li>
              ))}
            </ul>
          </section>
        )}
  
        {/* Facility Section */}
        {sweden[3]?.facility && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-teal-600">Facilities</h2>
            <ul className="list-disc list-inside text-gray-600">
              {sweden[3].facility.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </section>
        )}
  
        {/* Living Cost Section */}
        {sweden[4]?.living_cost && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Living Cost</h2>
            {sweden[4].living_cost.map((item, index) => (
              <div key={index} className="mb-4">
                {item.title && <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>}
                {item.question && <p className="font-semibold text-gray-800"><strong>Question:</strong> {item.question}</p>}
                {item.point && (
                  <ul className="list-disc list-inside mb-2 text-gray-600">
                    {item.point.map((point, i) => (
                      <li key={i} className="mb-1">
                        <strong className="text-gray-900">{point.key}</strong> {point.value}
                      </li>
                    ))}
                  </ul>
                )}
                {item.note && <p className="font-semibold text-gray-800"><strong>Note:</strong> {item.note}</p>}
              </div>
            ))}
          </section>
        )}
      </div>
    );
  };
  
  export default Sweden;
  