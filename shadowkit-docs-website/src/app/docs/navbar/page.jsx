export default function NavbarDocs() {
  return (
    <section className="px-4 py-12 md:px-16 md:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Navbar</h2>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
          A flexible and responsive navigation bar for websites, allowing customization in layout, colors, and interactions. Learn how to integrate and use it easily!
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">🧩 Installation</h3>
        <ul className="list-decimal list-inside space-y-2 text-[var(--muted-foreground)]">
          <li>
            Add the CSS link to your project:
            <pre className="bg-[#111] text-white text-sm p-4 rounded-lg mt-2 overflow-x-auto shadow-inner">
              <code>{`<link rel="stylesheet" href="path/to/navbar.css">`}</code>
            </pre>
          </li>
          <li>
            Add the navbar markup to your HTML or JSX:
            <pre className="bg-[#111] text-white text-sm p-4 rounded-lg mt-2 overflow-x-auto shadow-inner">
              <code>{`<nav class="navbar">
    <a href="#" class="navbar-logo">MySite</a>
    <ul class="navbar-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>`}</code>
            </pre>
          </li>
        </ul>
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-semibold">🎨 Design Variants</h3>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">1. Centered Navbar</h4>
          <p className="text-[var(--muted-foreground)]">
            Aligns the navbar's content in the center for a sleek design. Useful for minimalist layouts or when you want the navbar to be the focal point.
          </p>
          <nav className="navbar centered p-6 bg-white text-black rounded-lg shadow-md space-y-2">
            <div className="flex justify-center">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">2. Transparent Navbar</h4>
          <p className="text-[var(--muted-foreground)]">
            A transparent navbar that becomes solid on scroll. Ideal for modern websites that want a smooth, elegant transition.
          </p>
          <nav className="navbar transparent p-6 bg-transparent text-white rounded-lg shadow-md space-y-2">
            <div className="flex justify-between">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">3. Fixed Navbar</h4>
          <p className="text-[var(--muted-foreground)]">
            A navbar that sticks to the top while scrolling, ensuring easy access to navigation no matter where the user is on the page.
          </p>
          <nav className="navbar fixed p-6 bg-blue-600 text-white rounded-lg shadow-md space-y-2">
            <div className="flex justify-between">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-semibold">4. Minimalist Navbar</h4>
          <p className="text-[var(--muted-foreground)]">
            A clean and simple layout for a modern, lightweight design. Great for projects where minimalism is key.
          </p>
          <nav className="navbar minimalist p-6 bg-white text-black rounded-lg shadow-md space-y-2">
            <div className="flex justify-between">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🔧 Props & CSS Classes</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li><code>.navbar</code>: The essential class to apply the base navbar styles.</li>
          <li><code>.centered</code>: Centers the navbar content horizontally.</li>
          <li><code>.transparent</code>: A transparent background that turns solid when scrolling.</li>
          <li><code>.fixed</code>: Makes the navbar stick at the top during scrolling.</li>
          <li><code>.minimalist</code>: A sleek and simple design with minimal distractions.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">♿ Accessibility & 🎨 Customization</h3>
        <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
          <li>Use <code>aria-label</code> for better screen reader accessibility and navigation.</li>
          <li>Ensure that focus styles are visible to assist keyboard users in navigating the site.</li>
          <li>Customize the navbar’s background colors, font styles, and sizes using Tailwind utilities or SCSS for more tailored designs.</li>
        </ul>

        <pre className="bg-[#111] text-white text-sm p-4 rounded-lg shadow-inner">
          <code>{`.navbar {
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
