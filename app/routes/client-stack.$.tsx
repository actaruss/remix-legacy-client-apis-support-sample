import { ClientStack } from "../modules/ClientStack.client";
import { useFilePath } from "../routes-helpers/useFilePath";
import { useIsClient } from "../routes-helpers/useIsClient";

export default function Module() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <ClientStack pathName={pathName} />
  ) : (
    <div>Loading client router 3 fallback...</div>
  );
}
