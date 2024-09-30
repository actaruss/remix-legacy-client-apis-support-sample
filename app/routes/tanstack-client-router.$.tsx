import { TanStackRoute } from "../route-components/nested-client-router-4-tanstack.client";
import { useFilePath } from "../routes-helpers/useFilePath";
import { useIsClient } from "../routes-helpers/useIsClient";

export default function TanStackClientRouter3() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <TanStackRoute pathName={pathName} />
  ) : (
    <div>Loading client router Tanstack fallback...</div>
  );
}
