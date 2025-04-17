export default function SizeUtilitiesDocs() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--purple)] bg-clip-text text-transparent">
          📐 Width & Height Utilities
        </h2>
        <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto">
          Control the size of elements with precise width and height utilities like <code>.w-50</code> or <code>.h-8rem</code>.
        </p>
      </div>

      {/* Width Utilities */}
      <Section title="Width Examples (in % and rem)">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'w-0', 'w-25', 'w-50', 'w-75', 'w-100',
            'w-auto', 'w-max', 'w-min', 'w-fit',
            'w-1rem', 'w-2rem', 'w-4rem', 'w-8rem', 'w-16rem'
          ].map(cls => (
            <Box key={cls} label={cls} className={`${cls} bg-[var(--primary)] h-8 rounded`} />
          ))}
        </div>
      </Section>

      {/* Height Utilities */}
      <Section title="Height Examples (in % and rem)">
        <div className="flex flex-wrap gap-6">
          {[
            'h-0', 'h-25', 'h-50', 'h-75', 'h-100',
            'h-auto', 'h-max', 'h-min', 'h-fit',
            'h-1rem', 'h-2rem', 'h-4rem', 'h-8rem', 'h-16rem'
          ].map(cls => (
            <div key={cls} className="w-full sm:w-32 md:w-32 lg:w-32 flex flex-col items-center space-y-2">
              <div className={`w-full ${cls} bg-[var(--secondary)] rounded`} />
              <code className="text-xs text-[var(--muted)]">{cls}</code>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}

const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
    {children}
  </div>
);

const Box = ({ label, className }) => (
  <div className="flex flex-col space-y-2">
    <div className={`h-8 ${className} transition-all duration-300`} />
    <code className="text-xs text-[var(--muted)]">{label}</code>
  </div>
);
