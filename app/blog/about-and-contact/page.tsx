import type { Metadata } from "next";
import { BlogShell } from "../../components/BlogShell";

export const metadata: Metadata = {
  title: "About & Contact — Daniel Zhou",
};

export default function AboutAndContact() {
  return (
    <BlogShell backHref="/blog" backLabel="blog">
      <article className="article">
        <div className="art-date">Dec 13, 2025 · updated Jul 29, 2026</div>
        <h1>About &amp; Contact</h1>
        <div className="rule" />

        <p className="art-note">Updated today: refreshed a few thoughts and added a section on giving back.</p>

        <p>
          <em>TW: J*bs and Empl*yment</em>
        </p>

        <p>
          Contact:{" "}
          <a className="inline" href="mailto:danielzhou.nc@gmail.com">
            danielzhou.nc #at# gmail |dot| com
          </a>
        </p>

        <h2>In short:</h2>

        <h3>Professionally:</h3>
        <ul>
          <li>Interned a few times across backend, fullstack, and research</li>
          <li>Worked at startups during school</li>
          <li>
            Strongly believe there is no domain that is more interesting than another. Although I
            tend to gravitate towards systems-ish things
          </li>
          <li>
            Work on unfinished side projects all the time. Though I might just finish one soon!
          </li>
          <li>
            Doing a CS + Masters in Management dual degree at UBC. The business classes are...
            interesting
          </li>
        </ul>

        <h3>Personally:</h3>
        <ul>
          <li>I grew up in Vancouver, and I feel privileged and blessed to call it home.</li>
          <li>
            Vancouver is incredibly diverse, in both what it offers and what it lacks. Growing up in
            an abundance of nature and difference, then travelling to places with a lack thereof,
            I&apos;ve come to appreciate all walks of life and what it&apos;s like to live in both a
            big and a small world. A lot of my opinions come from those experiences.
          </li>
          <li>
            I love the outdoors. I&apos;ve played sports my whole life: soccer, swimming, football,
            badminton, snowboarding, skating, and hiking, with basketball and lifting being the
            mainstays. Many of them I&apos;ve played in an organized capacity.
          </li>
          <li>
            Music has always been an integral part of my life. I grew up on piano, performing up to
            ARCT levels; nowadays I play electric guitar and make digital music. A big enjoyer of all
            tunes. You can{" "}
            <a
              className="inline"
              href="https://open.spotify.com/user/6919w5dthkvt6xplcxs26wzt6?si=649a82b2e7d5482f"
              target="_blank"
              rel="noopener noreferrer"
            >
              find me on Spotify
            </a>
            , and I&apos;m always open to{" "}
            <a className="inline" href="/suggest">
              recommendations
            </a>
            .
          </li>
          <li>I speak four languages.</li>
          <li>
            I studied CS seeking career fulfillment. I won&apos;t pretend the money doesn&apos;t
            matter, and honestly it drives a lot of my decisions, but a part of me knows I&apos;ll be
            more content doing work that carries some sense of societal contribution. That&apos;s a
            hard place to get to, and it might take years, but maybe somewhere down the line I&apos;ll
            get there. In the meantime, if I can help even just a few people out there in my lifetime,
            that&apos;ll be good enough for me.
          </li>
        </ul>

        <h2>Giving back:</h2>
        <p>
          One constant throughout my life has been helping the people around me. It&apos;s a core
          part of who I am, and it&apos;s shaped a lot of the above.
        </p>
        <ul>
          <li>
            I founded the{" "}
            <a
              className="inline"
              href="https://peermentor.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Peer Mentor Association
            </a>{" "}
            when I was younger, during COVID. Honestly, I started it because I was really lonely back
            then, and I wanted to make a real change in the world. With what I knew at the time, I
            slowly built it up: it began as manual registration, and I taught myself how to build my
            first website with no formal CS education. All I knew was that I wanted to make a
            difference, and slowly over time, as my skills and confidence grew, so did my initiative.
            It&apos;s since grown to involve over 700 people. Along the way we&apos;ve raised
            truckloads of supplies for the Lytton wildfires (partnered with a local radio station),
            put together care packages for the children and staff at BC Children&apos;s Hospital
            during COVID, run donation drives for institutions like a drug rehabilitation center in
            Vancouver, and hosted summer camps.
          </li>
          <li>
            I spent years volunteering at ECBC in Burnaby, the church I grew up at and where so many
            of my formative years were spent. I spent summers helping run summer camps for hundreds of
            children, served weekly with Sunday school, helped with seasonal performances, and more.
          </li>
          <li>I was president of the service club at my high school, among other things.</li>
        </ul>

        <h2>Favorite</h2>

        <h3>Songs (In no order):</h3>
        <ul>
          <li>Perfect — Smashing Pumpkins</li>
          <li>The Resistance — Drake</li>
          <li>Running in the Night — FM-84</li>
          <li>Entombed — Deftones</li>
          <li>Landslide — Fleetwood Mac</li>
          <li>The Blonde — TV Girl</li>
          <li>KAPITOL DENIM — LUCKI</li>
          <li>Clouds — Pastel Ghost</li>
        </ul>

        <h3>Foods:</h3>
        <ul>
          <li>Chinese (obviously, no bias)</li>
          <li>Italian</li>
          <li>Malaysian</li>
        </ul>

        <h3>Quote:</h3>
        <p>
          <em>
            &quot;the [drug] addict is just as tantalized by the spoon as he is the [drug]&quot;
          </em>{" "}
          - Some Random Twitter User
        </p>

        <h3>Movie / Book / Show:</h3>
        <p>Casino / Brothers Karamazov / Severance</p>

        <h3>Languages:</h3>
        <p>R*st &amp; C++ (specifically Variadic templates)</p>

        <h3>Animal:</h3>
        <p>Penguin</p>

        <h3>Thing to hate on:</h3>
        <p>Twitter tech larpers</p>

        <h3>Game:</h3>
        <p>League of Legends :P</p>
      </article>
    </BlogShell>
  );
}
