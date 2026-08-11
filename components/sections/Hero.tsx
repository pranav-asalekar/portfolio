import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge, Container } from "@/components/ui";

const technologies = [
  "Python",
  "SQL",
  "MongoDB",
  "Power BI",
  "Azure",
  "Databricks",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="flex min-h-[calc(100vh-4rem)] items-center py-20 md:py-24">
          <div className="w-full max-w-4xl">
            {/* Technical label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-400">
                01 / INTRODUCTION
              </span>

              <span className="h-px w-12 bg-zinc-300" />
            </div>

            {/* Name */}
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-6xl md:text-7xl lg:text-8xl">
              Pranav
              <br />
              Asalekar
            </h1>

            {/* Role + positioning */}
            <div className="mt-8">
              <p className="font-mono text-sm text-zinc-500">
                Software Engineer · Data & AI
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
                I build backend systems, data-driven applications, and
                practical solutions where software, data, and intelligence
                meet.
              </p>
            </div>

            {/* Current status */}
            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-700" />
              </span>

              <p className="font-mono text-xs text-zinc-500">
                currently building industrial IoT software
              </p>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Resume
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="https://github.com/pranav-asalekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-950"
              >
                GitHub
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/asalekar-ps/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-950"
              >
                LinkedIn
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Stack */}
            <div className="mt-14 border-t border-zinc-200 pt-6">
              <p className="mb-4 font-mono text-xs text-zinc-400">
                primary_stack
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Badge key={technology} label={technology} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}