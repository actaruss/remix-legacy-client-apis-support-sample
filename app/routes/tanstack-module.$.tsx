import { TanStackStack } from "../route-components/TanStackStack.client";
import { useFilePath } from "../routes-helpers/useFilePath";
import { useIsClient } from "../routes-helpers/useIsClient";

export default function Module() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <TanStackStack pathName={pathName} />
  ) : (
    <div>Loading client router Tanstack fallback...</div>
  );
}
