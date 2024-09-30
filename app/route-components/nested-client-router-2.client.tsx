import { Outlet, Route, Routes } from "react-router-dom";

const Layout = ({ pathName }: { pathName: string }) => (
  <div>
    <span>Path: {pathName}</span>

    <Outlet />
  </div>
);

export function NestedClientRouter2({ pathName }: { pathName: string }) {
  return (
    <Routes>
      <Route path="/" element={<Layout pathName={pathName} />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

const Home = () => (
  <>
    <h2>Hydrated - Home Page --- 2</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
  </>
);

const Services = () => {
  return (
    <>
      <h2>Hydrated - Services Page --- 2</h2>
      <p>
        window.location is defined 🥳 :{" "}
        <span style={{ color: "green" }}>{window.location.toString()}</span>
      </p>
    </>
  );
};
