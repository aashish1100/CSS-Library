export default function GridUtilitiesDocs() {
  const cols = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--success)] to-[var(--info)] bg-clip-text text-transparent">
          🧱 Grid Utility Classes
        </h2>
        <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto">
          Easily create flexible and responsive layouts using a 12-column grid system. The grid adapts to screen size using mobile-first design and responsive breakpoints like <code>.col-md-*</code>, <code>.col-lg-*</code>, and more.
        </p>
      </div>

      {/* Basic Grid (.col-*) */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Basic Grid (.col-*)</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use the <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.col-[number]</code> class to define equal-width columns. Each column adapts to screen size.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cols.map((col) => (
            <div key={col} className="col p-2">
              <div className="bg-primary text-white text-xs sm:text-sm text-center rounded py-2 shadow-sm">
                .col-{col}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Columns (sm, md, lg) */}
      <div className="space-y-10">
        {["sm", "md", "lg"].map((bp) => (
          <div key={bp} className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold capitalize text-[var(--foreground)]">
              Responsive <span className="text-[var(--info)]">.col-{bp}-*</span>
            </h3>
            <p className="text-sm sm:text-base text-[var(--muted)]">
              Use the <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.col-{bp}-[number]</code> class to control the number of columns per breakpoint:
              <ul className="list-inside list-disc pl-3 text-sm sm:text-base text-[var(--muted)]">
                <li><code>sm:</code> Small devices (≥ 640px)</li>
                <li><code>md:</code> Medium devices (≥ 768px)</li>
                <li><code>lg:</code> Large devices (≥ 1024px)</li>
              </ul>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cols.map((col) => (
                <div key={col} className={`col-${bp}-${col} p-2`}>
                  <div className="bg-purple text-white text-xs sm:text-sm text-center rounded py-2 shadow-sm">
                    .col-{bp}-{col}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Notes */}
      <div className="space-y-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">💡 Usage Tips</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-[var(--muted)]">
          <li>Use <code>.col-1</code> to <code>.col-12</code> for a simple grid layout where each column has equal width.</li>
          <li>For responsive designs, combine different column classes for each breakpoint (e.g., <code>.col-md-6</code> for medium screens).</li>
          <li>Columns automatically stack on smaller devices when there is not enough space, providing a mobile-first experience.</li>
          <li>Enhance your grid by adding padding, margins, and colors to create unique layouts.</li>
        </ul>
      </div>
    </section>
  );
}
