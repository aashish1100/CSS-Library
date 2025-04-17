export default function Download() {
  return (
    <section className="bg-[var(--card)] border border-[var(--muted)] p-6 md:p-12 rounded-2xl shadow-lg space-y-10">
      <div className="space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">
          Download & Integration
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-foreground)] leading-relaxed">
          ShadowKit is designed to be simple, fast, and accessible to everyone. There's no need to install packages or configure build tools. 
          You can start using all ShadowKit features instantly by adding a single line of code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-4">📌 Step 1: Add CDN Link</h3>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed mb-4">
            Copy and paste the following line inside the <code className="bg-[var(--muted)] px-2 py-1 rounded text-sm">{"<head>"}</code> tag of your HTML file.
          </p>
          
          <div className="bg-[#0d0d0d] text-white text-xs sm:text-sm font-mono rounded-xl p-4 md:p-6 overflow-x-auto border border-[var(--muted)] shadow-lg w-full">
            <code className="whitespace-nowrap">
              &lt;link rel="stylesheet" href="https://cdn.shadowkit.com/latest/shadowkit.min.css" /&gt;
            </code>
          </div>
        </div>

        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-4">✅ Step 2: Start Using ShadowKit</h3>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Once the CDN is linked, you can immediately use ShadowKit's utility classes and pre-built components in your HTML. 
            No setup or JavaScript is required — just style your elements with clean, semantic markup.
          </p>
        </div>

        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-4">💡 Pro Tip</h3>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Bookmark the <span className="text-[var(--color-primary)] font-medium">ShadowKit Docs</span> to explore component examples and usage patterns.
          </p>
        </div>

        <div className="bg-[var(--background)] border border-[var(--muted)] p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] mb-4">⚡ Fast Integration</h3>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            No build tools or configuration needed. Just link the ShadowKit stylesheet and start building immediately.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 md:p-6 border-l-4 border-[var(--color-primary)] bg-[var(--muted)] rounded-md text-center">
        <p className="text-base md:text-lg text-[var(--muted-foreground)]">
          🚀 With ShadowKit, your design workflow becomes faster, cleaner, and more enjoyable — without sacrificing control or flexibility.
        </p>
      </div>
    </section>
  );
}