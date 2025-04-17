export default function NavbarDocs() {
  return (
    <section className="px-4 py-8 sm:py-12 md:px-8 lg:px-16 bg-background text-foreground space-y-12 md:space-y-16 max-w-full w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading">
          Navbar Documentation
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2 sm:px-0">
          Build responsive navigation headers with ShadowKit's Navbar component. Customizable, accessible, and ready for any project.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          {["Responsive", "Customizable", "Accessible"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 sm:px-4 sm:py-2 bg-primary text-white rounded-full text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">⚡ Quick Start</h3>

          {/* Step 1 */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">1. Include CSS</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Add ShadowKit to your project via CDN or package manager:
            </p>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<!-- CDN Link -->
<link rel="stylesheet" href="https://cdn.shadowkit.com/latest/shadowkit.min.css">

/* OR via npm */
npm install shadowkit`}</code>
            </pre>
          </div>

          {/* Step 2 */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">2. Basic Structure</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Minimal markup for a functional navbar:
            </p>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="navbar-brand">Your Logo</a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      </ul>
    </div>
  </div>
</nav>`}</code>
            </pre>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">👀 Live Preview</h3>
          <div className="border border-muted rounded-xl p-4 sm:p-6 shadow-sm bg-card">
            <nav className="p-3 sm:p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <a href="#" className="text-lg sm:text-xl font-bold">
                  Brand
                </a>
                <div className="hidden md:flex space-x-4 sm:space-x-6">
                  <a href="#" className="hover:text-primary">Home</a>
                  <a href="#" className="hover:text-primary">About</a>
                  <a href="#" className="hover:text-primary">Contact</a>
                </div>
                <button className="md:hidden p-1 sm:p-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="md:hidden mt-3 space-y-2">
                <a href="#" className="block hover:text-primary">Home</a>
                <a href="#" className="block hover:text-primary">About</a>
                <a href="#" className="block hover:text-primary">Contact</a>
              </div>
            </nav>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
              Resize your browser or view on mobile to see responsive behavior
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">3. JavaScript (Optional)</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              For mobile toggle functionality:
            </p>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`import { Navbar } from 'shadowkit';

new Navbar('.navbar', {
  collapseBreakpoint: 'md',
  animation: 'slide'
});`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Remaining Sections... (same logic applies) */}
    </section>
  );
}
