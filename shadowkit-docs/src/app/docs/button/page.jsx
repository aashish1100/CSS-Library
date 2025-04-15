export default function Button() {
  return (
    <section className="space-y-8 px-4 py-10 md:py-16 md:px-12 bg-[var(--background)] text-[var(--foreground)] rounded-2xl">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">
          Button Component
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-foreground)] leading-relaxed">
          ShadowKit provides a versatile button system. Use the <code>.btn</code> class to apply the default button styling. You can also use various modifiers to adjust the size, color, and style of the button.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">💡 Button Variants</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          ShadowKit provides several button styles that can be customized with simple utility classes. The most common button types are:
        </p>

        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <button className="btn btn-primary px-6 py-3 rounded-xl text-white shadow-lg transition duration-200 hover:bg-[var(--color-primary-dark)] border-[var(--color-primary)]">
                Primary
              </button>
              <p className="text-[var(--muted-foreground)] mt-2">.btn-primary</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn btn-secondary px-6 py-3 rounded-xl text-white shadow-lg transition duration-200 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] border-[var(--color-secondary)]">
                Secondary
              </button>
              <p className="text-[var(--muted-foreground)] mt-2">.btn-secondary</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn btn-outline px-6 py-3 rounded-xl border-[var(--color-primary)] text-[var(--color-primary)] shadow-sm transition duration-200 hover:bg-[var(--color-primary)] hover:text-white">
                Outline
              </button>
              <p className="text-[var(--muted-foreground)] mt-2">.btn-outline</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">📜 Code Example</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          Use the following HTML to create buttons with different styles:
        </p>
        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">🔧 Button Sizes</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          You can also modify button sizes using ShadowKit’s built-in size classes. Choose between small, medium, or large buttons:
        </p>

        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <button className="btn btn-primary btn-sm px-4 py-2 rounded-lg text-white shadow-sm">
                Small Button
              </button>
              <p className="text-[var(--muted-foreground)] mt-2">.btn-sm</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn btn-primary btn-md px-6 py-3 rounded-xl text-white shadow-md">
                Medium Button
              </button>
              <p className="text-[var(--muted-foreground)] mt-2">.btn-md</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn btn-primary btn-lg px-8 py-4 rounded-2xl text-white shadow-lg">
                Large Button
              </button>
              <p className="text-[var(--muted-foreground)] mt-2">.btn-lg</p>
            </div>
          </div>
        </div>

        <pre className="bg-[#111111] text-white text-sm p-4 rounded-xl overflow-auto shadow-inner">
          <code>{`<button class="btn btn-primary btn-sm">Small Button</button>
<button class="btn btn-primary btn-md">Medium Button</button>
<button class="btn btn-primary btn-lg">Large Button</button>`}</code>
        </pre>
      </div>

      <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          📝 <strong>Note:</strong> ShadowKit’s button system is flexible and can be extended further with custom classes for colors, sizes, and hover effects. You can easily modify the button styles by changing the utility classes to match your project’s theme.
        </p>
      </div>
    </section>
  );
}
