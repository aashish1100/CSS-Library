export default function FooterDocs() {
  return (
    <section className="px-4 py-12 md:px-16 md:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-16 mb-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Footer</h2>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
          A flexible and stylish footer layout component. Fully responsive and themable with modern designs like minimal, dark, glassmorphism, and split layout.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">🧩 Installation</h3>
        <ul className="list-decimal list-inside space-y-2 text-[var(--muted-foreground)]">
          <li>
            Add the CSS:
            <pre className="bg-[#111] text-white text-sm p-4 rounded-lg mt-2 overflow-x-auto shadow-inner">
              <code>{`<link rel="stylesheet" href="path/to/lumos-footer.css">`}</code>
            </pre>
          </li>
          <li>
            Add the footer markup:
            <pre className="bg-[#111] text-white text-sm p-4 rounded-lg mt-2 overflow-x-auto shadow-inner">
              <code>{`<footer class="lumos-footer minimalistic">
  <div class="lumos-footer__links">
    <a href="#" class="lumos-footer__link">Home</a>
    <a href="#" class="lumos-footer__link">About</a>
    <a href="#" class="lumos-footer__link">Contact</a>
  </div>
  <div class="lumos-footer__social-media">
    <span class="lumos-footer__social-icon lumos-footer__social-icon--facebook">F</span>
    <span class="lumos-footer__social-icon lumos-footer__social-icon--twitter">T</span>
  </div>
  <div class="lumos-footer__copyright">
    &copy; 2025 Your Company. All Rights Reserved.
  </div>
</footer>`}</code>
            </pre>
          </li>
        </ul>
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-semibold">🎨 Design Variants</h3>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">1. Minimalistic</h4>
          <p className="text-[var(--muted-foreground)]">Simple and clean layout with light background.</p>
          <footer className="lumos-footer minimalistic p-6 bg-white text-black rounded-lg shadow-md space-y-2">
            <div className="flex gap-4">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex gap-4 text-lg">
              <span>📘</span>
              <span>🐦</span>
            </div>
            <div className="text-sm">&copy; 2025 Your Company</div>
          </footer>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">2. Dark Theme</h4>
          <p className="text-[var(--muted-foreground)]">Dark background with light text for modern UIs.</p>
          <footer className="lumos-footer dark-theme p-6 bg-black text-white rounded-lg shadow-md space-y-2">
            <div className="flex gap-4">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex gap-4 text-lg">
              <span>📘</span>
              <span>🐦</span>
            </div>
            <div className="text-sm">&copy; 2025 Your Company</div>
          </footer>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">3. Glassmorphism</h4>
          <p className="text-[var(--muted-foreground)]">Frosted glass effect with a modern vibe.</p>
          <footer className="lumos-footer glassmorphism p-6 bg-white/10 backdrop-blur-lg text-white rounded-lg shadow-md space-y-2">
            <div className="flex gap-4">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex gap-4 text-lg">
              <span>📘</span>
              <span>🐦</span>
            </div>
            <div className="text-sm">&copy; 2025 Your Company</div>
          </footer>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">4. Split Layout</h4>
          <p className="text-[var(--muted-foreground)]">Left/right structured layout for content balance.</p>
          <footer className="lumos-footer split-layout p-6 bg-[var(--card)] text-[var(--foreground)] rounded-lg shadow-md">
            <div className="flex justify-between">
              <div className="lumos-footer__left space-x-4">
                <a href="#">Home</a>
                <a href="#">About</a>
              </div>
              <div className="lumos-footer__right space-x-4 text-lg">
                <span>📘</span>
                <span>🐦</span>
              </div>
            </div>
            <div className="text-center text-sm mt-4">&copy; 2025 Your Company</div>
          </footer>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🔧 Props & CSS Classes</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li><code>.lumos-footer</code>: Required base class</li>
          <li><code>.minimalistic</code>: Clean light design</li>
          <li><code>.dark-theme</code>: Dark background layout</li>
          <li><code>.split-layout</code>: Two-column layout</li>
          <li><code>.glassmorphism</code>: Frosted effect background</li>
          <li><code>.lumos-footer__link</code>: Footer links</li>
          <li><code>.lumos-footer__social-icon</code>: Social icons container</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">♿ Accessibility & 🎨 Customization</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li>Use <code>aria-label</code> on social icons for screen readers.</li>
          <li>Ensure link focus styles are visible for keyboard navigation.</li>
          <li>Customize colors and fonts with Tailwind utility overrides or SCSS.</li>
        </ul>

        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner">
          <code>{`.lumos-footer {
  background-color: #333;
  color: #fff;
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
}`}</code>
        </pre>
      </div>
    </section>
  );
}
