export default function Introduction() {
  return (
    <section className="bg-[var(--card)] border border-[var(--muted)] p-10 rounded-2xl shadow-lg space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4 text-center">
          Welcome to ShadowKit
        </h2>
        <p className="text-xl text-[var(--muted-foreground)] leading-relaxed text-center">
          ShadowKit is a lightweight, utility-first UI library designed to help developers build clean, responsive, and premium user interfaces effortlessly.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-[var(--foreground)] mb-4">Why ShadowKit?</h3>
        <ul className="list-disc list-inside space-y-3 text-[var(--color-foreground)]">
          <li>⚡ Quick setup with CDN — no build tools or bundlers needed.</li>
          <li>🎨 Pre-designed components with consistent spacing, color, and typography.</li>
          <li>🧩 Custom utility classes and variants designed for real-world use cases.</li>
          <li>📱 Fully responsive and accessible design out of the box.</li>
          <li>🌙 Built-in support for dark mode and modern theming via CSS variables.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-[var(--foreground)] mb-4">What You Can Build</h3>
        <p className="text-[var(--color-foreground)] text-lg leading-relaxed">
          From landing pages to dashboards, ShadowKit empowers you to create elegant UIs without writing excessive CSS. Its minimal footprint and clear structure make it an ideal choice for both hobby projects and professional-grade apps.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-[var(--foreground)] mb-4">Get Involved</h3>
        <p className="text-lg text-[var(--color-foreground)] mb-4">
          ShadowKit is open-source! Feel free to explore the project, contribute, or simply check out the source code to see how we built it.
        </p>
        <a
          href="https://github.com/aashish1100/CSS-Library"
          target="_blank"
          className="inline-block bg-[var(--color-primary)] text-white py-2 px-6 rounded-lg hover:bg-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-300"
        >
          Visit GitHub Repo
        </a>
      </div>

      <div className="border-t border-[var(--muted)] pt-6 text-sm text-[var(--muted-foreground)] text-center">
        🧠 ShadowKit is proudly developed to simplify frontend development with a blend of style and flexibility — no bloat, just power.
      </div>
    </section>
  );
}
