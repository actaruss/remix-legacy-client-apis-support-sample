import { useEffect, useState } from "react";

/**
 * src: https://devtools.tech/blog/how-to-fix-errors-like-referenceerror-window-is-not-defined-in-remix-powered-web-app-or-javascript-frameworks---rid---G0OTehUXo6QQCrfykSF3
 * src: https://sentry.io/answers/hydration-error-nextjs/
 *
 **/
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  const documentObject = typeof document;

  useEffect(() => {
    if (documentObject !== "undefined") {
      setIsClient(true);
    }
  }, [documentObject]);

  return { isClient };
};
