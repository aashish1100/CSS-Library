export default function ColorUtilitiesDocs() {
  const bgUtilities = [
    "primary", "secondary", "success", "danger", "warning", "info",
    "light", "dark", "muted", "purple", "orange",
  ];

  const textUtilities = [
    "primary", "secondary", "success", "danger", "warning", "info",
    "light", "dark", "muted", "purple", "orange",
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--purple)] bg-clip-text text-transparent">
          🎨 Color Utility Classes
        </h2>
        <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto">
          ShadowKit provides predefined color utility classes for background and text colors. Easily apply these classes to your components to quickly style them with consistent themes.
        </p>
      </div>

      {/* Background Utilities */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">
          Background Colors
        </h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use the <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.bg-[color]</code> class to set the background color of an element. Choose from predefined color classes like <code>.bg-primary</code>, <code>.bg-secondary</code>, etc.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {bgUtilities.map((color) => (
            <div
              key={color}
              className={`bg-${color} rounded p-4 text-center text-sm font-medium shadow-sm`}
            >
              .bg-{color}
            </div>
          ))}
        </div>
      </div>

      {/* Text Utilities */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Text Colors</h3>
        <p className="text-sm sm:text-base text-[var(--muted)]">
          Use the <code className="bg-[var(--muted)] text-sm px-2 py-1 rounded">.text-[color]</code> class to change the text color. You can apply colors like <code>.text-primary</code>, <code>.text-success</code>, and more.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-[var(--card)] p-4 rounded shadow-sm">
          {textUtilities.map((color) => (
            <div
              key={color}
              className={`text-${color} rounded p-2 text-center text-sm font-medium`}
            >
              .text-{color}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">💡 Usage Tips</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-[var(--muted)]">
          <li>Use <code>.bg-[color]</code> to apply background colors for elements like cards, buttons, and containers.</li>
          <li>Use <code>.text-[color]</code> to adjust the text color for headings, paragraphs, and links.</li>
          <li>Combine multiple color utilities to create contrasting designs — for example, <code>.bg-primary .text-white</code>.</li>
        </ul>
      </div>
    </section>
  );
}
