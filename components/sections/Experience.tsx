import { Container, SectionHeading } from "@/components/ui";

const experience = [
  {
    period: "2025 — Present",
    role: "Software Engineer",
    company: "Pivotol AI",
    location: "Pune, India",
    description:
      "Working on backend systems and productization of anomaly alerting capabilities for industrial IoT applications.",
    technologies: ["Python", "MongoDB", "XGBoost", "Node-RED"],
  },
  {
    period: "Apr 2025 — May 2025",
    role: "Python Developer",
    company: "ARG Technologies",
    location: "Pune, India",
    description:
      "Worked on Python-based backend development and contributed to application and data workflows.",
    technologies: ["Python", "SQL", "APIs"],
  },
  {
    period: "Nov 2019 — Aug 2022",
    role: "System Engineer",
    company: "Infosys",
    location: "India",
    description:
      "Worked on enterprise technology solutions, data workflows, application support, and software engineering activities.",
    technologies: ["SQL", "Python", "Power BI", "ServiceNow"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-200 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          number="03 / EXPERIENCE"
          title="career.log"
          subtitle="A timeline of the roles and engineering work that shaped my experience."
        />

        <div className="border-y border-zinc-200">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className={`grid gap-6 py-10 md:grid-cols-[180px_1fr] md:gap-12 ${
                index !== experience.length - 1
                  ? "border-b border-zinc-200"
                  : ""
              }`}
            >
              <div>
                <p className="font-mono text-xs text-zinc-500">
                  {item.period}
                </p>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  {item.location}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                  {item.role}
                </h3>

                <p className="mt-1 font-mono text-sm text-zinc-500">
                  @ {item.company}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-[10px] text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}