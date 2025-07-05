# Waku Catch-all API Route Matching

This repo reproduces a slight bug in how Waku matches API routes when using catch all routes.

## Steps:

- Clone repo
- run `bun i` to install deps
- run `bun run dev` to run the app
- curl/visit `localhost:3000/api/something`
  - get catch all handler response ✅
- curl/visit `localhost:3000/api/foo`
  - get catch all handler response, expected `foo.ts` response ❌
- curl/visit `localhost:3000/api`
  - get 404, expected catch all response ❌