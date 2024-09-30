// App.js
import { Outlet, Route, Routes } from "react-router-dom";
import { NavLinkWrapper } from "../components/NavLinkWrapper";
import { routePaths } from "../constants/route-paths";

// Dummy components for each route
const Home = () => <h2>Home Page --- 2</h2>;
const About = () => <h2>About Page --- 2</h2>;
const Services = () => <h2>Services Page --- 2</h2>;

const pathName = routePaths.nestedClientRouter2;
const pathName1 = routePaths.nestedHydratedClientRouter1;

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
        <p>
          <NavLinkWrapper to={pathName1}>
            Switch to hydrated stack 1 ➡️
          </NavLinkWrapper>
        </p>
      </ul>
    </nav>

    {/* The Outlet renders the child route components */}
    <Outlet />
  </div>
);

function App() {
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

export default App;
