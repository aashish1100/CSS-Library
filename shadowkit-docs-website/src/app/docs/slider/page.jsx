export default function SliderDocs() {
  const slides = [
    { id: 1, label: 'Slide One' },
    { id: 2, label: 'Slide Two' },
    { id: 3, label: 'Slide Three' },
  ];

  return (
    <section className="px-4 py-8 sm:py-12 md:px-16 md:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
          Slider
        </h2>
        <p className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl sm:max-w-2xl mx-auto">
          A fully responsive, interactive slider with autoplay, navigation buttons, dots navigation, and dark mode support. Highly customizable.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Slides Wrapper */}
        <div className="slider flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
          {slides.map(slide => (
            <div
              key={slide.id}
              className="slide snap-center flex-shrink-0 w-full h-48 sm:h-64 md:h-80 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--muted-foreground)]"
            >
              {slide.label}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="slider-nav prev absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[var(--color-primary)] text-white text-lg shadow-md"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className="slider-nav next absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[var(--color-primary)] text-white text-lg shadow-md"
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="dots flex justify-center mt-4 space-x-2">
          {slides.map((slide, idx) => (
            <span
              key={slide.id}
              className={`dot w-3 h-3 rounded-full ${idx === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--muted-foreground)]'}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Features & Notes */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold">📱 Responsive Design</h3>
        <p className="text-[var(--muted-foreground)]">
          The slider is built mobile-first, with swipe support and adjustable heights per breakpoint.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold">🎨 Features</h3>
        <ul className="text-sm sm:text-base text-[var(--muted-foreground)] list-disc list-inside space-y-1">
          <li><code>.slider</code>: Flex container with snap points for smooth swiping.</li>
          <li><code>.slider-nav</code>: Absolute-positioned nav buttons, hidden on small if desired.</li>
          <li><code>.dot</code>: Indicates current slide; customizable colors.</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold">🔧 Utility Classes</h3>
        <ul className="text-sm sm:text-base text-[var(--muted-foreground)] list-disc list-inside space-y-1">
          <li><code>snap-x</code>, <code>snap-center</code>: Enables native scroll snapping.</li>
          <li><code>overflow-x-auto</code>: Scrollable container for mobile swiping.</li>
          <li><code>scroll-smooth</code>: Smooth transitions when navigating programmatically.</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold">📋 Notes</h3>
        <ul className="text-sm sm:text-base text-[var(--muted-foreground)] list-disc list-inside space-y-1">
          <li>Add <code>aria-live="polite"</code> or screen-reader announcements for accessibility.</li>
          <li>Consider hiding nav buttons on touch devices or showing on hover for larger screens.</li>
        </ul>
      </div>
    </section>
  );
}
