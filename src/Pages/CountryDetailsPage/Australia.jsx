import { Helmet } from "react-helmet";

const australia = [
  { about: "lorem Ipsum and others are the industry's standard dummy" },
  {
    why_choose_australia: [
      {
        key: "Top University:",
        value: "lorem Ipsum and others are the industry's standard dummy"
      },
      {
        key: "Field of Study:",
        value: "lorem Ipsum and others are the industry's standard dummy"
      }
    ]
  },
  {
    why_study_australia: [
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy"
    ]
  },
  {
    visa_requirement: [
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy",
      {
        note: "Please contact us at new era consultancy personally for further assistance on the above and visa procedure"
      }
    ]
  },
  {
    other: [
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy",
      "lorem Ipsum and others are the industry's standard dummy"
    ]
  }
];

const Australia = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Study in Australia</title>
        <meta name="description" content="Discover why studying in Australia is a great choice, including visa requirements, benefits, and more." />
      </Helmet>

      {/* About Section */}
      {australia[0]?.about && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Australia</h2>
          <p className="text-gray-700">{australia[0].about}</p>
        </section>
      )}

      {/* Why Choose Australia Section */}
      {australia[1]?.why_choose_australia && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Why Choose Australia</h2>
          <ul className="list-disc list-inside text-gray-600">
            {australia[1].why_choose_australia.map((item, index) => (
              <li key={index} className="mb-2">
                <strong className="text-gray-800">{item.key}</strong> {item.value}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Why Study Australia Section */}
      {australia[2]?.why_study_australia && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Why Study in Australia</h2>
          <ul className="list-disc list-inside text-gray-600">
            {australia[2].why_study_australia.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Visa Requirement Section */}
      {australia[3]?.visa_requirement && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Visa Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            {australia[3].visa_requirement.map((item, index) =>
              typeof item === 'string' ? (
                <li key={index} className="mb-2">{item}</li>
              ) : (
                <li key={index} className="mb-2">
                  <strong className="text-gray-800">Note:</strong> {item.note}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Other Section */}
      {australia[4]?.other && (
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Other Information</h2>
          <ul className="list-disc list-inside text-gray-600">
            {australia[4].other.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Australia;