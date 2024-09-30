import { useState } from "react";
import { createPortal } from "react-dom";
import { Outlet, Route, Routes } from "react-router-dom";
import { ModalContent } from "../components/ModalContent";
import { NavLinkWrapper } from "../components/NavLinkWrapper";
import { routePaths } from "../constants/route-paths";

// Dummy components for each route
const Home = () => (
  <>
    <h2>Hydrated - Home Page --- 3</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
  </>
);
const Services = ({ showModal: showModalProps }: { showModal?: boolean }) => {
  const [showModal, setShowModal] = useState(showModalProps);

  return (
    <>
      <h2>Hydrated - Services Page --- 3 ---- MODAL</h2>
      <p>
        window.location is defined 🥳 :{" "}
        <span style={{ color: "green" }}>{window.location.toString()}</span>
      </p>

      <p>
        <button onClick={() => setShowModal(true)}>Open modal</button>
      </p>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

const pathName = routePaths.nestedHydratedClientRouter3;

// Parent component for all routes
const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLinkWrapper to={`${pathName}/home`}>Home --- 3</NavLinkWrapper>
        </li>
        <li>
          <NavLinkWrapper to={`${pathName}/services/modal`}>
            Services - show modal --- 🚪
          </NavLinkWrapper>
        </li>
      </ul>
    </nav>

    {/* The Outlet renders the child route components */}
    <Outlet />
  </div>
);

export function NestedClientRouter3() {
  return (
    <Routes>
      {/* Single parent route that renders child routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="services/modal" element={<Services showModal />} />
      </Route>
    </Routes>
  );
}
