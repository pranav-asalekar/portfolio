import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-400">
      {children}
    </div>
  );
}