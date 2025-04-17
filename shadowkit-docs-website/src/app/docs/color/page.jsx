export default function Color() {
  return (
    <section className="space-y-8 px-4 py-10 md:py-16 md:px-12 bg-[var(--background)] text-[var(--foreground)] rounded-2xl">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">
          Color System in ShadowKit
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-foreground)] leading-relaxed max-w-4xl mx-auto md:mx-0">
          ShadowKit provides a flexible, class-based color system that makes theming easy and consistent across your entire project. Utilize pre-defined utility classes to style your components or create custom themes with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Color Palette Section */}
        <div className="space-y-6 bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl">
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">🎨 Color Palette</h3>
          <p className="text-base text-[var(--muted-foreground)]">
            ShadowKit includes a comprehensive color palette with semantic naming:
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Primary Colors */}
            <div className="space-y-2">
              <div className="h-12 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-medium">
                Primary
              </div>
              <p className="text-sm text-center">--color-primary</p>
            </div>
            
            {/* Secondary Colors */}
            <div className="space-y-2">
              <div className="h-12 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center text-white font-medium">
                Secondary
              </div>
              <p className="text-sm text-center">--color-secondary</p>
            </div>
            
            {/* Success Colors */}
            <div className="space-y-2">
              <div className="h-12 rounded-lg bg-[var(--color-success)] flex items-center justify-center text-white font-medium">
                Success
              </div>
              <p className="text-sm text-center">--color-success</p>
            </div>
            
            {/* Danger Colors */}
            <div className="space-y-2">
              <div className="h-12 rounded-lg bg-[var(--color-danger)] flex items-center justify-center text-white font-medium">
                Danger
              </div>
              <p className="text-sm text-center">--color-danger</p>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-6 bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl">
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">⚡ Quick Examples</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-[var(--foreground)] mb-2">Text Colors:</h4>
              <pre className="bg-[#111111] text-white text-xs sm:text-sm p-3 rounded-lg overflow-x-auto">
                <code>{`<p className="text-[var(--color-primary)]">Primary text</p>
<p className="text-[var(--color-danger)]">Danger text</p>`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-[var(--foreground)] mb-2">Background Colors:</h4>
              <pre className="bg-[#111111] text-white text-xs sm:text-sm p-3 rounded-lg overflow-x-auto">
                <code>{`<div className="bg-[var(--color-primary)]">Primary background</div>
<div className="bg-[var(--color-success)]">Success background</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Usage Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">📚 Detailed Usage</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl">
            <h4 className="text-xl font-medium text-[var(--foreground)] mb-3">1. Text Colors</h4>
            <p className="text-base text-[var(--muted-foreground)] mb-4">
              Apply color to text using these utility classes:
            </p>
            <div className="space-y-2">
              <p className="text-[var(--color-primary)]">.text-[var(--color-primary)]</p>
              <p className="text-[var(--color-secondary)]">.text-[var(--color-secondary)]</p>
              <p className="text-[var(--color-success)]">.text-[var(--color-success)]</p>
              <p className="text-[var(--color-danger)]">.text-[var(--color-danger)]</p>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl">
            <h4 className="text-xl font-medium text-[var(--foreground)] mb-3">2. Background Colors</h4>
            <p className="text-base text-[var(--muted-foreground)] mb-4">
              Apply background colors using these classes:
            </p>
            <div className="space-y-2">
              <div className="p-3 rounded bg-[var(--color-primary)] text-white">.bg-[var(--color-primary)]</div>
              <div className="p-3 rounded bg-[var(--color-secondary)] text-white">.bg-[var(--color-secondary)]</div>
              <div className="p-3 rounded bg-[var(--color-success)] text-white">.bg-[var(--color-success)]</div>
            </div>
          </div>
        </div>
      </div>

      {/* Customization Section */}
      <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl space-y-4">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">🎨 Customizing Colors</h3>
        <p className="text-base text-[var(--muted-foreground)]">
          You can easily customize the color variables in your CSS or through JavaScript:
        </p>
        
        <pre className="bg-[#111111] text-white text-xs sm:text-sm p-4 rounded-lg overflow-x-auto">
          <code>{`:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-success: #10b981;
  --color-danger: #ef4444;
}`}</code>
        </pre>

        <div className="p-4 bg-[var(--muted)] rounded-lg">
          <p className="text-sm text-[var(--muted-foreground)]">
            <span className="font-semibold">💡 Pro Tip:</span> Use HSL color values for easier theme adjustments (hue, saturation, lightness).
          </p>
        </div>
      </div>

      <div className="bg-[var(--card)] border border-[var(--muted)] p-6 rounded-xl">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          📝 <strong>Note:</strong> ShadowKit's color system is fully compatible with dark mode. The colors automatically adjust based on the user's preferred color scheme when using CSS variables.
        </p>
      </div>
    </section>
  );
}