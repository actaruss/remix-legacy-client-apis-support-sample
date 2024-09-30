import { TanStackRoute } from "../route-components/nested-client-router-4-tanstack.client";
import { useIsClient } from "../routes-helpers/useIsClient";

/**
 * src: https://devtools.tech/blog/how-to-fix-errors-like-referenceerror-window-is-not-defined-in-remix-powered-web-app-or-javascript-frameworks---rid---G0OTehUXo6QQCrfykSF3
 * src: https://sentry.io/answers/hydration-error-nextjs/
 **/
export default function TanStackClientRouter3() {
  const { isClient } = useIsClient();

  return isClient ? (
    <TanStackRoute />
  ) : (
    <div>Loading client router 2 fallback...</div>
  );
}
