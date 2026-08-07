interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-zinc-500">
        {number}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-zinc-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}