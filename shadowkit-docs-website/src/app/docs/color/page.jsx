export default function Color() {
  return (
    <section className="space-y-8 px-4 py-10 md:py-16 md:px-12 bg-[var(--background)] text-[var(--foreground)] rounded-2xl">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">
          Color System in ShadowKit
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-foreground)] leading-relaxed">
          ShadowKit provides a flexible, class-based color system that makes theming easy and consistent across your entire project. Utilize pre-defined utility classes to style your components or create custom themes with ease.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">🎨 Available Color Classes</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          ShadowKit offers predefined color classes for quick styling. These classes are designed for flexibility and easy customization:
        </p>

        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`.text-red { color: red; }
.text-green { color: green; }
.text-blue { color: blue; }
.text-yellow { color: yellow; }`}</code>
        </pre>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">⚙️ How to Use</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          Use the predefined text color utility classes directly in your HTML or JSX. Here's a simple example:
        </p>

        <div className="space-wy-2">
          <p className="text-base text-[var(--muted-foreground)]">
            Example 1: <strong>Text Color Classes</strong>
          </p>
          <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
            <code>{`<p className="text-red">This is a red colored text.</p>
<p className="text-green">This is a green colored text.</p>`}</code>
          </pre>

          <div className="text-red p-4">This is a red colored text.</div>
          <div className="text-green p-4">This is a green colored text.</div>
        </div>
      </div>

      <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          📝 <strong>Note:</strong> These utility classes are highly customizable. You can easily extend or override them in your own stylesheets or directly within your JavaScript code. Theming and design adjustments are made simple with ShadowKit.
        </p>
      </div>
    </section>
  );
}
