import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/app/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group border border-zinc-800 hover:border-zinc-600 transition-all p-5 bg-black"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-base font-medium group-hover:text-zinc-300 transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-0.5 border border-zinc-800 text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}





