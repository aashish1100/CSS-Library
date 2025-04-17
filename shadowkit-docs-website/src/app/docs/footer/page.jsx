export default function FooterDocs() {
  return (
    <section className="w-full max-w-screen overflow-x-hidden box-border px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-10 md:py-16 lg:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 mb-6 sm:mb-8 md:mb-16 lg:mb-20">

      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          Footer Component
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--muted-foreground)] max-w-prose mx-auto leading-relaxed">
          A flexible and stylish footer layout component with multiple design variants. Fully responsive and themeable with modern designs.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2 sm:pt-3">
          {["Responsive", "Customizable", "Accessible", "4 Variants"].map(label => (
            <span key={label} className="px-2 py-1 sm:px-3 sm:py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-xs sm:text-sm md:text-base font-medium">
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Installation Section */}
      <div className="space-y-5 bg-[var(--card)] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">🧩 Installation</h3>
          <span className="text-xs sm:text-sm bg-[var(--color-primary)] text-white px-2 py-0.5 rounded-full w-fit">
            Step-by-step
          </span>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[/* Installation steps */].map(({ title, description, code }, index) => (
            <div key={index} className="space-y-3 md:space-y-4">
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-medium text-[var(--color-primary)]">{title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-[var(--muted-foreground)] mt-1 md:mt-2">
                  {description}
                </p>
              </div>
              <div className="relative overflow-auto rounded max-w-full">
                <pre className="bg-[var(--code-bg)] text-[var(--code-text)] text-xs sm:text-sm md:text-base p-3 sm:p-4 md:p-5 rounded-lg shadow-inner w-full">
                  <code className="whitespace-pre-wrap break-words">{code}</code>
                </pre>
                <button className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-[var(--color-primary)] text-white p-1 sm:p-1.5 rounded text-xs sm:text-sm hover:opacity-90 transition-opacity">
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Variants Section */}
      <div className="space-y-6 md:space-y-8 max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">🎨 Design Variants</h3>
          <span className="text-xs sm:text-sm bg-[var(--color-primary)] text-white px-2 py-0.5 rounded-full w-fit">
            4 Options
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Responsive grid for variants */}
          {[1, 2, 3, 4].map((variant) => (
            <div key={variant} className="bg-[var(--card)] p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-[var(--muted)]/20 rounded-md mb-4"></div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-medium">Variant {variant}</h4>
              <p className="text-xs sm:text-sm md:text-base text-[var(--muted-foreground)] mt-2">
                Description of footer variant {variant}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Props & Accessibility */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-screen-xl mx-auto px-4">
        <div className="bg-[var(--card)] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">🔧 Props & Classes</h3>
          <div className="overflow-auto w-full">
            <table className="min-w-full divide-y divide-[var(--border)] text-xs sm:text-sm md:text-base">
              {/* Table content */}
            </table>
          </div>
        </div>

        <div className="bg-[var(--card)] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">♿ Accessibility</h3>
          <ul className="text-xs sm:text-sm md:text-base text-[var(--muted-foreground)] list-disc list-inside space-y-1 md:space-y-2">
            {/* Accessibility content */}
          </ul>
          <div className="mt-4 md:mt-6 overflow-auto max-w-full">
            <pre className="bg-[var(--code-bg)] text-[var(--code-text)] text-xs sm:text-sm md:text-base p-3 sm:p-4 rounded w-full">
              <code>{/* Code example */}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-[var(--card)] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm max-w-screen-xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">📚 Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {[["GitHub Repository", "View source code"], ["Figma Design Kit", "Download assets"]].map(([title, desc], i) => (
            <a key={i} href="#" className="p-4 sm:p-6 border border-[var(--border)] rounded-lg hover:border-[var(--color-primary)] transition-colors">
              <h4 className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)]">{title}</h4>
              <p className="text-xs sm:text-sm md:text-base text-[var(--muted-foreground)] mt-1 sm:mt-2">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}