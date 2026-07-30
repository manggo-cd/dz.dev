import type { Metadata } from "next";
import { BlogShell } from "../components/BlogShell";

export const metadata: Metadata = {
  title: "Blog — Daniel Zhou",
};

const POSTS = [
  { slug: "geese", title: "geese", date: "2026.07" },
  { slug: "list-of-good-tools", title: "a list of good tools", date: "2025.12" },
  { slug: "about-and-contact", title: "about & contact", date: "2025.12" },
];

export default function BlogIndex() {
  return (
    <BlogShell>
      <div className="blog-index">
        <div className="phead">blog</div>
        {POSTS.map((p) => (
          <a className="post" href={`/blog/${p.slug}`} key={p.slug}>
            <span className="date">{p.date}</span>
            <h3>{p.title}</h3>
          </a>
        ))}
      </div>
    </BlogShell>
  );
}
