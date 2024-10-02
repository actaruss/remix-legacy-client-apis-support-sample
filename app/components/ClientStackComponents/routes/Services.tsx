import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "../../ModalContent";

export const Services = ({
  showModal: showModalProps,
}: {
  showModal?: boolean;
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
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default Services;
