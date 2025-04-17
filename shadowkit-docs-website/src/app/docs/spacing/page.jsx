export default function SpacingUtilitiesDocs() {
  const spacingSizes = [0, 1, 2, 3, 4, 5];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--success)] to-[var(--purple)] bg-clip-text text-transparent">
          📦 Spacing Utility Classes
        </h2>
        <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto">
          Control margin and padding using spacing scale from <code>.0</code> to <code>.5</code> (based on 4px increments).
        </p>
      </div>

      {/* Margin */}
      <Section title="Margin">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {spacingSizes.map(size => (
            <SpacingBox key={`m-${size}`} label={`.m-${size}`} className={`m-${size}`} />
          ))}
        </div>
      </Section>

      {/* Margin - Sides */}
      <Section title="Margin (Top / Bottom / Start / End)">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {spacingSizes.map(size => (
            <SpacingBox key={`mt-${size}`} label={`.mt-${size}`} className={`mt-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`mb-${size}`} label={`.mb-${size}`} className={`mb-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`ms-${size}`} label={`.ms-${size}`} className={`ms-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`me-${size}`} label={`.me-${size}`} className={`me-${size}`} />
          ))}
        </div>
      </Section>

      {/* Margin - X & Y */}
      <Section title="Margin (X & Y)">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {spacingSizes.map(size => (
            <SpacingBox key={`mx-${size}`} label={`.mx-${size}`} className={`mx-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`my-${size}`} label={`.my-${size}`} className={`my-${size}`} />
          ))}
        </div>
      </Section>

      {/* Padding */}
      <Section title="Padding">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {spacingSizes.map(size => (
            <SpacingBox key={`p-${size}`} label={`.p-${size}`} className={`p-${size}`} />
          ))}
        </div>
      </Section>

      {/* Padding - Sides */}
      <Section title="Padding (Top / Bottom / Start / End)">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {spacingSizes.map(size => (
            <SpacingBox key={`pt-${size}`} label={`.pt-${size}`} className={`pt-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`pb-${size}`} label={`.pb-${size}`} className={`pb-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`ps-${size}`} label={`.ps-${size}`} className={`ps-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`pe-${size}`} label={`.pe-${size}`} className={`pe-${size}`} />
          ))}
        </div>
      </Section>

      {/* Padding - X & Y */}
      <Section title="Padding (X & Y)">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {spacingSizes.map(size => (
            <SpacingBox key={`px-${size}`} label={`.px-${size}`} className={`px-${size}`} />
          ))}
          {spacingSizes.map(size => (
            <SpacingBox key={`py-${size}`} label={`.py-${size}`} className={`py-${size}`} />
          ))}
        </div>
      </Section>
    </section>
  );
}

// Section Component for clean title separation
const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
    {children}
  </div>
);

// Box Component for showing class + spacing preview
const SpacingBox = ({ label, className }) => (
  <div className="bg-muted rounded p-3 space-y-2">
    <p className="text-sm font-mono text-[var(--muted)]">{label}</p>
    <div className={`bg-primary text-black rounded ${className}`}>
      <div className="bg-orange text-sm font-medium px-2 py-1">Box</div>
    </div>
  </div>
);
