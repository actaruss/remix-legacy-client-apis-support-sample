import { NestedClientRouter1 } from "../route-components/nested-client-router-1.client";
import { useFilePath } from "../routes-helpers/useFilePath";
import { useIsClient } from "../routes-helpers/useIsClient";

export default function FallbackNestedClientRouter() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <NestedClientRouter1 pathName={pathName} />
  ) : (
    <div>Loading client router 1 fallback...</div>
  );
}
