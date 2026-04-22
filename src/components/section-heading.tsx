type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h2>
      {description && <p className="mt-3 text-base text-slate-600">{description}</p>}
    </div>
  );
}