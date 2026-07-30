import type { Metadata } from "next";
import { BlogShell } from "../components/BlogShell";
import { SuggestForm } from "../components/SuggestForm";

export const metadata: Metadata = {
  title: "Suggest a song — Daniel Zhou",
};

export default function Suggest() {
  return (
    <BlogShell backHref="/blog/about-and-contact" backLabel="about">
      <section className="article">
        <div className="art-date">recommendations</div>
        <h1>Suggest a song</h1>
        <div className="rule" />
        <p className="suggest-intro">
          Music&apos;s a big part of my life and I&apos;m always hunting for something new. Drop a
          song, an artist, a playlist, whatever you think I should hear.
        </p>
        <SuggestForm />
      </section>
    </BlogShell>
  );
}
