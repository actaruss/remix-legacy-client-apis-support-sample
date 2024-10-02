import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ClientStackLayout } from "../components/ClientStackComponents/layouts/ClientStackLayout";

/**
 * We don't care about errors as this could be handled in a separated module with a different eslint
 */
const Home = lazy(
  () => import("../components/ClientStackComponents/routes/Home")
);

const Services = lazy(
  () => import("../components/ClientStackComponents/routes/Services")
);

//* render it as server component
export function ClientStack({ pathName }: { pathName: string }) {
  return (
    <Routes>
      <Route path="/" element={<ClientStackLayout pathName={pathName} />}>
        <Route
          index
          element={
            <Suspense fallback={<span>Loading Home</span>}>
              <Home />
            </Suspense>
          }
        />
        {/* <Route path="a" lazy={() => import("./a")} /> */}
        <Route
          path="home"
          element={
            <Suspense fallback={<span>Loading Home</span>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<span>Loading Home</span>}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="services-modal"
          element={
            <Suspense fallback={<span>Loading Home</span>}>
              <Services showModal />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
