export default function SliderDocs() {
  return (
    <section className="px-4 py-12 md:px-16 md:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Slider</h2>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
          A fully responsive, interactive slider component with autoplay, navigation buttons, dots navigation, and dark mode support. Highly customizable with various layout options.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">🧩 Installation</h3>
        <ul className="list-decimal list-inside space-y-2 text-[var(--muted-foreground)]">
          <li>
            Add the CSS:
            <pre className="bg-[#111] text-white text-sm p-4 rounded-lg mt-2 overflow-x-auto shadow-inner">
              <code>{`<link rel="stylesheet" href="path/to/your/styles.css">`}</code>
            </pre>
          </li>
          <li>
            Add the slider markup:
            <pre className="bg-[#111] text-white text-sm p-4 rounded-lg mt-2 overflow-x-auto shadow-inner">
              <code>{`<div class="slider-container">
  <div class="slider">
    <div class="slide">
      <img src="image1.jpg" alt="Slide 1">
    </div>
    <div class="slide">
      <img src="image2.jpg" alt="Slide 2">
    </div>
    <div className="slide">
      <img src="image3.jpg" alt="Slide 3">
    </div>
  </div>

  <!-- Navigation Buttons -->
  <button class="slider-nav prev">&#10094;</button>
  <button class="slider-nav next">&#10095;</button>

  <!-- Dots Navigation -->
  <div class="dots">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>`}</code>
            </pre>
          </li>
        </ul>
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-semibold">🎨 Design Variants</h3>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">1. Full-Screen Slider</h4>
          <p className="text-[var(--muted-foreground)]">Takes up the entire screen height and width for a visually impactful display.</p>
          <div className="slider-container full-screen">
            <div className="slider">
              <div className="slide">
                <img src="image1.jpg" alt="Slide 1" />
              </div>
              <div className="slide">
                <img src="image2.jpg" alt="Slide 2" />
              </div>
              <div className="slide">
                <img src="image3.jpg" alt="Slide 3" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">2. Slider with Dots Navigation</h4>
          <p className="text-[var(--muted-foreground)]">Navigate between slides by clicking on the dots.</p>
          <div className="slider-container">
            <div className="slider">
              <div className="slide">
                <img src="image1.jpg" alt="Slide 1" />
              </div>
              <div className="slide">
                <img src="image2.jpg" alt="Slide 2" />
              </div>
              <div className="slide">
                <img src="image3.jpg" alt="Slide 3" />
              </div>
            </div>
            <div className="dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">📱 Responsive Design</h3>
        <p className="text-[var(--muted-foreground)]">
          The Slider component is fully responsive and adapts seamlessly across different screen sizes.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🎨 Features</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li><code>.slider</code>: Adjust the transition and animation for the slider.</li>
          <li><code>.slider-nav</code>: Customize the navigation buttons.</li>
          <li><code>.dot</code>: Customize the appearance of the dots navigation.</li>
        </ul>
        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner">
          <code>{`.slider {
  animation: slide-animation 20s infinite;
}`}</code>
        </pre>
        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner">
          <code>{`@media (prefers-color-scheme: dark) {
  .slider-container {
    background-color: #333;
  }
  .slider-nav {
    background-color: rgba(255, 255, 255, 0.5);
  }
}`}</code>
        </pre>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🚀 Example Usage</h3>
        <div className="slider-container">
          <div className="slider">
            <div className="slide">
              <img src="image1.jpg" alt="Slide 1" />
            </div>
            <div className="slide">
              <img src="image2.jpg" alt="Slide 2" />
            </div>
            <div className="slide">
              <img src="image3.jpg" alt="Slide 3" />
            </div>
          </div>
          <button className="slider-nav prev">&#10094;</button>
          <button className="slider-nav next">&#10095;</button>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🔧 Utility Classes</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li><code>.m-0</code>: Removes margin.</li>
          <li><code>.p-1</code>: Adds padding.</li>
          <li><code>.text-center</code>: Centers the text inside the element.</li>
          <li><code>.flex</code>: Displays the element as a flex container.</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🌍 Browser Support</h3>
        <p className="text-[var(--muted-foreground)]">
          The Slider component works seamlessly across modern browsers:
        </p>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">📋 Notes</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li>Consider providing fallbacks for browsers that don't support certain CSS properties, like the backdrop-filter in the glass effect.</li>
          <li>For better accessibility, add <code>aria-label</code> to the navigation buttons.</li>
        </ul>
      </div>
    </section>
  );
}
