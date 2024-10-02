import { Outlet } from "react-router-dom";

export const ClientStackLayout = ({ pathName }: { pathName: string }) => {
  return (
    <div>
      <span>Path: {pathName}</span>
      <h1 style={{ fontSize: "80px" }}>🌊</h1>
      <h1>Hydrated On CLIENT !!! 💅</h1>
      <Outlet />
    </div>
  );
};
