"use client";

import { useEffect, useState } from "react";

type Entry = { song: string; from: string | null; at: string };

export default function AdminSuggestions() {
  const [key, setKey] = useState("");
  const [list, setList] = useState<Entry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function load(k: string) {
    if (!k) return;
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("/api/suggestions", { headers: { "x-admin-key": k } });
      if (res.status === 401) {
        setErr("wrong password");
        setList(null);
        localStorage.removeItem("admin-key");
        return;
      }
      const data = await res.json();
      setList(data.suggestions ?? []);
      localStorage.setItem("admin-key", k);
    } catch {
      setErr("couldn't load — is the dev server running?");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem("admin-key");
    if (saved) {
      setKey(saved);
      load(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fmt(iso: string) {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  }

  return (
    <>
      <div className="bg">
        <div className="glow" />
        <div className="grid" />
      </div>
      <div className="scan" />
      <div className="grain" />
      <div className="article-wrap">
        <nav className="article-nav">
          <a className="back" href="/">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
            daniel zhou
          </a>
        </nav>

        <section className="article">
          <div className="art-date">admin</div>
          <h1>Suggestions</h1>
          <div className="rule" />

          <form
            className="suggest-form"
            onSubmit={(e) => {
              e.preventDefault();
              load(key);
            }}
          >
            <div className="suggest-field">
              <label htmlFor="key">password</label>
              <input
                id="key"
                className="suggest-input"
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="admin token"
              />
            </div>
            {err && <span className="suggest-error">{err}</span>}
            <button className="suggest-btn" type="submit" disabled={loading}>
              {loading ? "loading…" : "view"}
            </button>
          </form>

          {list && (
            <div className="sug-list">
              <div className="sug-count">
                {list.length} {list.length === 1 ? "suggestion" : "suggestions"}
              </div>
              {list.length === 0 && <p className="suggest-intro">nothing yet.</p>}
              {list.map((e, i) => (
                <div className="sug-item" key={i}>
                  <div className="sug-song">{e.song}</div>
                  <div className="sug-meta">
                    {e.from ? `from ${e.from}` : "anon"} · {fmt(e.at)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <footer>© 2026 daniel zhou</footer>
      </div>
    </>
  );
}
