import { Home } from "./components/Home";

export function ClientSideHydration1({ pathName }: { pathName: string }) {
  return (
    <div>
      <span>Path: {pathName}</span>
      <h1 style={{ fontSize: "80px" }}>⭐️</h1>
      <h1>Hydrated On CLIENT !!! 💅</h1>
      <Home />
    </div>
  );
}
