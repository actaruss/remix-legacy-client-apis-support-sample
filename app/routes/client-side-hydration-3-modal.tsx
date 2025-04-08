import { useFilePath } from "../hooks/useFilePath";
import { useIsClient } from "../hooks/useIsClient";
import { ClientSideHydration3 } from "../screens/ClientSideHydration3";

export default function Module() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <ClientSideHydration3 pathName={pathName} showModal />
  ) : (
    <div>{`Loading client router ${pathName} fallback...`}</div>
  );
}
