export default function Card() {
  return (
    <section className="px-4 py-8 sm:py-12 md:px-8 lg:px-16 bg-background text-foreground space-y-12 md:space-y-16 rounded-3xl shadow-xl max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading">
          Card Components
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
          Flexible content containers with multiple layout options for displaying grouped information.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          {["Modular", "Responsive", "Accessible", "Customizable"].map((tag) => (
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
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">⚡ Quick Start</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Basic Structure</h4>
            <div className="card bg-card border border-muted rounded-xl shadow-sm p-6">
              <div className="card-header font-semibold pb-3 border-b border-muted">Header</div>
              <div className="card-body py-4 space-y-2">
                <h5 className="card-title text-lg font-bold">Card Title</h5>
                <p className="card-text text-muted-foreground">Some example text to build on the card content.</p>
              </div>
              <div className="card-footer pt-3 border-t border-muted text-sm text-muted-foreground">
                Footer
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Installation</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<!-- Via CDN -->
<link rel="stylesheet" 
  href="https://cdn.shadowkit.com/latest/cards.min.css">

/* Via npm */
npm install @shadowkit/cards`}</code>
            </pre>
            <h4 className="text-lg sm:text-xl font-semibold mt-6">Basic Usage</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
  <div class="card-footer">Footer</div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Card Variants Section */}
      <div className="space-y-8 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">🎨 Card Variants</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image Card */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Image Card</h4>
            <div className="card overflow-hidden rounded-xl border border-muted shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format" 
                className="card-img-top w-full h-48 object-cover" 
                alt="Sample" 
              />
              <div className="card-body p-4 sm:p-6">
                <h5 className="card-title font-bold">Image Card</h5>
                <p className="card-text text-muted-foreground mt-2">Card with image on top</p>
              </div>
            </div>
            <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card">
  <img src="image.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>`}</code>
            </pre>
          </div>

          {/* Horizontal Card */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Horizontal Card</h4>
            <div className="card flex flex-col md:flex-row rounded-xl border border-muted shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&auto=format" 
                className="md:w-1/3 h-48 md:h-auto object-cover" 
                alt="Sample" 
              />
              <div className="card-body p-4 sm:p-6">
                <h5 className="card-title font-bold">Horizontal</h5>
                <p className="card-text text-muted-foreground mt-2">Content beside image</p>
              </div>
            </div>
            <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card card-horizontal">
  <img src="image.jpg" class="card-img-left" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>`}</code>
            </pre>
          </div>

          {/* Overlay Card */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Image Overlay</h4>
            <div className="card relative rounded-xl overflow-hidden h-48">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Sample" 
              />
              <div className="card-img-overlay absolute inset-0 bg-black/40 p-4 sm:p-6 flex flex-col justify-end text-white">
                <h5 className="card-title font-bold">Overlay</h5>
                <p className="card-text mt-2">Text over image</p>
              </div>
            </div>
            <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card">
  <img src="image.jpg" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>`}</code>
            </pre>
          </div>

          {/* List Group Card */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">List Group</h4>
            <div className="card rounded-xl border border-muted shadow-sm">
              <div className="card-header p-4 sm:p-6 border-b border-muted font-semibold">
                Features
              </div>
              <ul className="list-group divide-y divide-muted">
                <li className="p-3 sm:p-4">Responsive Design</li>
                <li className="p-3 sm:p-4">Dark Mode</li>
                <li className="p-3 sm:p-4">Customizable</li>
              </ul>
              <div className="card-footer p-4 sm:p-6 border-t border-muted">
                <button className="text-primary">View All</button>
              </div>
            </div>
            <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card">
  <div class="card-header">Features</div>
  <ul class="list-group">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <div class="card-footer">Footer</div>
</div>`}</code>
            </pre>
          </div>

          {/* Outlined Card */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Outlined</h4>
            <div className="card card-outline border-2 border-dashed border-muted rounded-xl p-4 sm:p-6">
              <h5 className="card-title font-bold">Outlined Style</h5>
              <p className="card-text text-muted-foreground mt-2">Dashed border variant</p>
            </div>
            <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card card-outline">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>`}</code>
            </pre>
          </div>

          {/* Elevated Card */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Elevated</h4>
            <div className="card rounded-xl shadow-lg p-4 sm:p-6 bg-card">
              <h5 className="card-title font-bold">Elevated Card</h5>
              <p className="card-text text-muted-foreground mt-2">With stronger shadow</p>
            </div>
            <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card card-elevated">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Card Sizing Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">📏 Sizing Options</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Fixed Width Cards</h4>
            <div className="flex flex-wrap gap-4">
              <div className="card w-64 p-4 rounded-xl border border-muted">
                <h5 className="card-title font-bold">Fixed Width</h5>
                <p className="card-text text-muted-foreground mt-2">w-64 (256px)</p>
              </div>
              <div className="card w-80 p-4 rounded-xl border border-muted">
                <h5 className="card-title font-bold">Fixed Width</h5>
                <p className="card-text text-muted-foreground mt-2">w-80 (320px)</p>
              </div>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card w-64">
  <!-- Content -->
</div>

<div class="card w-80">
  <!-- Content -->
</div>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Responsive Cards</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-4 rounded-xl border border-muted">
                <h5 className="card-title font-bold">Flexible</h5>
                <p className="card-text text-muted-foreground mt-2">Adapts to container</p>
              </div>
              <div className="card p-4 rounded-xl border border-muted">
                <h5 className="card-title font-bold">Flexible</h5>
                <p className="card-text text-muted-foreground mt-2">Adapts to container</p>
              </div>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="card">
    <!-- Content -->
  </div>
  <div class="card">
    <!-- Content -->
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Card Groups Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">🧩 Card Groups</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Card Grid</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card p-4 rounded-xl border border-muted">
                  <h5 className="card-title font-bold">Card {i}</h5>
                  <p className="card-text text-muted-foreground mt-2">Grid item</p>
                </div>
              ))}
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <!-- More cards -->
</div>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Card Deck</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="card flex-1 p-4 rounded-xl border border-muted">
                  <h5 className="card-title font-bold">Card {i}</h5>
                  <p className="card-text text-muted-foreground mt-2">Equal height</p>
                </div>
              ))}
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="flex flex-col sm:flex-row gap-4">
  <div class="card flex-1">Card 1</div>
  <div class="card flex-1">Card 2</div>
</div>`}</code>
            </pre>
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
  --card-bg: var(--background);
  --card-border: 1px solid var(--border-color);
  --card-radius: 0.75rem;
  --card-padding: 1.5rem;
  --card-shadow: 0 1px 3px rgba(0,0,0,0.1);
}`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Custom Styles</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`.custom-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
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
              <li>Use semantic heading levels within cards</li>
              <li>Provide alt text for card images</li>
              <li>Ensure sufficient color contrast</li>
              <li>Make interactive cards keyboard-navigable</li>
              <li>Use ARIA attributes when appropriate</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Accessible Example</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="card" role="region" aria-labelledby="card1-title">
  <div class="card-header">
    <h2 id="card1-title">Card Title</h2>
  </div>
  <div class="card-body">
    <p>Accessible card content</p>
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="space-y-4 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">💡 Usage Tips</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Interactive Cards</h4>
            <div className="card hover:shadow-md transition-shadow cursor-pointer p-4">
              <h5 className="card-title font-bold">Hover Effect</h5>
              <p className="card-text text-muted-foreground mt-2">Add hover states</p>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Use hover: and focus: states for interactive cards
            </p>
          </div>
          
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Loading States</h4>
            <div className="card p-4">
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-full"></div>
                <div className="h-3 bg-muted rounded w-5/6"></div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Show loading states while content loads
            </p>
          </div>
          
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Empty States</h4>
            <div className="card p-4 text-center">
              <div className="text-muted-foreground">
                No items available
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Handle empty content gracefully
            </p>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-card border border-muted p-6 rounded-xl text-sm text-muted-foreground leading-relaxed">
        <p>
          <span className="font-semibold">📝 Note:</span> Cards are designed as flexible containers. Combine them with ShadowKit's spacing, typography, and color utilities to create any layout you need. For advanced use cases, you can extend the base card styles with custom CSS.
        </p>
      </div>
    </section>
  );
}