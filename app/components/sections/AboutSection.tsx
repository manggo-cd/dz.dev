const interests = ["Basketball", "Cyberpunk", "Poker", "Snowboarding"];

const stack =
  "Java · TypeScript · Python · C/C++ · Go · React · SpringBoot · Next.js · PostgreSQL · AWS · Docker";

const currentRotation = [
  "Pink Toes - Childish Gambino",
  "Relax and Run - Blood Orange",
  "Gravity - John Mayer",
];

export function AboutSection() {
  return (
    <section>
      <h2 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">ABOUT</h2>
      <div className="border-l-2 border-zinc-800 pl-6 space-y-6">
        <p className="text-base text-zinc-300 leading-relaxed">
          Hi, I&apos;m Daniel, a 3rd year CS student at the University of
          British Columbia. I&apos;m currently reading about system
          architecture; turns out milliseconds matter when you&apos;re not the
          one waiting.
        </p>

        <div>
          <h3 className="text-xs text-zinc-600 mb-3">INTERESTS</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 border border-zinc-800 text-xs text-zinc-500"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs text-zinc-600 mb-3">STACK</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">{stack}</p>
        </div>

        <div>
          <h3 className="text-xs text-zinc-600 mb-3">CURRENT ROTATION</h3>
          <div className="text-xs text-zinc-600 space-y-1">
            {currentRotation.map((song) => (
              <div key={song}>{song}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





