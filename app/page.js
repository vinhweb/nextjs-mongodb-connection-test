'use client';

import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function testConnection() {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('/api/test-db', { cache: 'no-store' });
      setResult(await response.json());
    } catch {
      setResult({ ok: false, message: 'Could not reach the app server. Check the deployment and try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <p className="eyebrow">NEXT.JS + MONGODB</p>
      <h1>Check your connection.</h1>
      <p className="intro">Test whether this server can connect to MongoDB using its configured connection URL.</p>
      <button onClick={testConnection} disabled={loading}>{loading ? 'Connecting…' : 'Test MongoDB connection'}</button>
      <section aria-live="polite" aria-busy={loading}>
        {result && <div className={`result ${result.ok ? 'success' : 'error'}`}>
          <h2>{result.ok ? 'Connected' : 'Connection failed'}</h2>
          <p>{result.message}</p>
          {result.durationMs !== undefined && <p className="timing">{result.durationMs} ms</p>}
        </div>}
      </section>
      <p className="note">Runs a server-side ping. No database records are changed.</p>
      <footer><a href="/api/health">App health</a><span>·</span><a href="/api/test-db">JSON connection test</a></footer>
    </main>
  );
}
