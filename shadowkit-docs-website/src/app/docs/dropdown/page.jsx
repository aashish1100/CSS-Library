export default function Dropdown() {
  return (
      <section className="space-y-16 px-4 py-12 md:py-20 md:px-16 bg-[var(--background)] text-[var(--foreground)] rounded-3xl shadow-xl">
          <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Dropdown</h2>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
                  A customizable dropdown to show menus, links, or actions. Designed with smooth effects and stylish variants like glass, outlined, and pill.
              </p>
          </div>

          <div className="space-y-4 border-t border-[var(--muted)] pt-10">
              <h3 className="text-2xl font-semibold">⚙️ How to Use</h3>
              <p className="text-base text-[var(--muted-foreground)]">
                  Use <code className="bg-[var(--card)] px-1 rounded">.lumos-dropdown</code>, <code className="bg-[var(--card)] px-1 rounded">.dropdown-toggle</code>, and <code className="bg-[var(--card)] px-1 rounded">.dropdown-menu</code> for a complete dropdown setup.
              </p>

              <div className="relative inline-block group">
                  <button className="dropdown-toggle bg-[var(--card)] px-4 py-2 rounded-md border border-[var(--muted)] hover:bg-[var(--muted)] transition">
                      Menu
                  </button>
                  <ul className="dropdown-menu absolute mt-2 w-40 bg-[var(--popover)] shadow-lg rounded-md border border-[var(--muted)] opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto z-10">
                      <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Profile</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Settings</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Logout</a></li>
                  </ul>
              </div>

              <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
                  <code>{`<div class="lumos-dropdown">
  <button class="dropdown-toggle">Menu</button>
  <ul class="dropdown-menu">
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
    <li><a href="#">Logout</a></li>
  </ul>
</div>`}</code>
              </pre>
          </div>

          <div className="space-y-10 border-t border-[var(--muted)] pt-10">
              <h3 className="text-2xl font-semibold">🎨 Dropdown Variants</h3>

              <div className="space-y-4">
                  <h4 className="text-xl font-semibold">🧾 Default Dropdown</h4>
                  <div className="relative inline-block group">
                      <button className="dropdown-toggle bg-[var(--card)] px-4 py-2 rounded-md border border-[var(--muted)] hover:bg-[var(--muted)] transition">
                          Default
                      </button>
                      <ul className="dropdown-menu absolute mt-2 w-40 bg-[var(--popover)] shadow-lg rounded-md border border-[var(--muted)] opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto z-10">
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Item 1</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Item 2</a></li>
                      </ul>
                  </div>
                  <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
                      <code>{`<div class="lumos-dropdown">
  <button class="dropdown-toggle">Default</button>
  <ul class="dropdown-menu">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>`}</code>
                  </pre>
              </div>

              <div className="space-y-4">
                  <h4 className="text-xl font-semibold">✏️ Outlined Dropdown</h4>
                  <div className="relative inline-block group">
                      <button className="dropdown-toggle outlined bg-transparent px-4 py-2 rounded-md border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--muted)] transition">
                          Outlined
                      </button>
                      <ul className="dropdown-menu absolute mt-2 w-40 bg-[var(--popover)] shadow-lg rounded-md border border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto z-10">
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Edit</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Rename</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)]">Delete</a></li>
                      </ul>
                  </div>
              </div>

              <div className="space-y-4">
                  <h4 className="text-xl font-semibold">🧊 Glass Dropdown</h4>
                  <div className="relative inline-block group">
                      <button className="dropdown-toggle glass bg-white/10 backdrop-blur-md px-4 py-2 rounded-md border border-white/30 text-white hover:bg-white/20 transition">
                          Glass
                      </button>
                      <ul className="dropdown-menu absolute mt-2 w-44 bg-white/10 backdrop-blur-md text-white shadow-xl rounded-md border border-white/30 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto z-10">
                          <li><a href="#" className="block px-4 py-2 hover:bg-white/20">Blur Item 1</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-white/20">Blur Item 2</a></li>
                      </ul>
                  </div>
              </div>

              <div className="space-y-4">
                  <h4 className="text-xl font-semibold">💊 Pill Dropdown</h4>
                  <div className="relative inline-block group">
                      <button className="dropdown-toggle pill bg-[var(--color-primary)] text-white px-5 py-2 rounded-full hover:opacity-90 transition">
                          Pill Menu
                      </button>
                      <ul className="dropdown-menu absolute mt-2 w-44 bg-[var(--popover)] rounded-2xl shadow-lg border border-[var(--muted)] opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto z-10">
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)] rounded-xl">Option A</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)] rounded-xl">Option B</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-[var(--muted)] rounded-xl">Option C</a></li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="space-y-4 border-t border-[var(--muted)] pt-10">
              <h3 className="text-2xl font-semibold">📐 Layout Tips</h3>
              <ul className="list-disc list-inside text-sm text-[var(--muted-foreground)] space-y-1">
                  <li>Use <code>.dropdown-showcase</code> to present multiple dropdowns in a grid.</li>
                  <li>Combine icons using <code>&lt;i&gt;</code> or inline SVGs inside links.</li>
                  <li>Control dropdown visibility with JS or focus/hover states as needed.</li>
              </ul>
          </div>

          <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl text-sm text-[var(--muted-foreground)]">
              💡 <strong>Note:</strong> All dropdowns support dark mode, accessibility, and transitions using Tailwind utilities or custom classes in ShadowKit.
          </div>
      </section>
  );
}
