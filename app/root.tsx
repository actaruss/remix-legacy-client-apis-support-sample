import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import { useNonce } from "../providers/nonce";
import appStylesHref from "./app.css?url";
import { Li } from "./components/Li";
import { NavLabel } from "./components/NavLabel";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export const loader = async () => {
  const cspScriptNonce = crypto.randomUUID().toString();

  const data = {
    cspScriptNonce,
  };
  return data;
};

export default function App() {
  const nonce = useNonce();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div id="search-form"></div>
          <nav>
            <ul>
              <li>
                <NavLabel>Hydration the real deal</NavLabel>
                <ul>
                  <Li
                    to="/client-side-hydration-1"
                    label="Client side hydration 1"
                  />
                  <Li
                    to="/client-side-hydration-2"
                    label="Client side hydration 2"
                  />
                  <Li
                    to="/client-side-hydration-3"
                    label="Client side hydration 3"
                  />
                  <Li
                    to="/client-side-hydration-3-modal"
                    label="Client side hydration 3 Modal"
                  />
                </ul>
              </li>
              <li>
                <NavLabel>TanStack module</NavLabel>
                <ul>
                  <Li to="/tanstack-module" label="Home" />
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div id="detail">
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}
