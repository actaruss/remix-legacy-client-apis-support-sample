# Welcome to Remix!

- [Remix Docs](https://remix/docs)

# Welcome to Remix!

- No suspense
- Client hydration
- Support legacy
- Support browser history
- Nested Thibault client router

Micro-frontend POC done !

## Development

From your terminal:

```sh
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Preview locally

From your terminal:

```sh
pnpm build
```

```sh
pnpm start
```

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/server`
- `build/client`

# SRCs

- https://devtools.tech/blog/how-to-fix-errors-like-referenceerror-window-is-not-defined-in-remix-powered-web-app-or-javascript-frameworks---rid---G0OTehUXo6QQCrfykSF3
- https://sentry.io/answers/hydration-error-nextjs/
- https://github.com/storybookjs/storybook/discussions/25519
- https://www.npmjs.com/package/storybook-addon-react-router-v6/v/1.0.1
- https://storybook.js.org/docs/writing-stories/args
