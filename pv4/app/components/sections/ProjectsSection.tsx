import { ProjectCard } from "@/app/components/ui";
import { projects } from "@/app/data";

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

