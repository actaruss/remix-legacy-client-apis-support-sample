import { useFilePath } from "../hooks/useFilePath";
import { useIsClient } from "../hooks/useIsClient";
import { ClientSideHydration1 } from "../screens/ClientSideHydration1";

export default function Module() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <ClientSideHydration1 pathName={pathName} />
  ) : (
    <div>{`Loading client router ${pathName} fallback...`}</div>
  );
}
