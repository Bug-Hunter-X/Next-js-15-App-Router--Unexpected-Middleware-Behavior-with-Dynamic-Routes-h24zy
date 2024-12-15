# Next.js 15 App Router: Unexpected Middleware Behavior with Dynamic Routes

This repository demonstrates an unexpected behavior encountered while using middleware with dynamic routes in the Next.js 15 App Router.

## Bug Description

When using middleware with dynamic routes, there are unexpected issues with pathnames.  Middleware may not correctly redirect or rewrite based on conditions within it, which should work correctly.  The behavior is inconsistent and deviates from what one would expect.  This problem is exacerbated with concurrent requests, sometimes working correctly and sometimes producing an unexpected output.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access various routes and observe inconsistent behavior.

## Expected Behavior

Middleware should always operate consistently in applying rewrites and redirects, regardless of whether there are dynamic segments or other factors in the request path.

## Actual Behavior

Middleware in the app directory, particularly with dynamic routes, shows inconsistent behavior.  Redirects or rewrites may fail or succeed unexpectedly.  This inconsistency is more pronounced under load.

## Potential Solution

The issue might stem from how Next.js handles dynamic segments and pathnames in the context of middleware.  A potential solution might involve examining and modifying how the router handles pathname resolution within middleware.  It may also require deeper investigation into how concurrent requests are processed.

## Workaround

A temporary workaround may be to carefully refactor the application’s routes and middleware to simplify the handling of dynamic segments or to avoid using middleware on particularly complex or highly dynamic routes.