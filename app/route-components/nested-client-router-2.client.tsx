import { Outlet, Route, Routes } from "react-router-dom";
import { NavLinkWrapper } from "../components/NavLinkWrapper";
import { routePaths } from "../constants/route-paths";

// Dummy components for each route
const Home = () => (
  <>
    <h2>Hydrated - Home Page --- 2</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
  </>
);
const About = () => (
  <>
    <h2>Hydrated - About Page --- 2</h2>
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

const pathName = routePaths.nestedHydratedClientRouter2;

// Parent component for all routes
const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLinkWrapper to={`${pathName}/home`}>Home --- 2</NavLinkWrapper>
        </li>
        <li>
          <NavLinkWrapper to={`${pathName}/about`}>About --- 2</NavLinkWrapper>
        </li>
        <li>
          <NavLinkWrapper to={`${pathName}/services`}>
            Services --- 2
          </NavLinkWrapper>
        </li>
      </ul>
    </nav>

    {/* The Outlet renders the child route components */}
    <Outlet />
  </div>
);

export function NestedClientRouter2() {
  return (
    <Routes>
      {/* Single parent route that renders child routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}
