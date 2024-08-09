const usa = [
    {
      why_choose_usa: [
        "lorem ipsum dolor sit amet tempor inv sapiente vel aug recusandum",
        "lorem ipsum dolor sit amet tempor inv sapiente vel aug recusandum",
        "lorem ipsum dolor sit amet tempor inv sapiente vel aug recusandum",
        "lorem ipsum dolor sit amet tempor inv sapiente vel aug recusandum",
      ],
    },
    {
      how_much_cost: [
        { key: "sdhjkashd", value: "ahdshdhhdauisduhsahdauisduhsah" },
        { key: "sdhjkashd", value: "ahdshdhhdauisduhsahdauisduhsah" },
        { key: "sdhjkashd", value: "ahdshdhhdauisduhsahdauisduhsah" },
      ],
    },
    { living_cost: "Czech Republic" },
    { study_cost: "Czech Republic" },
    {
      details:
        "Czech Republic lorem d Definitions and Information Services Services Services",
    },
  ];
  
  const Usa = () => {
    return (
      <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-lg shadow-lg space-y-6 transition-all duration-300">
        {usa.map((section, index) => {
          const [key] = Object.keys(section);
          const data = section[key];
  
          switch (key) {
            case "why_choose_usa":
              return (
                <div key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-blue-500">Why Choose USA</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {data.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              );
            case "how_much_cost":
              return (
                <div key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-green-500">How Much Cost</h2>
                  <ul className="space-y-2">
                    {data.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        <strong className="text-gray-900">{item.key}:</strong> {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            case "living_cost":
              return (
                <div key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-purple-500">Living Cost</h2>
                  <p className="text-gray-700">{data}</p>
                </div>
              );
            case "study_cost":
              return (
                <div key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-red-500">Study Cost</h2>
                  <p className="text-gray-700">{data}</p>
                </div>
              );
            case "details":
              return (
                <div key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-yellow-500">Details</h2>
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
  