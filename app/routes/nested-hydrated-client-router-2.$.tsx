import { NestedClientRouter2 } from "../route-components/nested-client-router-2.client";
import { useIsClient } from "../routes-helpers/useIsClient";

/**
 * src: https://devtools.tech/blog/how-to-fix-errors-like-referenceerror-window-is-not-defined-in-remix-powered-web-app-or-javascript-frameworks---rid---G0OTehUXo6QQCrfykSF3
 * src: https://sentry.io/answers/hydration-error-nextjs/
 **/
export default function FallbackNestedClientRouter2() {
  const { isClient } = useIsClient();

  return isClient ? (
    <NestedClientRouter2 />
  ) : (
    <div>Loading client router 2 fallback...</div>
  );
}
