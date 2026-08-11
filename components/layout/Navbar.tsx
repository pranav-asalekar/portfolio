"use client";

import Link from "next/link";

const navItems = [
  { label: "projects/", href: "#projects" },
  { label: "career.log", href: "#experience" },
  { label: "stack.json", href: "#skills" },
  { label: "about.md", href: "#about" },
  { label: "connect()", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#FAFAFA]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-900"
        >
          PA
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <span className="font-mono text-xs text-zinc-500">menu</span>
        </div>
      </div>
    </header>
  );
}