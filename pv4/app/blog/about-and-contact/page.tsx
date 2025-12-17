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
          <p className="text-xs text-zinc-600 mb-2">2025-12-13</p>
          <h1 className="text-2xl font-bold mb-4 tracking-tight underline">About & Contact</h1>
        </header>

        <div className="space-y-8 text-sm">
          {/* Warning */}
          <p className="text-zinc-500 italic">TW: J*bs and Empl*yment</p>

          {/* Contact */}
          <p className="text-zinc-400">
            Contact: danielzhou.nc #at# gmail |dot| com
          </p>

          {/* In Short */}
          <section>
            <h2 className="text-base font-bold mb-4 text-zinc-300">In short:</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Professionally:</h3>
                <ul className="space-y-2 text-zinc-500 list-disc list-inside">
                  <li>Interned a few times across backend, fullstack, and research</li>
                  <li>Worked at startups during school</li>
                  <li>Strongly believe there is no domain that is more interesting than another. Although I tend to gravitate towards systems-ish things</li>
                  <li>Work on unfinished side projects all the time. Though I might just finish one soon!</li>
                  <li>Doing a CS + Masters in Management dual degree at UBC. The business classes are... interesting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Personally:</h3>
                <p className="text-zinc-600 italic">Coming soon...</p>
              </div>
            </div>
          </section>

          {/* Favorites */}
          <section>
            <h2 className="text-base font-bold mb-4 text-zinc-300">Favorite</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Songs (In no order):</h3>
                <p className="text-zinc-600 italic">Coming soon...</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Foods:</h3>
                <p className="text-zinc-600 italic">Coming soon...</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Quote:</h3>
                <p className="text-zinc-500 italic">&quot;the [drug] addict is just as tantalized by the spoon as he is the [drug]&quot; - Some Random Twitter User</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Movie / Book / Show:</h3>
                <p className="text-zinc-500">Pusher / Brothers Karamazov / Tatami Galaxy</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Languages:</h3>
                <p className="text-zinc-500">R*st & C++ (specifically Variadic templates)</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Animal:</h3>
                <p className="text-zinc-500">Duck (undisputable)</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Thing to hate on:</h3>
                <p className="text-zinc-500">Twitter tech larpers</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-zinc-400">Game:</h3>
                <p className="text-zinc-500">League of Legends :P</p>
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



