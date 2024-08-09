import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Loading/Loading";

// Lazy load country components
const countryComponents = {
  usa: lazy(() => import("../CountryDetailsPage/Usa")),
  uk: lazy(() => import("../CountryDetailsPage/Uk")),
  australia: lazy(() => import("../CountryDetailsPage/Australia")),
  sweden: lazy(() => import("../CountryDetailsPage/Sweden")),
  denmark: lazy(() => import("../CountryDetailsPage/Denmark")),
  hungary: lazy(() => import("../CountryDetailsPage/Hungary")),
  czech_republic: lazy(() => import("../CountryDetailsPage/CzechRepublic")),
};

const Details = () => {
  const { country } = useParams();
  const CountryComponent = countryComponents[country];

  return (
    <div>
      {CountryComponent ? (
        <Suspense fallback={<Loading />}>
          <CountryComponent />
        </Suspense>
      ) : (
        <section>No data available.</section>
      )}
    </div>
  );
};

export default Details;
