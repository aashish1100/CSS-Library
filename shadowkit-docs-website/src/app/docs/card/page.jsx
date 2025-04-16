export default function Card() {
  return (
    <section className="space-y-16 px-4 py-12 md:py-20 md:px-16 bg-[var(--background)] text-[var(--foreground)] rounded-3xl shadow-xl">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
          Card Components
        </h2>
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
          A flexible, extensible content container with modular layout options. Cards are perfect for grouping related content elegantly.
        </p>
      </div>

      <div className="space-y-4 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">🧩 How to Use</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          Apply the <code className="bg-[var(--card)] px-1 rounded">.card</code> class to a container and insert any combination of headers, bodies, footers, images, or lists.
        </p>

        <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--muted)] shadow-sm">
          <div className="card space-y-4">
            <div className="card-header font-semibold">Header</div>
            <div className="card-body space-y-2">
              <h5 className="card-title text-xl font-bold">Card Title</h5>
              <p className="card-text text-[var(--muted-foreground)]">Some supporting text inside the card body.</p>
            </div>
            <div className="card-footer text-sm text-[var(--muted-foreground)]">Footer</div>
          </div>
        </div>

        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some supporting text inside the card body.</p>
  </div>
  <div class="card-footer">Footer</div>
</div>`}</code>
        </pre>
      </div>

      <div className="space-y-8 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">🎨 Card Variants</h3>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold">🖼 Image Top Card</h4>
          <div className="card overflow-hidden rounded-xl border border-[var(--muted)] shadow-md max-w-sm">
            <img src="https://via.placeholder.com/600x300" className="card-img-top" alt="Image Top" />
            <div className="card-body p-4">
              <h5 className="card-title font-bold">Image Card</h5>
              <p className="card-text text-[var(--muted-foreground)]">A card with a top image.</p>
            </div>
          </div>
          <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
            <code>{`<div class="card">
  <img src="image.jpg" class="card-img-top" alt="Image Top">
  <div class="card-body">
    <h5 class="card-title">Image Card</h5>
    <p class="card-text">A card with a top image.</p>
  </div>
</div>`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold">🧾 Card with List Group</h4>
          <div className="card border border-[var(--muted)] rounded-xl shadow-md max-w-sm">
            <div className="card-header p-4 border-b border-[var(--muted)] font-semibold">Features</div>
            <ul className="list-group list-disc px-6 py-4 text-sm space-y-1">
              <li>Fast</li>
              <li>Modular</li>
              <li>Responsive</li>
            </ul>
            <div className="card-footer p-4 border-t border-[var(--muted)] text-sm text-[var(--muted-foreground)]">End</div>
          </div>
          <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
            <code>{`<div class="card">
  <div class="card-header">Features</div>
  <ul class="list-group">
    <li>Fast</li>
    <li>Modular</li>
    <li>Responsive</li>
  </ul>
  <div class="card-footer">End</div>
</div>`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold">📸 Image Overlay</h4>
          <div className="card relative overflow-hidden rounded-xl shadow-md max-w-sm">
            <img src="https://via.placeholder.com/600x300" className="card-img-top" alt="Overlay Image" />
            <div className="card-img-overlay absolute inset-0 p-6 bg-black/40 backdrop-blur-sm text-white flex flex-col justify-end">
              <h5 className="card-title text-lg font-semibold">Overlay Title</h5>
              <p className="card-text text-sm">This content sits on top of the image.</p>
            </div>
          </div>
          <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
            <code>{`<div class="card">
  <img src="image.jpg" class="card-img-top" alt="Overlay Image">
  <div class="card-img-overlay">
    <h5 class="card-title">Overlay Title</h5>
    <p class="card-text">This content sits on top of the image.</p>
  </div>
</div>`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold">↔️ Horizontal Card</h4>
          <div className="card flex md:flex-row flex-col border border-[var(--muted)] rounded-xl shadow-md max-w-3xl overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Side Image" className="md:w-1/3 object-cover" />
            <div className="card-body p-6 space-y-2">
              <h5 className="card-title font-bold">Horizontal Card</h5>
              <p className="card-text text-[var(--muted-foreground)]">Content appears next to the image.</p>
            </div>
          </div>
          <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
            <code>{`<div class="card card-horizontal">
  <img src="side.jpg" alt="Side Image">
  <div class="card-body">
    <h5 class="card-title">Horizontal Card</h5>
    <p class="card-text">Content appears next to the image.</p>
  </div>
</div>`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold">🌀 Outlined Card</h4>
          <div className="card card-outline border-2 border-dashed border-[var(--muted)] rounded-xl p-6 max-w-sm">
            <h5 className="card-title font-bold">Outlined Card</h5>
            <p className="card-text text-[var(--muted-foreground)]">A different border style using dashed lines.</p>
          </div>
          <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
            <code>{`<div class="card card-outline">
  <div class="card-body">
    <h5 class="card-title">Outlined Card</h5>
    <p class="card-text">A different border style using dashed lines.</p>
  </div>
</div>`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">🛡 Accessibility Notes</h3>
        <ul className="list-disc list-inside text-sm text-[var(--muted-foreground)] space-y-1">
          <li>Card titles use heading tags for semantic meaning.</li>
          <li>Overlay cards include contrast and readable fonts.</li>
          <li>All images have <code>alt</code> tags for screen readers.</li>
        </ul>
      </div>

      <div className="space-y-4 border-t border-[var(--muted)] pt-10">
        <h3 className="text-2xl font-semibold">🎛 Customization</h3>
        <p className="text-sm text-[var(--muted-foreground)]">
          Override card styles or create your own using utility classes or CSS extensions.
        </p>
        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`.card {
  background-color: #1a1a1a;
  border-radius: 16px;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}`}</code>
        </pre>
      </div>

      <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl text-sm text-[var(--muted-foreground)] leading-relaxed">
        💡 <strong>Note:</strong> ShadowKit cards are modular containers. Extend them with utilities like <code>flex</code>, <code>grid</code>, <code>hover:</code> effects and responsive helpers for creative layouts.
      </div>
    </section>
  );
}
