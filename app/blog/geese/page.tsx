import type { Metadata } from "next";
import { BlogShell } from "../../components/BlogShell";

export const metadata: Metadata = {
  title: "Geese — Daniel Zhou",
};

export default function Geese() {
  return (
    <BlogShell backHref="/blog" backLabel="blog">
      <article className="article">
        <div className="art-date">July 29, 2026</div>
        <h1>Geese</h1>
        <div className="rule" />

        <p>
          Some animals (like geese, for example) have eyes on opposite sides of their head. The way
          they perceive the world, the way their brain constructs meanings from the patterns it
          receives from its sensory organs, must be so different from ours.
        </p>

        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/blog/goose.jpg" alt="Close-up of a Canada goose" />
          <figcaption>Image credit: iNaturalist.</figcaption>
        </figure>

        <p>
          Now, imagine the collection of <em>all</em> the ways anyone (or <em>anything</em>) has ever
          felt. Has ever existed. The totality of existence, ever.
        </p>

        <p>
          Think of the ways you live, the way you interact with everything that you have ever known.
          The way the skies are blue. The way a rainbow shines through (with some help from the Sun)
          pierces through clouds after a rainy day. The way the sheet of rain looks funnily animated
          in the distance of an impending rain cloud. We go through our lives taking these for
          granted. It might very well be that amongst that set of collective existence we just
          posited, we make up a mere fraction of it.
        </p>

        <p>
          The way we perceive the world is a fraction of the superset of any being that has ever
          lived, existed, and perceived.
        </p>

        <p>
          The way you see the rooftops of the dainty little houses through the rain-pattered bus
          window on your daily commute home might be the only way anything ever sees them. No wonder
          they&apos;re pretty.
        </p>
      </article>
    </BlogShell>
  );
}
