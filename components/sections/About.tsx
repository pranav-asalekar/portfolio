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
              I'm a software engineer with a background spanning backend
              development, data analysis, and business intelligence.
            </p>

            <p>
              I enjoy working on systems where software, data, and practical
              problem-solving come together — from APIs and data workflows to
              anomaly detection and AI-powered applications.
            </p>

            <p>
              My approach is simple: understand the problem, keep the
              architecture practical, and build software that is reliable,
              maintainable, and useful.
            </p>
          </div>

          <div className="border-l border-zinc-200 pl-6">
            <p className="font-mono text-xs text-zinc-400">
              current_focus
            </p>

            <ul className="mt-4 space-y-3 font-mono text-xs text-zinc-600">
              <li>→ Backend Engineering</li>
              <li>→ Data & AI Systems</li>
              <li>→ Distributed Systems</li>
              <li>→ Industrial IoT</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}