// App.jsx
import { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
const Root = lazy(() => import("./Components/Layout/Root/Root"));
import Loading from './Pages/Loading/Loading';

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Root />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
