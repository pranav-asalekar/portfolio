import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center">
      <Container>

        <p className="text-sm font-medium text-blue-600">
          Python Backend Engineer
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Building scalable backend systems,
          AI-powered applications,
          and data platforms.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-600">
          I design and build robust backend applications,
          REST APIs, distributed systems,
          and AI-powered solutions using Python,
          FastAPI, PostgreSQL, Docker, and modern cloud technologies.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>
            Download Resume
          </Button>

          <Button variant="secondary">
            GitHub
          </Button>
        </div>

      </Container>
    </section>
  );
}