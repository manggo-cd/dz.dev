import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";

export default function BlogPost() {
  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", opacity: 0.95 }}>
        <div className="max-w-3xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/blog" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors text-xs">
              <ArrowLeft className="w-4 h-4" />
              <span>back to blog</span>
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-8 pt-28 pb-16">
        <header className="mb-12">
          <p className="text-xs text-zinc-600 mb-2">2025-12-14</p>
          <h1 className="text-2xl font-bold mb-4 tracking-tight underline italic">List of good tools</h1>
        </header>

        <div className="space-y-8 text-sm">
          {/* Note */}
          <section>
            <h2 className="text-base font-bold mb-4 text-zinc-300">Note:</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              There are so many things in tech that I use with hesitancy like:
            </p>
            <ul className="space-y-2 text-zinc-500 list-disc list-inside mb-4">
              <li>AWS (thanks for making my egress / ingress fees {'>'}{'>'}'{'>'} my compute rlly awesome)</li>
              <li>Databases (think of the wasted CPU cycles)</li>
              <li>NixOS (I really hate that it&apos;s the best option for maintaining a clean setup)</li>
              <li>much more…</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed">
              That I want to list out the things I actually enjoy using.
            </p>
          </section>

          {/* List */}
          <section>
            <h2 className="text-base font-bold mb-6 text-zinc-300">List:</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Helix.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Not having to spend 8 hours configuring Helix is the best part about it. I don&apos;t care that it doesn&apos;t support terminals because I don&apos;t have to sit in front of my coworkers like a freak explaining &apos;oh i just need 8 hours to install my Nvim plugins&apos;. Genuinely such a great thing to exist.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Victoria Logs / Metrics.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  If you use Loki or Prometheus you should just switch. It&apos;s so easy to setup and performs so much better.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Devenv.sh on NixOS.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  I know there&apos;s like a huge fanbase for NixOS, but the docs suck so so so much. All I want is to be able to isolate every projects toolchains from each other so I don&apos;t deal with problems later. Surely NixOS is not the best iteration of this concept, but it&apos;s what we have. Devenv.sh makes Nix be actually useable and I really appreciate the devs for making it.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Sqlite.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Databases are so incredibly unnecessary until you start doing distributed computing. If you&apos;re doing something that&apos;s computationally easy and/or at low scale save yourself any headache and just use Sqlite.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Opus 4.5.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Is the smartest AI as of Dec 2025. It&apos;s actually rlly good and has made my job so much easier.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">ChatGPT Atlas.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  For the exclusive purpose of telling it to do all of my homework. I literally open my laptop on Fridays, then paste instructions for how to open canvas and do all of my online textbooks etc. and it literally just does it.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Rust Soychest!</h3>
                <p className="text-zinc-500 leading-relaxed">
                  You should only use Rust if you&apos;ve written in C++. Without that pre-requisite using Rust is like turning 21 and enjoying a 100 yr bottle of wine. It&apos;s hard to motivate why it&apos;s so much better unless you&apos;ve tried an alternative. Although I still do think templates are superior to macros.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Chisel / SpinalHDL.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Have you tried writing in SystemVerilog / VHDL?
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">K8S.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  In the big 2025, I still think K8S is the singlehandedly best technology for deploying anything at scale. I refuse to use Railway or Railway-esque services simply because K8S is just already user friendly, straight-forward, and feature-rich.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">K9S.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  The only issue with K8S is the repetitive commands. K9S solves this and also saves me like min 5 hours / week whenever i&apos;m doing infra shit. If i&apos;m ever a billionaire i&apos;m retiring the guy who made it.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Kalshi.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Have you looked at Polymarket docs?
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Svelte.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  So simple and so good.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-1">Pixotine.</h3>
                <p className="text-zinc-500 leading-relaxed">
                  I don&apos;t use nicotine consistently but sometimes it&apos;s nice to have on a sunny day when working. I think Nicotine toothpicks are the penultimate iteration of nicotine administration and I think Pixotine is the best brand.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ borderColor: "var(--border-color)" }}>
        <p className="text-xs text-zinc-600 text-center">
          © 2025 Daniel Zhou · Vancouver, BC
        </p>
      </footer>
    </div>
  );
}




