import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("whyChooseUsa");

  return (
    <div className="flex flex-col lg:flex-row items-start p-6 bg-gray-50 min-h-screen md:text-justify">
      <Helmet>
        <title>USA Education Details</title>
        <meta
          name="description"
          content="Detailed information about education in the USA, including admission requirements, living costs, and facilities."
        />
      </Helmet>

      {/* Tabs Navigation */}
      <div
        className="flex lg:flex-col overflow-x-auto w-full lg:overflow-visible lg:w-1/4 mb-4 lg:mb-0 lg:mr-3 space-x-3 lg:space-x-0 lg:space-y-2"
        role="tablist"
        aria-orientation="vertical"
      >
        {[
          { id: "whyChooseUsa", label: "Why Choose USA?" },
          { id: "studyCost", label: "Study Cost" },
          { id: "livingCost", label: "Living Cost" },
          { id: "howMuchCost", label: "Cost Details" },
          { id: "details", label: "In-depth Details" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "bg-customBg  text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            } py-2 px-4 rounded text-left whitespace-nowrap flex-shrink-0`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-grow lg:w-3/4">
        {/* Why Choose USA */}
        {activeTab === "whyChooseUsa" && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
              Why Choose USA as a Study Destination?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {usa[0]?.why_choose_usa?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Study Cost */}
        {activeTab === "studyCost" && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
              How Much Does It Cost to Study?
            </h2>
            <p className="text-gray-700">{usa[1]?.study_cost}</p>
          </section>
        )}

        {/* Living Cost */}
        {activeTab === "livingCost" && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
              Living Cost
            </h2>
            <p className="text-gray-700">{usa[2]?.living_cost}</p>
          </section>
        )}

        {/* Cost Details */}
        {activeTab === "howMuchCost" && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
              How Much Does It Cost?
            </h2>
            <ul className="space-y-2 text-gray-700">
              {usa[3]?.how_much_cost?.map((item, i) => (
                <li key={i}>
                  <strong className="text-gray-900">{item?.key}:</strong> {item?.value}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-3 text-lg">
              <span className="font-bold">Note:</span> {usa[3]?.note}
            </p>
          </section>
        )}

        {/* In-depth Details */}
        {activeTab === "details" && (
          <section className="mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
              In-depth Details
            </h2>
            <p className="text-gray-700">{usa[4]?.details}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Usa;
