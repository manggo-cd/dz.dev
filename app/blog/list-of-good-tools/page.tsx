import type { Metadata } from "next";
import { BlogShell } from "../../components/BlogShell";

export const metadata: Metadata = {
  title: "A list of good tools — Daniel Zhou",
};

const TOOLS: { name: string; body: string }[] = [
  {
    name: "Helix.",
    body: "Not having to spend 8 hours configuring Helix is the best part about it. I don't care that it doesn't support terminals because I don't have to sit in front of my coworkers like a freak explaining 'oh i just need 8 hours to install my Nvim plugins'. Genuinely such a great thing to exist.",
  },
  {
    name: "Victoria Logs / Metrics.",
    body: "If you use Loki or Prometheus you should just switch. It's so easy to setup and performs so much better.",
  },
  {
    name: "Devenv.sh on NixOS.",
    body: "I know there's like a huge fanbase for NixOS, but the docs suck so so so much. All I want is to be able to isolate every projects toolchains from each other so I don't deal with problems later. Surely NixOS is not the best iteration of this concept, but it's what we have. Devenv.sh makes Nix be actually useable and I really appreciate the devs for making it.",
  },
  {
    name: "Sqlite.",
    body: "Databases are so incredibly unnecessary until you start doing distributed computing. If you're doing something that's computationally easy and/or at low scale save yourself any headache and just use Sqlite.",
  },
  {
    name: "Opus 4.5.",
    body: "Is the smartest AI as of Dec 2025. It's actually rlly good and has made my job so much easier.",
  },
  {
    name: "ChatGPT Atlas.",
    body: "For the exclusive purpose of bullying it into being my overcaffeinated TA. I open my laptop on Fridays, paste instructions for how to navigate Canvas and the online textbooks, and it keeps me on rails while I actually do the work.",
  },
  {
    name: "Rust Soychest!",
    body: "You should only use Rust if you've written in C++. Without that pre-requisite using Rust is like turning 21 and enjoying a 100 yr bottle of wine. It's hard to motivate why it's so much better unless you've tried an alternative. Although I still do think templates are superior to macros.",
  },
  {
    name: "Chisel / SpinalHDL.",
    body: "Have you tried writing in SystemVerilog / VHDL?",
  },
  {
    name: "K8S.",
    body: "In the big 2025, I still think K8S is the singlehandedly best technology for deploying anything at scale. I refuse to use Railway or Railway-esque services simply because K8S is just already user friendly, straight-forward, and feature-rich.",
  },
  {
    name: "K9S.",
    body: "The only issue with K8S is the repetitive commands. K9S solves this and also saves me like min 5 hours / week whenever i'm doing infra shit. If i'm ever a billionaire i'm retiring the guy who made it.",
  },
  {
    name: "Kalshi.",
    body: "Have you looked at Polymarket docs?",
  },
  {
    name: "Svelte.",
    body: "So simple and so good.",
  },
  {
    name: "Pixotine.",
    body: "I don't use nicotine consistently but sometimes it's nice to have on a sunny day when working. I think Nicotine toothpicks are the penultimate iteration of nicotine administration and I think Pixotine is the best brand.",
  },
];

export default function ListOfGoodTools() {
  return (
    <BlogShell backHref="/blog" backLabel="blog">
      <article className="article">
        <div className="art-date">Dec 14, 2025</div>
        <h1>A list of good tools</h1>
        <div className="rule" />

        <h2>Note:</h2>
        <p>There are so many things in tech that I use with hesitancy like:</p>
        <ul>
          <li>AWS (thanks for making my egress / ingress fees &gt;&gt;&gt; my compute rlly awesome)</li>
          <li>Databases (think of the wasted CPU cycles)</li>
          <li>NixOS (I really hate that it&apos;s the best option for maintaining a clean setup)</li>
          <li>much more…</li>
        </ul>
        <p>That I want to list out the things I actually enjoy using.</p>

        <h2>List:</h2>
        {TOOLS.map((t) => (
          <div key={t.name}>
            <h3>{t.name}</h3>
            <p>{t.body}</p>
          </div>
        ))}
      </article>
    </BlogShell>
  );
}
