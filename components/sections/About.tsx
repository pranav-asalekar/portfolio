import { Container, SectionHeading } from "@/components/ui";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          number="05 / ABOUT"
          title="about.md"
          subtitle="A little context beyond the technologies."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_280px] md:gap-16">
          <div className="max-w-3xl space-y-6 text-base leading-8 text-zinc-600">
            <p>
              I'm a software engineer with a background in data analysis,
              business intelligence, and software development.
            </p>

            <p>
              My work sits at the intersection of software and data. I enjoy
              building backend workflows, working with data systems, and
              turning technical problems into practical solutions.
            </p>

            <p>
              I'm particularly interested in backend engineering, data and AI
              systems, and applications where reliable software can turn
              complex data into something useful.
            </p>

            <p>
              Outside of individual technologies, I care about writing
              maintainable code, understanding the problem before solving it,
              and keeping engineering solutions practical.
            </p>
          </div>

          <div className="border-l border-zinc-200 pl-6">
            <p className="font-mono text-xs text-zinc-400">
              current_focus
            </p>

            <ul className="mt-4 space-y-3 font-mono text-xs text-zinc-600">
              <li>→ Backend Engineering</li>
              <li>→ Data & AI Systems</li>
              <li>→ Industrial IoT</li>
              <li>→ Data Platforms</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}