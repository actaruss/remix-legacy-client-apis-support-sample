import { useState } from "react";
import { createPortal } from "react-dom";
import { Outlet, Route, Routes } from "react-router-dom";
import { ModalContent } from "../components/ModalContent";

const Layout = ({ pathName }: { pathName: string }) => {
  return (
    <div>
      <span>Path: {pathName}</span>
      <h1 style={{ fontSize: "80px" }}>🌊</h1>
      <h1>Hydrated On CLIENT !!! 💅</h1>
      <Outlet />
    </div>
  );
};

export function ClientStack({ pathName }: { pathName: string }) {
  return (
    <Routes>
      <Route path="/" element={<Layout pathName={pathName} />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services-modal" element={<Services showModal />} />
      </Route>
    </Routes>
  );
}

const Home = () => (
  <>
    <h2>Home</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
  </>
);

const Services = ({ showModal: showModalProps }: { showModal?: boolean }) => {
  const [showModal, setShowModal] = useState(showModalProps);
  console.log(showModal);
  return (
    <>
      <h2>Services MODAL</h2>
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
