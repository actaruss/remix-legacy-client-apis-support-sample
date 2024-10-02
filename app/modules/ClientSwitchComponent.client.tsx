import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { ModalContent } from "../components/ModalContent";

const Layout = ({
  pathName,
  children,
}: {
  pathName: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <span>Path: {pathName}</span>
      <h1 style={{ fontSize: "80px" }}>🌊</h1>
      <h1>Switch !!! 🔁</h1>
      {children}
    </div>
  );
};

export function ClientSwitchComponent({ pathName }: { pathName: string }) {
  return (
    <Layout pathName={pathName}>
      <Content />
    </Layout>
  );
}

export function Content() {
  const [searchParam, setSearchParams] = useSearchParams();

  const setQueryParams = (value: string) => {
    setSearchParams({ screen: value });
  };

  const pathName = searchParam.get("screen");

  switch (pathName) {
    case "home":
      return <Home setQueryParams={setQueryParams} />;
    case "services":
      return <Services setQueryParams={setQueryParams} />;
    case "services-modal":
      return <Services setQueryParams={setQueryParams} showModal />;
    default:
      return <Home setQueryParams={setQueryParams} />;
  }
}

const Home = ({
  setQueryParams,
}: {
  setQueryParams: (value: string) => void;
}) => (
  <>
    <h2>Home</h2>
    <p>
      window.location is defined 🥳 :{" "}
      <span style={{ color: "green" }}>{window.location.toString()}</span>
    </p>
    <p>
      <button onClick={() => setQueryParams("services")}>Go to services</button>
    </p>
  </>
);

const Services = ({
  showModal: showModalProps,
  setQueryParams,
}: {
  showModal?: boolean;
  setQueryParams: (value: string) => void;
}) => {
  const [showModal, setShowModal] = useState(showModalProps);

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

      <p>
        <button onClick={() => setQueryParams("home")}>Go to services</button>
      </p>

      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};
