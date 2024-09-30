// App.js
import { Outlet, Route, Routes } from "react-router-dom";
import { NavLinkWrapper } from "../components/NavLinkWrapper";
import { routePaths } from "../constants/route-paths";

// Dummy components for each route
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;

const pathName = routePaths.nestedClientRouter1;
const pathName2 = routePaths.nestedClientRouter2;

// Parent component for all routes
const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLinkWrapper to={`${pathName}/home`}>Home</NavLinkWrapper>
        </li>
        <li>
          <NavLinkWrapper to={`${pathName}/about`}>About</NavLinkWrapper>
        </li>
        <li>
          <NavLinkWrapper to={`${pathName}/services`}>Services</NavLinkWrapper>
        </li>
        <p>
          <NavLinkWrapper to={pathName2}>Switch to stack 2 ➡️</NavLinkWrapper>
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
