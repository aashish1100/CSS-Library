export default function SearchBarDocs() {
  return (
    <section className="px-4 py-12 md:px-16 md:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Search Bar</h2>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
          A flexible and customizable input field with various styles, designed to suit different user interfaces. It includes basic functionality with support for suggestions, focus states, and multiple design variations.
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
            Add the search bar markup:
            <pre className="bg-[#111] text-white text-sm p-4 rounded-lg mt-2 overflow-x-auto shadow-inner">
              <code>{`<div class="search-bar">
  <input class="search-bar__input" type="text" placeholder="Search...">
  <div class="search-bar__suggestions">
    <!-- Suggestions list -->
  </div>
</div>`}</code>
            </pre>
          </li>
        </ul>
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-semibold">🎨 Design Variants</h3>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">1. Minimalistic</h4>
          <p className="text-[var(--muted-foreground)]">Simple, clean design with a transparent background.</p>
          <div className="search-bar minimalistic">
            <input className="search-bar__input" type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">2. Glass Effect</h4>
          <p className="text-[var(--muted-foreground)]">Semi-transparent background with a blur effect.</p>
          <div className="search-bar glass">
            <input className="search-bar__input" type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">3. Rounded</h4>
          <p className="text-[var(--muted-foreground)]">Smooth, circular design with subtle shadows.</p>
          <div className="search-bar rounded">
            <input className="search-bar__input" type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">4. Dark Mode</h4>
          <p className="text-[var(--muted-foreground)]">Dark background with light-colored input field.</p>
          <div className="search-bar dark-mode">
            <input className="search-bar__input" type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">5. Icon-based</h4>
          <p className="text-[var(--muted-foreground)]">Search icon integrated inside the input field.</p>
          <div className="search-bar icon-search">
            <input className="search-bar__input" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">📱 Responsive Design</h3>
        <p className="text-[var(--muted-foreground)]">
          Fully responsive, adapting to different screen sizes. On smaller screens, the input field adapts to full width with reduced padding for better spacing.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🎨 Customization</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li><code>.search-bar</code>: Adjust the max-width of the search bar.</li>
          <li><code>.search-bar__input:focus</code>: Modify the focus state to change the appearance when focused.</li>
        </ul>
        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner">
          <code>{`.search-bar {
  max-width: 500px; /* Adjust the max-width as needed */
}`}</code>
        </pre>
        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner">
          <code>{`.search-bar__input:focus {
  background-color: #f1f1f1;
}`}</code>
        </pre>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🚀 Example Usage</h3>
        <div className="search-bar glass">
          <input className="search-bar__input" type="text" placeholder="Search..." />
          <div className="search-bar__suggestions">
            <ul>
              <li>Suggestion 1</li>
              <li>Suggestion 2</li>
              <li>Suggestion 3</li>
            </ul>
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
          The Search Bar component is designed to work across modern browsers:
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
          <li>For the icon-based search bar, you can use any icon by replacing the background property in the <code>.icon-search</code> class with a custom URL to the icon of your choice.</li>
          <li>Consider providing a fallback or disabling the backdrop-filter in the glass effect for unsupported browsers.</li>
        </ul>
      </div>
    </section>
  );
}
