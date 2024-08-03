import { Suspense, lazy } from 'react';
import Loading from './Pages/Loading/Loading';
const Root = lazy(() => import("./Components/Layout/Root/Root"));

const App = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Root />
    </Suspense>
  );
};

export default App;
