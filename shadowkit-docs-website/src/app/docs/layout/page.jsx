export default function FlexUtilitiesDocs() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--success)] to-[var(--purple)] bg-clip-text text-transparent">
          🎯 Flex Utility Classes
        </h2>
        <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto">
          Easily control layout and alignment using <code>flex</code> utility classes. Fully responsive and modular.
        </p>
      </div>

      {/* Display Flex */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Display</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.d-flex</code> or <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.d-inline-flex</code> to create flex containers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FlexPreview label=".d-flex" className="d-flex" />
          <FlexPreview label=".d-inline-flex" className="d-inline-flex" />
        </div>
      </div>

      {/* Flex Direction */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Flex Direction</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          The <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.flex-row</code> class arranges items in a row, while <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.flex-column</code> arranges them in a column.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FlexPreview label=".flex-row" className="d-flex flex-row" />
          <FlexPreview label=".flex-column" className="d-flex flex-column" />
        </div>
      </div>

      {/* Flex Wrap */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Flex Wrap</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.flex-wrap</code> to allow items to wrap, and <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.flex-nowrap</code> to prevent wrapping.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FlexPreview label=".flex-wrap" className="d-flex flex-wrap" wrap />
          <FlexPreview label=".flex-nowrap" className="d-flex flex-nowrap" />
        </div>
      </div>

      {/* Justify Content */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Justify Content</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.justify-[position]</code> to align items along the main axis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["start", "center", "end", "between", "around"].map((pos) => (
            <FlexPreview
              key={pos}
              label={`.justify-${pos}`}
              className={`d-flex justify-${pos}`}
            />
          ))}
        </div>
      </div>

      {/* Align Items */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Align Items</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.align-[position]</code> to align items along the cross axis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["start", "center", "end", "stretch"].map((pos) => (
            <FlexPreview
              key={pos}
              label={`.align-${pos}`}
              className={`d-flex align-${pos} h-[80px]`}
            />
          ))}
        </div>
      </div>

      {/* Align Self */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Align Self</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.self-[position]</code> to align individual flex items.
        </p>
        <div className="d-flex flex-wrap gap-4">
          {["start", "center", "end"].map((pos) => (
            <div key={pos} className="d-flex flex-column gap-2 bg-muted p-4 rounded w-[150px]">
              <span className="text-sm font-medium">.self-{pos}</span>
              <div className={`bg-orange text-black py-1 px-2 rounded self-${pos}`}>
                Aligned {pos}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlexPreview({ label, className, wrap = false }) {
  const items = [1, 2, 3];
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-[var(--muted)]">{label}</p>
      <div
        className={`bg-dark text-white rounded p-3 ${className}`}
        style={{ gap: "8px", minHeight: wrap ? "auto" : "60px" }}
      >
        {items.map((n) => (
          <div
            key={n}
            className="bg-primary rounded text-sm px-3 py-1"
            style={{ minWidth: "40px", textAlign: "center" }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
