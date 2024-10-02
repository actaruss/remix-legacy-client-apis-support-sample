import { useState } from "react";

export const Services = ({
  showModal: showModalProps,
}: {
  showModal?: boolean;
}) => {
  const [showModal, setShowModal] = useState(showModalProps);

  return (
    <>
      <h2>Services MODAL</h2>
      <p>On the server</p>

      <p>
        <button onClick={() => setShowModal(true)}>Open modal</button>
      </p>

      {showModal && <p>No portal on the server</p>}
    </>
  );
};
