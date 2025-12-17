import type { Experience } from "@/app/data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group border-l-2 border-zinc-800 hover:border-zinc-600 transition-all">
      <div className="pl-6 py-4 hover:pl-7 transition-all">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-base mb-1 group-hover:text-zinc-300 transition-colors">
              {experience.role}
            </h3>
            <p className="text-sm text-zinc-500">{experience.company}</p>
          </div>
          <div className="text-xs text-zinc-600 whitespace-nowrap">
            {experience.period}
          </div>
        </div>
      </div>
    </div>
  );
}

