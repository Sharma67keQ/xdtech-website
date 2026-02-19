interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
