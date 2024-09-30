import { useState } from "react";
import { createPortal } from "react-dom";
import { Outlet, Route, Routes } from "react-router-dom";
import { ModalContent } from "../components/ModalContent";

const Layout = ({ pathName }: { pathName: string }) => {
  return (
    <div>
      <span>Path: {pathName}</span>

      <Outlet />
    </div>
  );
};

export function NestedClientRouter3({ pathName }: { pathName: string }) {
  return (
    <Routes>
      <Route path="/" element={<Layout pathName={pathName} />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/modal" element={<Services showModal />} />
      </Route>
    </Routes>
  );
}

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
