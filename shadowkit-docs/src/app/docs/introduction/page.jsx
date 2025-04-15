export default function Introduction() {
  return (
    <section className="bg-[var(--card)] border border-[var(--muted)] p-8 rounded-2xl shadow-md space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Welcome to ShadowKit</h2>
        <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
          ShadowKit is a lightweight, utility-first UI library designed to help developers build clean, responsive, and premium user interfaces effortlessly.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-2">Why ShadowKit?</h3>
        <ul className="list-disc list-inside space-y-2 text-[var(--color-foreground)]">
          <li>⚡ Quick setup with CDN — no build tools or bundlers needed.</li>
          <li>🎨 Pre-designed components with consistent spacing, color, and typography.</li>
          <li>🧩 Custom utility classes and variants designed for real-world use cases.</li>
          <li>📱 Fully responsive and accessible design out of the box.</li>
          <li>🌙 Built-in support for dark mode and modern theming via CSS variables.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-2">What You Can Build</h3>
        <p className="text-[var(--color-foreground)] text-lg">
          From landing pages to dashboards, ShadowKit empowers you to create elegant UIs without writing excessive CSS. Its minimal footprint and clear structure make it an ideal choice for both hobby projects and professional-grade apps.
        </p>
      </div>

      <div className="border-t border-[var(--muted)] pt-4 text-sm text-[var(--muted-foreground)]">
        🧠 ShadowKit is proudly developed to simplify frontend development with a blend of style and flexibility — no bloat, just power.
      </div>
    </section>
  );
}
