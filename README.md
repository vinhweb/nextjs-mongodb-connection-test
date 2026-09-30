# Next.js MongoDB connection test

A single page with a **Test MongoDB connection** button. The server connects using `MONGODB_URI` and runs a read-only ping. The browser never receives the connection string. A ping tests connectivity/authentication, not collection read/write permissions.

## Local use

Use Node.js 22 or newer. Run `npm ci`, copy `.env.example` to `.env.local`, set `MONGODB_URI`, then run `npm run dev`. Open http://localhost:3000.

A Dokploy internal hostname generally works only inside its Docker network. For the actual internal-connection test, deploy the app beside the database.

## Dokploy

1. Push this folder as a separate Git repository and create a Dokploy Application connected to it.
2. Choose **Dockerfile** build type, Dockerfile Path `Dockerfile`, Docker Context Path `.`. If using a repository containing the parent directory instead, use `nextjs-mongodb-connection-test/Dockerfile` and `nextjs-mongodb-connection-test`.
3. Set runtime environment variables `PORT=3000` and `MONGODB_URI` to your MongoDB service's **Internal Connection URL**. Keep the URI server-only; do not use a `NEXT_PUBLIC_` prefix or pass it as a Docker build argument.
4. Confirm MongoDB is **running** and both services share a Docker network. No external MongoDB port is required.
5. Add an app domain pointing to container port **3000**, deploy, and click **Test MongoDB connection**.

The build does not connect to MongoDB or require database credentials. After changing runtime environment variables, redeploy the application.

For Nixpacks instead: install `npm ci`, build `npm run build`, start `npm start`.

## Endpoints

- `/`: connection test page.
- `/api/health`: app health, HTTP 200; use for deployment health checks.
- `/api/test-db`: fresh MongoDB ping, HTTP 200 on success or 503 on failure, with a safe message and elapsed milliseconds.

If the test fails, first check that the MongoDB service has a running container. Then check its internal hostname, shared network, credentials, `authSource`, and TLS requirements. Password characters must be URI-encoded if manually constructing the URL.

References: [Next.js deployment](https://nextjs.org/docs/app/getting-started/deploying), [Dokploy internal connections](https://docs.dokploy.com/docs/core/databases/connection).
