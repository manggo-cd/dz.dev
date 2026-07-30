import { ThemeToggleButton } from "./ThemeToggleButton";

export function BlogShell({
  children,
  backHref = "/",
  backLabel = "daniel zhou",
}: {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <>
      <div className="bg">
        <div className="glow" />
        <div className="grid" />
        <div className="glyphs">
          <span className="g1">△</span>
          <span className="g2">○</span>
          <span className="g3">✕</span>
        </div>
      </div>
      <div className="scan" />
      <div className="grain" />

      <div className="article-wrap">
        <nav className="article-nav">
          <a className="back" href={backHref}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
            {backLabel}
          </a>
          <ThemeToggleButton />
        </nav>
        {children}
        <footer>© 2026 daniel zhou</footer>
      </div>
    </>
  );
}
