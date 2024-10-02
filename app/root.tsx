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
import { NavLabel } from "./components/NavLabel";
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
                <NavLabel>Client Stack</NavLabel>
                <ul>
                  <li>
                    <NavLinkWrapper to="/client-stack/home">
                      Home
                    </NavLinkWrapper>
                  </li>
                  <li>
                    <NavLinkWrapper to="/client-stack/services">
                      Service
                    </NavLinkWrapper>
                  </li>
                  <li>
                    <NavLinkWrapper to="/client-stack/services-modal">
                      Service Modal
                    </NavLinkWrapper>
                  </li>
                </ul>
              </li>

              <li>
                <NavLabel>Switch Stack</NavLabel>
                <ul>
                  <li>
                    <NavLinkWrapper to="/client-switch/?screen=home">
                      Home
                    </NavLinkWrapper>
                  </li>
                  <li>
                    <NavLinkWrapper to="/client-switch/?screen=services">
                      Service
                    </NavLinkWrapper>
                  </li>
                  <li>
                    <NavLinkWrapper to="/client-switch/?screen=services-modal">
                      Service Modal
                    </NavLinkWrapper>
                  </li>
                </ul>
              </li>

              <li>
                <NavLabel>Server Stack</NavLabel>
                <ul>
                  <li>
                    <NavLinkWrapper to="/server-stack/home">
                      Home
                    </NavLinkWrapper>
                  </li>
                  <li>
                    <NavLinkWrapper to="/server-stack/about">
                      About
                    </NavLinkWrapper>
                  </li>
                </ul>
              </li>

              <li>
                <NavLabel>TanStack module</NavLabel>
                <ul>
                  <li>
                    <NavLinkWrapper to="tanstack-module">home</NavLinkWrapper>
                  </li>
                </ul>
              </li>

              <li>
                <NavLabel>Pure Stack</NavLabel>
                <ul>
                  <li>
                    <NavLinkWrapper to="pure-home">Home</NavLinkWrapper>
                  </li>
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
