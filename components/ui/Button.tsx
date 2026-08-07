import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-zinc-800"
      : "border border-zinc-300 hover:bg-zinc-100";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-xl px-6 py-3 text-sm font-medium transition ${styles}`}
    >
      {children}
    </a>
  );
}