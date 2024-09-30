import { Outlet, Route, Routes } from "react-router-dom";
import { useFilePath } from "../routes-helpers/useFilePath";

const Home = () => <h2>Home</h2>;
const About = () => (
  <>
    <h2>About</h2>
    <p>This is pre rendered from the server</p>
  </>
);

const Layout = () => {
  const { pathName } = useFilePath();

  return (
    <div>
      <span>Path: {pathName}</span>
      <h1 style={{ fontSize: "80px" }}>👨🏻‍🔧</h1>
      <h1>On Server</h1>
      <Outlet />
    </div>
  );
};

export function ServerStack() {
  return (
    <Routes>
      {/* Single parent route that renders child routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
