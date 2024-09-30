import { Outlet, Route, Routes } from "react-router-dom";
import { NavLinkWrapper } from "../components/NavLinkWrapper";
import { routePaths } from "../constants/route-paths";

// Dummy components for each route
const Home = () => (
  <>
    <h2>Hydrated - Home Page --- 1</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
  </>
);
const About = () => (
  <>
    <h2>Hydrated - About Page --- 1</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
  </>
);
const Services = () => (
  <>
    <h2>Hydrated - Services Page --- 1</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
  </>
);

const pathName = routePaths.nestedHydratedClientRouter1;
const pathName2 = routePaths.nestedHydratedClientRouter2;

// Parent component for all routes
const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLinkWrapper to={`${pathName}/home`}>Home --- 1</NavLinkWrapper>
        </li>
        <li>
          <NavLinkWrapper to={`${pathName}/about`}>About --- 1</NavLinkWrapper>
        </li>
        <li>
          <NavLinkWrapper to={`${pathName}/services`}>
            Services --- 1
          </NavLinkWrapper>
        </li>
        <p>
          <NavLinkWrapper to={pathName2}>
            Switch to hydrated stack 2 ➡️
          </NavLinkWrapper>
        </p>
        <li>
          <NavLinkWrapper to={`${pathName2}/services/modal`}>
            Switch to hydrated stack 2 ➡️ Services - show modal --- 🚪
          </NavLinkWrapper>
        </li>
      </ul>
    </nav>
    {/* The Outlet renders the child route components */}
    <Outlet />
  </div>
);

export function NestedClientRouter1() {
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
