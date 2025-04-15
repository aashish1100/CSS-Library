export default function Download() {
  return (
    <section className="bg-[var(--card)] border border-[var(--muted)] p-8 rounded-2xl shadow-md space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Download & Integration</h2>
        <p className="text-lg text-[var(--color-foreground)] leading-relaxed">
          ShadowKit is designed to be simple, fast, and accessible to everyone. There's no need to install packages or configure build tools.
          You can start using all ShadowKit features instantly by adding a single line of code.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">📌 Step 1: Add CDN Link</h3>
        <p className="text-base text-[var(--color-foreground)]">
          Copy and paste the following line inside the <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-sm">&lt;head&gt;</code> tag of your HTML file.
        </p>

        <div className="bg-[#0d0d0d] text-white text-sm font-mono rounded-xl p-5 overflow-x-auto border border-[var(--muted)]">
          <code>
            &lt;link rel="stylesheet" href="https://cdn.shadowkit.com/latest/shadowkit.min.css" /&gt;
          </code>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">✅ Step 2: Start Using ShadowKit</h3>
        <p className="text-base text-[var(--color-foreground)]">
          Once the CDN is linked, you can immediately use ShadowKit's utility classes and pre-built components in your HTML.
          No setup or JavaScript is required — just style your elements with clean, semantic markup.
        </p>
      </div>

      <div className="bg-[var(--muted)] text-[var(--muted-foreground)] text-sm p-4 rounded-lg border border-[var(--border)]">
        💡 <strong>Pro Tip:</strong> Bookmark the <span className="text-[var(--color-primary)] font-medium">ShadowKit Docs</span> to explore component examples and usage patterns.
      </div>
    </section>
  );
}
