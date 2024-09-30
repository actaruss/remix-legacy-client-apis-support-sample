import { NestedClientRouter1 } from "../route-components/nested-client-router-1.client";
import { useIsClient } from "../routes-helpers/useIsClient";

/**
 * src: https://devtools.tech/blog/how-to-fix-errors-like-referenceerror-window-is-not-defined-in-remix-powered-web-app-or-javascript-frameworks---rid---G0OTehUXo6QQCrfykSF3
 * src: https://sentry.io/answers/hydration-error-nextjs/
 **/
export default function FallbackNestedClientRouter() {
  const { isClient } = useIsClient();

  return isClient ? (
    <NestedClientRouter1 />
  ) : (
    <div>Loading client router 1 fallback...</div>
  );
}
