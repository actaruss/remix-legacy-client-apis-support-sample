import { Home } from "./components/Home";

export function ClientSideHydration3({
  pathName,
  showModal,
}: {
  pathName: string;
  showModal: boolean;
}) {
  return (
    <div>
      <span>Path: {pathName}</span>
      <h1 style={{ fontSize: "80px" }}>⭐️⭐️⭐️</h1>
      <h1>Hydrated On CLIENT !!! 💅</h1>
      <Home showModal={showModal} />
    </div>
  );
}
