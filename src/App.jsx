// App.jsx
import { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
const Root = lazy(() => import("./Components/Layout/Root/Root"));
import Loading from './Pages/Loading/Loading';
import TopScroll from "./Components/Layout/TopScroll/TopScroll";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Root />
        <TopScroll/>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;

