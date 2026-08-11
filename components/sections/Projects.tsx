import { Container, SectionHeading } from "@/components/ui";

const projects = [
  {
    number: "01",
    type: "PROFESSIONAL / INDUSTRIAL IOT",
    name: "EdgeStream",
    title: "Anomaly Detection & Alerting",
    description:
      "Contributed to the productization of an anomaly alerting workflow for industrial IoT telemetry, covering feature engineering, model inference, excursion tracking, flatline detection, and alert state management.",
    tags: ["Python", "MongoDB", "XGBoost", "Node-RED"],
    status: "Professional work",
  },
  {
    number: "02",
    type: "OPEN SOURCE / DATA",
    name: "Vyoma",
    title: "Weather Intelligence Platform",
    description:
      "An open-source weather intelligence platform focused on collecting, processing, and transforming weather data into useful insights through a data-driven architecture.",
    tags: ["Python", "APIs", "Data Engineering"],
    status: "In development",
  },
  {
    number: "03",
    type: "AI / NLP",
    name: "AI Text Summarizer",
    title: "Text Summarization Application",
    description:
      "A lightweight NLP application that uses transformer-based models to summarize text through a Python backend and a simple interactive interface.",
    tags: ["Python", "FastAPI", "Hugging Face", "Streamlit"],
    status: "Personal project",
  },
  {
    number: "04",
    type: "DATA ANALYSIS",
    name: "Reddit Toxic Community Analysis",
    title: "Toxicity & Community Analysis",
    description:
      "A data analysis project exploring toxic language and community-level patterns across Reddit data using data processing, exploratory analysis, and visualization techniques.",
    tags: ["Python", "Pandas", "NLP", "Data Analysis"],
    status: "Academic / Personal",
  },
  {
    number: "05",
    type: "DATA ANALYSIS",
    name: "Fatal Road Accidents",
    title: "Road Accident Analysis",
    description:
      "An analytical project investigating patterns and contributing factors in fatal road accidents using structured datasets and data visualization.",
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
    status: "Academic / Personal",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-200 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          number="02 / SELECTED WORK"
          title="projects/"
          subtitle="A selection of engineering, AI, and data-focused work."
        />

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group py-10 md:py-12"
            >
              <div className="grid gap-6 md:grid-cols-[80px_1fr_150px] md:gap-8">
                {/* Project number */}
                <div className="font-mono text-xs text-zinc-400">
                  {project.number}
                </div>

                {/* Project information */}
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    {project.type}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-base font-medium text-zinc-700">
                    {project.title}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600">
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

                {/* Status */}
                <div className="font-mono text-[10px] text-zinc-400 md:text-right">
                  {project.status}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}