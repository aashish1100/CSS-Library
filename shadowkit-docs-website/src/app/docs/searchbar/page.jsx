export default function SearchBarDocs() {
  const variants = [
    {
      title: '1. Minimalistic',
      description: 'Simple, clean design with a transparent background.',
      class: 'minimalistic',
    },
    {
      title: '2. Glass Effect',
      description: 'Semi-transparent background with a blur effect.',
      class: 'glass',
    },
    {
      title: '3. Rounded',
      description: 'Smooth, circular design with subtle shadows.',
      class: 'rounded',
    },
    {
      title: '4. Dark Mode',
      description: 'Dark background with light-colored input field.',
      class: 'dark-mode',
    },
    {
      title: '5. Icon-based',
      description: 'Search icon integrated inside the input field.',
      class: 'icon-search',
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 md:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-16 w-[100vw]">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
          Search Bar
        </h2>
        <p className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto px-2 sm:px-4">
          A flexible and customizable input field with various styles, designed to suit different user interfaces.
        </p>
      </div>

      {/* Installation Section */}
      <div className="space-y-4 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">🧩 Installation</h3>
        <ul className="list-decimal list-inside space-y-2 text-[var(--muted-foreground)] text-sm sm:text-base">
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

      {/* Design Variants Section */}
      <div className="space-y-10 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">🎨 Design Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {variants.map((variant) => (
            <div key={variant.title} className="space-y-3">
              <h4 className="text-xl font-semibold">{variant.title}</h4>
              <p className="text-[var(--muted-foreground)] text-sm sm:text-base">{variant.description}</p>
              <div className="w-full max-w-md sm:max-w-lg mx-auto">
                <div className={`search-bar ${variant.class} w-full`}>
                  <input
                    className="search-bar__input w-full px-4 py-2 sm:py-3 md:py-4"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Design Section */}
      <div className="space-y-6 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">📱 Responsive Design</h3>
        <p className="text-[var(--muted-foreground)] text-sm sm:text-base">
          Fully responsive, adapting to different screen sizes. On smaller screens, the input field adapts to full width with reduced padding for better spacing.
        </p>
        <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg mt-4">
          <div className="aspect-video bg-gray-100 flex items-center justify-center p-4">
            <div className="search-bar glass w-full sm:w-[90%] md:w-2/3 lg:w-1/2">
              <input
                className="search-bar__input w-full"
                type="text"
                placeholder="Responsive example..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Customization Section */}
      <div className="space-y-6 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">🎨 Customization</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li><code>.search-bar</code>: Adjust the max-width of the search bar.</li>
          <li><code>.search-bar__input:focus</code>: Modify the focus state to change the appearance when focused.</li>
        </ul>
        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner overflow-x-auto">
          <code>{`.search-bar {
  max-width: 500px; /* Adjust the max-width as needed */
}`}</code>
        </pre>
        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner overflow-x-auto">
          <code>{`.search-bar__input:focus {
  background-color: #f1f1f1;
}`}</code>
        </pre>
      </div>

      {/* Example Usage Section */}
      <div className="space-y-6 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">🚀 Example Usage</h3>
        <div className="w-full max-w-3xl mx-auto">
          <div className="search-bar glass w-full">
            <input
              className="search-bar__input w-full px-4 py-3"
              type="text"
              placeholder="Search..."
            />
            <div className="search-bar__suggestions">
              <ul>
                <li>Suggestion 1</li>
                <li>Suggestion 2</li>
                <li>Suggestion 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Utility Classes Section */}
      <div className="space-y-6 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">🔧 Utility Classes</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li><code>.m-0</code>: Removes margin.</li>
          <li><code>.p-1</code>: Adds padding.</li>
          <li><code>.text-center</code>: Centers the text inside the element.</li>
          <li><code>.flex</code>: Displays the element as a flex container.</li>
        </ul>
      </div>

      {/* Browser Support Section */}
      <div className="space-y-6 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">🌍 Browser Support</h3>
        <p className="text-[var(--muted-foreground)] text-sm sm:text-base">
          The Search Bar component is designed to work across modern browsers:
        </p>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
        </ul>
      </div>

      {/* Notes Section */}
      <div className="space-y-6 px-2 sm:px-4 md:px-8">
        <h3 className="text-2xl font-semibold">📋 Notes</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li>For the icon-based search bar, you can use any icon by replacing the background property in the <code>.icon-search</code> class with a custom URL to the icon of your choice.</li>
          <li>Consider providing a fallback or disabling the backdrop-filter in the glass effect for unsupported browsers.</li>
        </ul>
      </div>
    </section>
  );
}
