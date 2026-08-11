import { Container, SectionHeading } from "@/components/ui";

const stack = [
  {
    key: "languages",
    values: ["Python", "SQL", "C#", "R"],
  },
  {
    key: "backend",
    values: ["FastAPI", "REST APIs", "Flask"],
  },
  {
    key: "data",
    values: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Oracle",
      "Power BI",
      "Pandas",
    ],
  },
  {
    key: "engineering",
    values: [
      "Docker",
      "Git",
      "ETL",
      "Data Modelling",
      "Data Warehousing",
    ],
  },
  {
    key: "cloud",
    values: ["Azure", "AWS", "Databricks"],
  },
  {
    key: "tools",
    values: ["Jira", "ServiceNow", "SSIS", "SSRS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-zinc-200 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          number="04 / TECHNOLOGY"
          title="stack.json"
          subtitle="The technologies and engineering tools I work with across backend, data, and cloud environments."
        />

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          {/* File header */}
          <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zinc-300" />
              <span className="font-mono text-xs text-zinc-500">
                stack.json
              </span>
            </div>

            <span className="font-mono text-[10px] text-zinc-400">
              JSON
            </span>
          </div>

          {/* JSON-style content */}
          <div className="p-6 font-mono text-sm leading-8 md:p-8">
            <p className="text-zinc-400">&#123;</p>

            {stack.map((group, index) => (
              <div key={group.key} className="ml-4 md:ml-8">
                <div>
                  <span className="text-zinc-500">
                    &quot;{group.key}&quot;
                  </span>

                  <span className="text-zinc-400">: [</span>
                </div>

                <div className="ml-6 flex flex-wrap gap-x-3 gap-y-1">
                  {group.values.map((value, valueIndex) => (
                    <span key={value}>
                      <span className="text-zinc-800">
                        &quot;{value}&quot;
                      </span>

                      {valueIndex < group.values.length - 1 && (
                        <span className="text-zinc-400">,</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="text-zinc-400">
                  ]
                  {index < stack.length - 1 && ","}
                </div>
              </div>
            ))}

            <p className="text-zinc-400">&#125;</p>
          </div>
        </div>
      </Container>
    </section>
  );
}