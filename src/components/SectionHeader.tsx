export function SectionHeader({ tag, headline, children }: {
  tag: string;
  headline: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
        {tag}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-dark">
        {headline}
      </h2>
      {children}
    </div>
  );
}
