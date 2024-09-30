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
