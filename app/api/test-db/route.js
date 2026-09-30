import { MongoClient } from 'mongodb';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

let client;

export async function GET() {
  const start = performance.now();
  const respond = (status, body) => Response.json(
    { ...body, durationMs: Math.round(performance.now() - start) },
    { status, headers: { 'Cache-Control': 'no-store' } },
  );

  if (!process.env.MONGODB_URI) {
    return respond(503, { ok: false, message: 'Set MONGODB_URI in the app environment, then redeploy.' });
  }

  try {
    client ??= new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      timeoutMS: 5000,
      maxPoolSize: 5,
    });
    await client.connect();
    await client.db().command({ ping: 1 });
    return respond(200, { ok: true, message: 'MongoDB connection successful.' });
  } catch (error) {
    // Return fixed messages so credentials and raw driver errors stay private.
    const authFailed = error.code === 18 || error.cause?.code === 18;
    const invalidUri = error.name === 'MongoParseError';
    const message = authFailed
      ? 'Authentication failed. Check the database credentials and authSource.'
      : invalidUri
        ? 'Invalid MongoDB connection URL. Check MONGODB_URI.'
        : 'Cannot reach MongoDB. Confirm the database is running, the internal hostname is correct, and both services share a Docker network. Also check TLS settings.';
    return respond(503, { ok: false, message });
  }
}
