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
import { NavLinkWrapper } from "./components/NavLinkWrapper";

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
                <NavLinkWrapper to="hydrated-route-1">
                  Nested router 1
                </NavLinkWrapper>
              </li>
              <li>
                <NavLinkWrapper to="hydrated-route-2">
                  Nested router 2
                </NavLinkWrapper>
              </li>
              <li>
                <NavLinkWrapper to="hydrated-route-3">
                  Nested HYDRATED router 1
                </NavLinkWrapper>
              </li>
              <li>
                <NavLinkWrapper to="prerender-stack-1">
                  Nested HYDRATED router 2
                </NavLinkWrapper>
              </li>
              <li>
                <NavLinkWrapper to="prerender-stack-2">
                  Nested HYDRATED with MODAL
                </NavLinkWrapper>
              </li>
              <li>
                <NavLinkWrapper to="tanstack-client-router">
                  TanStack Nested HYDRATED
                </NavLinkWrapper>
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
