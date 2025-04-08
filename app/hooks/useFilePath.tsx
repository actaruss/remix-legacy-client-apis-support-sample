import { useLocation } from "react-router-dom";

export function useFilePath() {
  const location = useLocation();

  return { pathName: `/${location.pathname.split("/").at(1) || ""}` };
}
