import { NestedClientRouter2 } from "../route-components/nested-client-router-2.client";
import { useFilePath } from "../routes-helpers/useFilePath";
import { useIsClient } from "../routes-helpers/useIsClient";

export default function FallbackNestedClientRouter2() {
  const { isClient } = useIsClient();
  const { pathName } = useFilePath();

  return isClient ? (
    <NestedClientRouter2 pathName={pathName} />
  ) : (
    <div>Loading client router 2 fallback...</div>
  );
}
