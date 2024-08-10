import { Helmet } from "react-helmet";

const czech_republic = [
  {
    about:
      "If you are looking for a unique European study abroad experience, look no further than the Czech Republic. Known for its impressive castles, vast selection of native beers, medieval old towns, and beautiful landscapes, the Czech Republic combines the best of East and West Europe to create its own unique flair. Popular study abroad cities in the Czech Republic include the capital Prague, Liberec, Brno, and Olomouc. However, with 61 higher education institutions located in more than 20 towns across the country, there are many other fascinating locations to choose from.",
  },
  {
    admission_requirement: [
      {
        description:
          "The following checklist will be helpful while applying in the Czech Republic:",
      },
      {
        point: [
          { value: "Passport with an expiry date beyond 12 months" },
          { value: "Offer letter from the University" },
          { value: "Proof of Accommodation" },
          { value: "Health Insurance" },
          { value: "All academic certificates & mark sheets" },
          { value: "6 copies of passport size photos" },
          { value: "Language proficiency certificate" },
          { value: "Bank statement & solvency certificate" },
        ],
      },
    ],
  },
  {
    facility: [
      {description: "Many options to study in English Universities in Czech Republic offer many degree courses taught in English. There are about 1,000 English-taught programs offered by universities in the country. So, the choice is vast!"},
      {
        title: "Academic Excellence",
        value:
          "The Czech Republic has a long tradition of academic excellence with several universities consistently ranking among the top in the world.",
      },
      {
        title: "Diversity and Cultural Experience",
        value:
          "The Czech Republic is home to a diverse community of students from around the world, offering ample opportunities for cultural exchange and networking.",
      },
      {
        title: "Accommodation",
        points: [
          "Many Czech universities offer affordable on-campus housing options for international students.",
          "Cheapest living cost.",
          "Health insurance needed for international students in the Czech Republic.",
          "You can work without a work permit (20 hours per week).",
          "Language proficiency certificate: TOEFL- 90, IELTS - 6.00 minimum or equivalent.",
        ],
      },
    ],
  },
  { living_cost: "For a single person it cost around 300 to 650 EUR per month to maintain their living expenses." },
  { study_cost: "Tuition fees in Czechia for undergraduate and post graduate courses will be between 2,000 EUR to 10,000 EUR " },
];

const CzechRepublic = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-justify">
      <Helmet>
        <title>Czech Republic Education Details</title>
        <meta
          name="description"
          content="Comprehensive information about studying in the Czech Republic, including admission requirements, facilities, and costs."
        />
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
              {item.description && (
                <p className="text-gray-700 mb-2">{item.description}</p>
              )}
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
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Other Facility & Requirements</h2>
          {czech_republic[2].facility.map((item, index) => (
            <div key={index} className="mb-4">
              <p>{item?.description}</p>
              <h3 className="text-xl font-bold text-gray-800">{item?.title}</h3>
              <p className="text-gray-700 mb-2">{item.value}</p>
              {item.points && (
                <ul className="list-disc list-inside text-gray-600">
                  {item.points.map((point, i) => (
                    <li key={i} className="mb-1">{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
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
