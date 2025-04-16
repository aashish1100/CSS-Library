export default function Button() {
  return (
    <section className="space-y-16 px-4 py-12 md:py-20 md:px-16 bg-[var(--background)] text-[var(--foreground)] rounded-3xl shadow-xl">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
          Button Components
        </h2>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
          A collection of sleek, accessible, and highly customizable button styles. Designed for a wide range of use cases — from primary actions to alerts, glowing effects, and more.
        </p>
      </div>

      <div className="space-y-2 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">Overview</h3>
        <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
          ShadowKit provides <strong>16 uniquely styled modular buttons</strong>. Each variant maintains consistent spacing, font styling, and accessibility support for focus, hover, and active states.
        </p>
        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner mt-4">
          <code>{`<button class="lumos-button">Primary Action</button>
<a href="#" class="echo-button">Secondary Link</a>`}</code>
        </pre>
      </div>

      <div className="space-y-8 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">📝 How to use this class</h3>
        <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
          To use any of the button styles from ShadowKit, simply add the respective class to your HTML elements.
          For example, to create a primary action button, use the <code>.lumos-button</code> class:
        </p>
        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`<button class="lumos-button">Primary Action</button>`}</code>
        </pre>
        <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
          You can also combine button classes with additional Tailwind CSS utilities to further customize the button, such as adjusting its size, spacing, or colors.
        </p>
      </div>

      <div className="space-y-8 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">Button Variants</h3>
        <p className="text-[var(--muted-foreground)] text-base">
          Hover, focus, and active states are built in. Each button serves a different use case.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ['lumos-button', 'Primary Action'],
            ['echo-button', 'Secondary Link'],
            ['blaze-button', 'Delete / Danger'],
            ['aura-button', 'Success'],
            ['pulse-button', 'Info'],
            ['mist-button', 'Minimal'],
            ['noir-button', 'Dark Theme'],
            ['linky-button', 'Inline Link'],
            ['glow-button', 'Glow Effect'],
            ['wisp-button', 'Outline Soft'],
            ['glyph-button', '🔍'],
            ['drip-button', 'Loading...'],
            ['stretch-button w-full', 'Full Width'],
            ['flip-button', 'Toggle State'],
            ['frost-button', 'Frosted Glass'],
            ['shimmer-button', 'Shimmer'],
          ].map(([cls, label]) => (
            <div key={cls} className="flex flex-col items-center gap-2 bg-[var(--card)] p-4 rounded-xl border border-[var(--muted)]">
              <button className={cls}>{label}</button>
              <code className="text-xs text-[var(--muted-foreground)]">.{cls}</code>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">Sizing Utilities</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          Use Tailwind sizing utilities to adjust button size.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="lumos-button text-sm px-4 py-2 rounded-md">Small</button>
          <button className="lumos-button text-base px-6 py-3 rounded-xl">Medium</button>
          <button className="lumos-button text-lg px-8 py-4 rounded-2xl">Large</button>
        </div>
        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`<button class="lumos-button text-sm">Small</button>
<button class="lumos-button text-base">Medium</button>
<button class="lumos-button text-lg">Large</button>`}</code>
        </pre>
      </div>

      <div className="space-y-4 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">Accessibility Notes</h3>
        <ul className="list-disc list-inside text-sm text-[var(--muted-foreground)] space-y-1">
          <li><strong>:focus</strong> state is styled for keyboard navigation.</li>
          <li>All buttons respond visually to <strong>:hover</strong> and <strong>:active</strong>.</li>
          <li>Text contrast is maintained for readability across all themes.</li>
        </ul>
      </div>

      <div className="space-y-4 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">Customization</h3>
        <p className="text-sm text-[var(--muted-foreground)]">
          Override button styles using custom CSS for full flexibility.
        </p>
        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`.lumos-button {
  background-color: #006400;
  border-radius: 12px;
}`}</code>
        </pre>
      </div>

      <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl text-sm text-[var(--muted-foreground)] leading-relaxed">
        📝 <strong>Note:</strong> Button classes are modular and can be extended with utility classes, JS toggles, or transitions for advanced UX.
      </div>
    </section>
  );
}
