export default function Overview() {
  return (
    <section className="bg-[var(--card)] border border-[var(--muted)] p-8 rounded-2xl shadow-md space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold text-[var(--color-primary)] mb-2">Overview</h2>
        <p className="text-lg text-[var(--color-foreground)] leading-relaxed">
          ShadowKit is a sleek, utility-first UI framework built for speed and simplicity. Whether you're building a prototype or a full-scale app, ShadowKit helps you craft visually stunning, responsive designs effortlessly — without writing a single line of custom CSS.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">🔧 Utility-First Approach</h3>
          <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
            Write clean, expressive HTML using pre-defined utility classes for spacing, layout, typography, colors, and more — all in one place.
          </p>
        </div>

        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">🧩 Ready-to-Use Components</h3>
          <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
            Drop in beautiful, accessible UI components that are production-ready out of the box. Build faster with reusable design blocks.
          </p>
        </div>

        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">📱 Fully Responsive</h3>
          <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
            All elements are mobile-first and adapt seamlessly across screen sizes — no extra media queries required.
          </p>
        </div>

        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">⚡ CDN-Based Setup</h3>
          <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
            No build tools or configuration needed. Just link the ShadowKit stylesheet and start building immediately.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 border-l-4 border-[var(--color-primary)] bg-[var(--muted)] rounded-md">
        <p className="text-sm text-[var(--muted-foreground)]">
          🚀 With ShadowKit, your design workflow becomes faster, cleaner, and more enjoyable — without sacrificing control or flexibility.
        </p>
      </div>
    </section>
  );
}
