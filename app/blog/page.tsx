import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

export default function BlogPage() {
  const posts = [
    {
      slug: "list-of-good-tools",
      title: "List of good tools",
      description: "Things I actually enjoy using.",
      date: "Dec 14, 2025",
    },
    {
      slug: "about-and-contact",
      title: "About & Contact",
      description: "The extended version.",
      date: "Dec 13, 2025",
    },
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", opacity: 0.95 }}>
        <div className="max-w-3xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors text-xs">
              <ArrowLeft className="w-4 h-4" />
              <span>back</span>
            </Link>
          </div>
          <div className="flex gap-6 text-xs tracking-wider">
            <a href="https://github.com/manggo-cd" className="hover:opacity-60 transition-opacity">github</a>
            <a href="https://www.linkedin.com/in/dzhou05/" className="hover:opacity-60 transition-opacity">linkedin</a>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-8 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">Blog</h1>
        <p className="text-sm text-zinc-500 mb-12">Thoughts, learnings, and occasional rants.</p>

        <div className="space-y-1">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="group block border-l-2 border-zinc-800 hover:border-zinc-600 transition-all"
            >
              <div className="pl-6 py-5 hover:pl-7 transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg mb-1 group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-zinc-500 mb-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-700 whitespace-nowrap">{post.date}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ borderColor: "var(--border-color)" }}>
        <p className="text-xs text-zinc-600 text-center">
          © 2025 Daniel Zhou · Vancouver, BC
        </p>
      </footer>
    </div>
  );
}

