export default function TypographyUtilitiesDocs() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--success)] to-[var(--purple)] bg-clip-text text-transparent">
          ✍️ Typography Utilities
        </h2>
        <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto">
          Control font size, weight, and text alignment with simple classes like <code>.text-lg</code> or <code>.fw-bold</code>.
        </p>
      </div>

      {/* Font Sizes */}
      <Section title="Font Sizes">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <TypographyBox label=".text-xs" className="text-xs" />
          <TypographyBox label=".text-sm" className="text-sm" />
          <TypographyBox label=".text-md" className="text-md" />
          <TypographyBox label=".text-lg" className="text-lg" />
          <TypographyBox label=".text-xl" className="text-xl" />
          <TypographyBox label=".text-2xl" className="text-2xl" />
        </div>
      </Section>

      {/* Font Weights */}
      <Section title="Font Weights">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <TypographyBox label=".fw-light" className="fw-light text-md" />
          <TypographyBox label=".fw-normal" className="fw-normal text-md" />
          <TypographyBox label=".fw-semibold" className="fw-semibold text-md" />
          <TypographyBox label=".fw-bold" className="fw-bold text-md" />
        </div>
      </Section>

      {/* Text Alignment */}
      <Section title="Text Alignment">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-md">
          <div className="bg-muted rounded p-3">
            <p className="text-sm font-mono text-[var(--muted)] mb-2">.text-left</p>
            <p className="text-left">This text is left aligned.</p>
          </div>
          <div className="bg-muted rounded p-3">
            <p className="text-sm font-mono text-[var(--muted)] mb-2">.text-center</p>
            <p className="text-center">This text is center aligned.</p>
          </div>
          <div className="bg-muted rounded p-3">
            <p className="text-sm font-mono text-[var(--muted)] mb-2">.text-right</p>
            <p className="text-right">This text is right aligned.</p>
          </div>
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

const TypographyBox = ({ label, className }) => (
  <div className="bg-muted rounded p-3">
    <p className="text-sm font-mono text-[var(--muted)] mb-2">{label}</p>
    <p className={className}>The quick brown fox jumps over the lazy dog.</p>
  </div>
);
