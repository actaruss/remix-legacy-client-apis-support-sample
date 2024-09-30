export function ModalContent({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000021",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid grey",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <div>I&apos;m a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
