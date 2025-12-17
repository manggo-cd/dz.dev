import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section>
      <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">CONTACT</h2>
      <div className="space-y-4">
        <p className="text-sm text-zinc-400">
          dzhou05 (at) student.ubc (dot) ca
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="https://github.com/manggo-cd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-xs">github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/dzhou05/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-xs">linkedin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}




