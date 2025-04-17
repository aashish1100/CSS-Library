export default function Button() {
  return (
    <section className="px-4 py-8 sm:py-12 md:px-8 lg:px-16 bg-background text-foreground space-y-12 md:space-y-16 rounded-3xl shadow-xl max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading">
          Button Components
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
          A collection of sleek, accessible, and highly customizable button styles for all interaction needs.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          {["16 Variants", "Fully Accessible", "Customizable", "Responsive"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 sm:px-4 sm:py-2 bg-primary text-white rounded-full text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">Overview</h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          ShadowKit provides <strong>16 uniquely styled modular buttons</strong> with consistent spacing, typography, and built-in accessibility features.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Basic Usage</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<!-- HTML Button -->
<button class="lumos-button">Primary Action</button>

<!-- Anchor as Button -->
<a href="#" class="echo-button">Secondary Link</a>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Key Features</h4>
            <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-2">
              <li>Built-in hover, focus, and active states</li>
              <li>Consistent sizing and spacing</li>
              <li>Works with any clickable element</li>
              <li>Dark mode compatible</li>
              <li>RTL language support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">📦 Installation</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Via CDN</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<!-- Add to your HTML head -->
<link rel="stylesheet" 
  href="https://cdn.shadowkit.com/latest/buttons.min.css">`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Via Package Manager</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`# Using npm
npm install @shadowkit/buttons

# Using yarn
yarn add @shadowkit/buttons`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants Section */}
      <div className="space-y-8 border-t border-muted pt-10">
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">🎨 Button Variants</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Each variant serves specific use cases with appropriate visual weight and semantic meaning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              class: "lumos-button", 
              name: "Primary", 
              desc: "Main call-to-action buttons",
              example: "Submit Form"
            },
            { 
              class: "echo-button", 
              name: "Secondary", 
              desc: "Alternative actions",
              example: "Learn More"
            },
            { 
              class: "blaze-button", 
              name: "Danger", 
              desc: "Destructive actions",
              example: "Delete Account"
            },
            { 
              class: "aura-button", 
              name: "Success", 
              desc: "Positive actions",
              example: "Confirm Order"
            },
            { 
              class: "pulse-button", 
              name: "Info", 
              desc: "Informational actions",
              example: "View Details"
            },
            { 
              class: "mist-button", 
              name: "Ghost", 
              desc: "Minimal appearance",
              example: "Cancel"
            },
            { 
              class: "noir-button", 
              name: "Dark", 
              desc: "Dark theme buttons",
              example: "Night Mode"
            },
            { 
              class: "glow-button", 
              name: "Glow", 
              desc: "Attention-grabbing",
              example: "Limited Offer"
            },
          ].map((btn) => (
            <div key={btn.class} className="flex flex-col gap-4 bg-card p-4 sm:p-6 rounded-xl border border-muted">
              <div className="flex flex-col items-center gap-3">
                <button className={`${btn.class} w-full`}>{btn.example}</button>
                <code className="text-xs text-muted-foreground self-start">.{btn.class}</code>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">{btn.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{btn.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Buttons Section */}
      <div className="space-y-8 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">✨ Special Buttons</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              class: "glyph-button", 
              name: "Icon Button", 
              desc: "Buttons with icons only",
              example: "🔍"
            },
            { 
              class: "drip-button", 
              name: "Loading", 
              desc: "Shows loading state",
              example: "Processing..."
            },
            { 
              class: "stretch-button w-full", 
              name: "Full Width", 
              desc: "Block-level buttons",
              example: "Continue"
            },
            { 
              class: "flip-button", 
              name: "Toggle", 
              desc: "State-changing buttons",
              example: "Toggle Theme"
            },
            { 
              class: "frost-button", 
              name: "Frosted", 
              desc: "Glass morphism effect",
              example: "View All"
            },
            { 
              class: "shimmer-button", 
              name: "Shimmer", 
              desc: "Animated gradient",
              example: "New Feature"
            },
          ].map((btn) => (
            <div key={btn.class} className="flex flex-col gap-4 bg-card p-4 sm:p-6 rounded-xl border border-muted">
              <div className="flex flex-col items-center gap-3">
                <button className={`${btn.class} w-full`}>{btn.example}</button>
                <code className="text-xs text-muted-foreground self-start">.{btn.class}</code>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">{btn.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{btn.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sizing Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">📏 Sizing Options</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Predefined Sizes</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button className="lumos-button text-xs px-3 py-1.5 rounded">XS</button>
              <button className="lumos-button text-sm px-4 py-2 rounded-md">SM</button>
              <button className="lumos-button text-base px-6 py-3 rounded-lg">MD</button>
              <button className="lumos-button text-lg px-8 py-4 rounded-xl">LG</button>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<!-- Extra Small -->
<button class="lumos-button text-xs">XS</button>

<!-- Large -->
<button class="lumos-button text-lg">LG</button>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Custom Sizing</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Combine with Tailwind utilities for precise control:
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="lumos-button px-12 py-1 rounded-full">Pill</button>
              <button className="lumos-button px-4 py-8">Tall</button>
              <button className="lumos-button w-32 h-32 rounded-full">Circle</button>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<!-- Custom shaped buttons -->
<button class="lumos-button px-12 py-1 rounded-full">
  Pill Button
</button>

<button class="lumos-button w-32 h-32 rounded-full">
  Circle
</button>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* States Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">🔘 Button States</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold">Default</h4>
            <button className="lumos-button w-full">Normal</button>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Standard interactive state
            </p>
          </div>
          
          <div className="space-y-3 bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold">Hover</h4>
            <button className="lumos-button w-full hover:scale-105 transition-transform">Hover Me</button>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Visual feedback on mouseover
            </p>
          </div>
          
          <div className="space-y-3 bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold">Focus</h4>
            <button className="lumos-button w-full focus:ring-4 focus:ring-primary/50">Focus Me</button>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Keyboard navigation indicator
            </p>
          </div>
          
          <div className="space-y-3 bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold">Disabled</h4>
            <button className="lumos-button w-full opacity-50 cursor-not-allowed">Disabled</button>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Non-interactive state
            </p>
          </div>
        </div>
      </div>

      {/* Customization Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">🎨 Customization</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">CSS Variables</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`:root {
  --button-primary-bg: var(--color-primary);
  --button-primary-text: white;
  --button-radius: 0.5rem;
  --button-padding-x: 1.5rem;
  --button-padding-y: 0.75rem;
  --button-hover-brightness: 1.05;
}`}</code>
            </pre>
            <p className="text-sm sm:text-base text-muted-foreground">
              Override these in your CSS to theme all buttons globally.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Individual Customization</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`.custom-button {
  background: linear-gradient(to right, #ff8a00, #da1b60);
  box-shadow: 0 4px 15px rgba(218, 27, 96, 0.4);
  border: none;
  transition: all 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(218, 27, 96, 0.6);
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Accessibility Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">♿ Accessibility</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Best Practices</h4>
            <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-2">
              <li>Always provide descriptive button text</li>
              <li>Ensure sufficient color contrast (4.5:1 minimum)</li>
              <li>Include focus styles for keyboard navigation</li>
              <li>Use ARIA attributes when needed (aria-pressed for toggles)</li>
              <li>Indicate loading/disabled states clearly</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Accessible Examples</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<!-- Button with ARIA -->
<button class="lumos-button" 
        aria-label="Close modal"
        aria-expanded="false">
  ×
</button>

<!-- Toggle Button -->
<button class="flip-button" 
        aria-pressed="false"
        data-state="inactive">
  Toggle Theme
</button>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="space-y-4 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">💡 Usage Tips</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Icon Integration</h4>
            <button className="lumos-button flex items-center justify-center gap-2 w-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              Download
            </button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Combine with inline SVGs or icon libraries
            </p>
          </div>
          
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Button Groups</h4>
            <div className="flex divide-x divide-muted/50 overflow-hidden rounded-lg border border-muted">
              <button className="echo-button flex-1">Previous</button>
              <button className="echo-button flex-1">Next</button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Group related actions together
            </p>
          </div>
          
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Loading States</h4>
            <button className="drip-button w-full">Processing...</button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Provide feedback during async actions
            </p>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-card border border-muted p-6 rounded-xl text-sm text-muted-foreground leading-relaxed">
        <p>
          <span className="font-semibold">📝 Note:</span> All buttons include proper contrast ratios and accessibility features out of the box. 
          When customizing, ensure you maintain WCAG 2.1 AA compliance for text contrast and interactive states.
        </p>
      </div>
    </section>
  );
}