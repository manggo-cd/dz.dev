import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xs tracking-[0.3em] font-bold">DKN</div>
        <div className="flex gap-6 text-xs tracking-wider">
          <Link
            href="https://github.com/manggo-cd"
            className="hover:text-zinc-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </Link>
          <Link
            href="https://www.linkedin.com/in/dzhou05/"
            className="hover:text-zinc-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </Link>
          <Link
            href="mailto:dzhou05@student.ubc.ca"
            className="hover:text-zinc-400 transition-colors"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}





