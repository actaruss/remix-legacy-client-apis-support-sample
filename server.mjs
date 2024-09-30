import { createRequestHandler } from "@remix-run/node";
import express from "express";
import helmet from "helmet";
import crypto from "node:crypto";

const server = express();

server.use((request, response, next) => {
  response.locals.cspNonce = crypto.randomBytes(36).toString();
  next();
});

// ...

server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": [
          "'strict-dynamic'",
          (request, response) => `'nonce-${response.locals.cspNonce}'`,
        ],
        "script-src-elem": [
          "'strict-dynamic'",
          (request, response) => `'nonce-${response.locals.cspNonce}'`,
        ],
      },
    },
  })
);

// ...

server.all(
  "*",
  createRequestHandler({
    getLoadContext: (request, response) => ({
      cspNonce: response.locals.cspNonce,
    }),
  })
);
