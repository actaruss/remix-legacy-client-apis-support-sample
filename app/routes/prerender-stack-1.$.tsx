import { Outlet, Route, Routes } from "react-router-dom";
import { useFilePath } from "../routes-helpers/useFilePath";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;

const Layout = () => {
  const { pathName } = useFilePath();

  return (
    <div>
      <span>Path: {pathName}</span>

      <Outlet />
    </div>
  );
};

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
