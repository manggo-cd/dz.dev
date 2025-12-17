import { ExperienceCard } from "@/app/components/ui";
import { experiences } from "@/app/data";

export function WorkSection() {
  return (
    <section>
      <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">WORK</h2>
      <div className="space-y-1">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>
    </section>
  );
}

