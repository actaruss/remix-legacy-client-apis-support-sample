import { NestedClientRouter3 } from "../route-components/nested-client-router-3.client";
import { useFilePath } from "../routes-helpers/useFilePath";
import { useIsClient } from "../routes-helpers/useIsClient";

export default function FallbackNestedClientRouter3() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <NestedClientRouter3 pathName={pathName} />
  ) : (
    <div>Loading client router 3 fallback...</div>
  );
}
