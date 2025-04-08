import { useFilePath } from "../hooks/useFilePath";
import { useIsClient } from "../hooks/useIsClient";
import { ClientSideHydration2 } from "../screens/ClientSideHydration2";

export default function Module() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <ClientSideHydration2 pathName={pathName} />
  ) : (
    <div>{`Loading client router ${pathName} fallback...`}</div>
  );
}
