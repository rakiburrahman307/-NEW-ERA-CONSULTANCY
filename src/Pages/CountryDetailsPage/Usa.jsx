import { Helmet } from "react-helmet";

const usa = [
  {
    why_choose_usa: [
      "Unique Higher Education System.",
      "Variety of Educational Opportunities.",
      "Long Term Career Prospects.",
      "Program Flexibility.",
    ],
  },
  {
    study_cost:
      "The USA is home to the maximum number of top universities in the world. So, the cost of living and education expenses can vary.",
  },
  {
    living_cost:
      "For a single person, it costs around $10,000 to $12,000 per year to maintain their living expenses.",
  },
  {
    how_much_cost: [
      { key: "Undergraduate Bachelor Degree", value: "$15,000 to $33,000" },
      { key: "Post Graduate Masters Degree", value: "$20,000 to $37,000" },
    ],
    note: "High value courses like medicine and veterinary are not included.",
  },
  {
    details:
      "As an International Student, you have to pay your tuition fee first before you study. Normally, all universities take about 50% in advance from the 1st year's tuition fee. Overseas Student Health Cover (OSHC) also has to be paid with the tuition fee. Other additional costs like course materials and access to institution facilities will be charged when you are at your designated university.",
  },
];

const Usa = () => {
  return (
    <section className="mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-lg shadow-lg space-y-6 transition-all duration-300">
       <Helmet>
        <title>USA Education Details</title>
        <meta
          name='description'
          content='Detailed information about education in USA, including admission requirements, living costs, and facilities.'
        />
      </Helmet>
      {usa.map((section, index) => {
        const [key] = Object.keys(section);
        const data = section[key];

        switch (key) {
          case "why_choose_usa":
            return (
              <div
                key={index}
                className="bg-white text-lg p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-blue-500">
                  Why Choose USA as a Study Destination?
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  {data.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "study_cost":
            return (
              <div
                key={index}
                className="bg-white text-lg p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-red-500">
                  How much does it cost to study?
                </h2>
                <p className="text-gray-700">{data}</p>
              </div>
            );
          case "living_cost":
            return (
              <div
                key={index}
                className="bg-white text-lg p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-purple-500">
                  Living Cost
                </h2>
                <p className="text-gray-700">{data}</p>
              </div>
            );
          case "how_much_cost":
            return (
              <div
                key={index}
                className="bg-white text-lg p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-green-500">
                  How Much Does It Cost?
                </h2>
                <ul className="space-y-2">
                  {data.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      <strong className="text-gray-900">{item?.key}:</strong>{" "}
                      {item.value}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-3 text-lg">
                  <span className="font-bold">Note:</span> {section?.note}
                </p>
              </div>
            );
          case "details":
            return (
              <div
                key={index}
                className="bg-white text-lg p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-yellow-500">
                  In Depth Details
                </h2>
                <p className="text-gray-700">{data}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </section>
  );
};

export default Usa;
