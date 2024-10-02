import { ClientSwitchComponent } from "../modules/ClientSwitchComponent.client";
import { useFilePath } from "../routes-helpers/useFilePath";
import { useIsClient } from "../routes-helpers/useIsClient";

export default function Module() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <ClientSwitchComponent pathName={pathName} />
  ) : (
    <div>Loading client SWITCH 3 fallback...</div>
  );
}
