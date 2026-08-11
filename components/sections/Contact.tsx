import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";

const links = [
  {
    label: "Email",
    value: "asalekarps@gmail.com",
    href: "mailto:asalekarps@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/pranav-asalekar",
    href: "https://github.com/pranav-asalekar",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/asalekar-ps/",
    href: "https://www.linkedin.com/in/asalekar-ps/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          number="06 / CONTACT"
          title="connect()"
          subtitle="Have a project, opportunity, or interesting problem? Let's talk."
        />

        <div className="border-y border-zinc-200">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center justify-between border-b border-zinc-200 py-6 last:border-b-0"
            >
              <div>
                <p className="font-mono text-xs text-zinc-400">
                  {link.label}
                </p>

                <p className="mt-1 text-sm text-zinc-700">
                  {link.value}
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-zinc-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-950"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}