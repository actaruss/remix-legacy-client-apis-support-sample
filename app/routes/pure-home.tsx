import { useState } from "react";

export const PureServices = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h2>Services MODAL</h2>
      <p>
        No <span style={{ color: "red" }}>window.location</span> here
      </p>

      <p>
        <button onClick={() => setShowModal(true)}>Open modal</button>
      </p>

      {showModal && <p>No portal on server</p>}
    </>
  );
};

export default PureServices;
