import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";

const projects = [
  {
    number: "01",
    name: "EdgeStream",
    title: "Anomaly Detection & Alerting Platform",
    description:
      "Productization of an anomaly alerting workflow for industrial IoT telemetry, including feature engineering, model inference, excursion tracking, and alert state management.",
    tags: ["Python", "MongoDB", "XGBoost", "Node-RED"],
    type: "Industrial IoT",
  },
  {
    number: "02",
    name: "Vyoma",
    title: "Weather Intelligence Platform",
    description:
      "An open-source weather intelligence platform focused on collecting, processing, and presenting meaningful weather information through a clean data-driven architecture.",
    tags: ["Python", "APIs", "Data Engineering"],
    type: "Open Source",
  },
  {
    number: "03",
    name: "AI Text Summarizer",
    title: "AI-powered Text Summarization",
    description:
      "A lightweight NLP application for summarizing text using a Python backend, transformer-based models, and a simple web interface.",
    tags: ["Python", "FastAPI", "Hugging Face", "Streamlit"],
    type: "AI / NLP",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-200 py-24 md:py-32">
      <Container>
        <SectionHeading
          number="02 / SELECTED WORK"
          title="projects/"
          subtitle="A selection of systems, applications, and data-focused work I've built or contributed to."
        />

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group py-10 md:py-12"
            >
              <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:gap-8">
                <div className="font-mono text-xs text-zinc-400">
                  {project.number}
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-base font-medium text-zinc-700">
                    {project.title}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-[10px] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:pt-1">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 font-mono text-xs text-zinc-500 transition-colors group-hover:text-zinc-950"
                  >
                    view project
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}