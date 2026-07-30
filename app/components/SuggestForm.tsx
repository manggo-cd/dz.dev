"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export function SuggestForm() {
  const [song, setSong] = useState("");
  const [from, setFrom] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!song.trim() || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ song, from }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setSong("");
      setFrom("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="suggest-done">
        <div className="suggest-thanks">
          <span className="glyphs">△ ○ ✕ □</span>
          <strong>thank you!</strong>
          <span className="msg">
            got your suggestion and it means a lot. i&apos;ll give it a real listen.
          </span>
        </div>
        <button type="button" className="again" onClick={() => setStatus("idle")}>
          suggest another
        </button>
      </div>
    );
  }

  return (
    <form className="suggest-form" onSubmit={submit}>
      <div className="suggest-field">
        <label htmlFor="song">song / artist / playlist</label>
        <textarea
          id="song"
          className="suggest-textarea"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="e.g. Landslide — Fleetwood Mac"
          maxLength={500}
          required
        />
      </div>
      <div className="suggest-field">
        <label htmlFor="from">your name (optional)</label>
        <input
          id="from"
          className="suggest-input"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="anon"
          maxLength={120}
        />
      </div>
      {status === "error" && (
        <span className="suggest-error">something broke — try again in a sec.</span>
      )}
      <button className="suggest-btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "sending…" : "send"}
      </button>
    </form>
  );
}
