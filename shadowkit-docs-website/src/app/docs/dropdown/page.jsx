export default function Dropdown() {
    return (
      <section className="px-4 py-8 sm:py-12 md:px-8 lg:px-16 bg-background text-foreground space-y-12 md:space-y-16 rounded-3xl shadow-xl max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading">
            Dropdown Components
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Customizable dropdown menus with multiple styles and interaction options for navigation and actions.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
            {["Accessible", "Responsive", "Customizable", "Dark Mode"].map((tag) => (
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
              <div className="relative inline-block group">
                <button className="dropdown-toggle bg-card border border-muted px-4 py-2 rounded-md hover:bg-muted transition-colors">
                  Open Menu
                </button>
                <ul className="dropdown-menu absolute z-10 mt-2 w-56 bg-popover shadow-lg rounded-md border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Profile</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Settings</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Logout</a></li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
                <code>{`<div class="dropdown group">
    <button class="dropdown-toggle">Menu</button>
    <ul class="dropdown-menu">
      <li><a href="#">Profile</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </div>`}</code>
              </pre>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Installation</h4>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
                <code>{`<!-- Via CDN -->
  <link rel="stylesheet" 
    href="https://cdn.shadowkit.com/latest/dropdowns.min.css">
  
  /* Via npm */
  npm install @shadowkit/dropdowns`}</code>
              </pre>
              <h4 className="text-lg sm:text-xl font-semibold mt-6">JavaScript</h4>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
                <code>{`import { Dropdown } from '@shadowkit/dropdowns';
  
  // Initialize all dropdowns
  Dropdown.init();`}</code>
              </pre>
            </div>
          </div>
        </div>
  
        {/* Dropdown Variants Section */}
        <div className="space-y-8 border-t border-muted pt-10">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">🎨 Dropdown Variants</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Default Dropdown */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Default</h4>
              <div className="relative inline-block group">
                <button className="dropdown-toggle bg-card border border-muted px-4 py-2 rounded-md hover:bg-muted transition-colors">
                  Default Menu
                </button>
                <ul className="dropdown-menu absolute z-10 mt-2 w-56 bg-popover shadow-lg rounded-md border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Item 1</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Item 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Item 3</a></li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<div class="dropdown group">
    <button class="dropdown-toggle">Default</button>
    <ul class="dropdown-menu">
      <!-- Menu items -->
    </ul>
  </div>`}</code>
              </pre>
            </div>
  
            {/* Outlined Dropdown */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Outlined</h4>
              <div className="relative inline-block group">
                <button className="dropdown-toggle-outlined bg-transparent border-2 border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors">
                  Outlined
                </button>
                <ul className="dropdown-menu absolute z-10 mt-2 w-56 bg-popover shadow-lg rounded-md border border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Edit</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Rename</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Delete</a></li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<div class="dropdown-outlined group">
    <button class="dropdown-toggle-outlined">Outlined</button>
    <ul class="dropdown-menu">
      <!-- Menu items -->
    </ul>
  </div>`}</code>
              </pre>
            </div>
  
            {/* Glass Dropdown */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Glass</h4>
              <div className="relative inline-block group">
                <button className="dropdown-toggle-glass bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
                  Glass
                </button>
                <ul className="dropdown-menu-glass absolute z-10 mt-2 w-56 bg-white/10 backdrop-blur-md shadow-xl rounded-md border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li><a href="#" className="block px-4 py-2 hover:bg-white/20">Blur Item 1</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-white/20">Blur Item 2</a></li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<div class="dropdown-glass group">
    <button class="dropdown-toggle-glass">Glass</button>
    <ul class="dropdown-menu-glass">
      <!-- Menu items -->
    </ul>
  </div>`}</code>
              </pre>
            </div>
  
            {/* Pill Dropdown */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Pill</h4>
              <div className="relative inline-block group">
                <button className="dropdown-toggle-pill bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Pill Menu
                </button>
                <ul className="dropdown-menu absolute z-10 mt-2 w-56 bg-popover shadow-lg rounded-2xl border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted rounded-xl">Option A</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted rounded-xl">Option B</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted rounded-xl">Option C</a></li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<div class="dropdown-pill group">
    <button class="dropdown-toggle-pill">Pill</button>
    <ul class="dropdown-menu">
      <!-- Menu items -->
    </ul>
  </div>`}</code>
              </pre>
            </div>
          </div>
        </div>
  
        {/* Positioning Section */}
        <div className="space-y-6 border-t border-muted pt-10">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">📍 Positioning</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Direction Classes</h4>
              <div className="flex flex-wrap gap-4">
                <div className="relative inline-block group">
                  <button className="dropdown-toggle bg-card border border-muted px-4 py-2 rounded-md">
                    Dropdown Right
                  </button>
                  <ul className="dropdown-menu-right absolute z-10 left-full ml-2 top-0 w-40 bg-popover shadow-lg rounded-md border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                    <li><a href="#" className="block px-4 py-2 hover:bg-muted">Right Item 1</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-muted">Right Item 2</a></li>
                  </ul>
                </div>
                <div className="relative inline-block group">
                  <button className="dropdown-toggle bg-card border border-muted px-4 py-2 rounded-md">
                    Dropdown Up
                  </button>
                  <ul className="dropdown-menu-up absolute z-10 bottom-full mb-2 w-40 bg-popover shadow-lg rounded-md border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                    <li><a href="#" className="block px-4 py-2 hover:bg-muted">Up Item 1</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-muted">Up Item 2</a></li>
                  </ul>
                </div>
              </div>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<!-- Right-aligned -->
  <ul class="dropdown-menu-right">
    <!-- Menu items -->
  </ul>
  
  <!-- Up-aligned -->
  <ul class="dropdown-menu-up">
    <!-- Menu items -->
  </ul>`}</code>
              </pre>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Centered Dropdown</h4>
              <div className="relative inline-block group text-center">
                <button className="dropdown-toggle bg-card border border-muted px-4 py-2 rounded-md mx-auto">
                  Centered Menu
                </button>
                <ul className="dropdown-menu-center absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-popover shadow-lg rounded-md border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Centered Item 1</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Centered Item 2</a></li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<div class="dropdown group text-center">
    <button class="dropdown-toggle">Centered</button>
    <ul class="dropdown-menu-center">
      <!-- Menu items -->
    </ul>
  </div>`}</code>
              </pre>
            </div>
          </div>
        </div>
  
        {/* Menu Items Section */}
        <div className="space-y-6 border-t border-muted pt-10">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">🍱 Menu Items</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Dividers & Headers</h4>
              <div className="relative inline-block group">
                <button className="dropdown-toggle bg-card border border-muted px-4 py-2 rounded-md">
                  Menu with Sections
                </button>
                <ul className="dropdown-menu absolute z-10 mt-2 w-56 bg-popover shadow-lg rounded-md border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li className="dropdown-header px-4 py-2 text-sm font-semibold">Account</li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Profile</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Settings</a></li>
                  <li className="dropdown-divider border-t border-muted my-1"></li>
                  <li className="dropdown-header px-4 py-2 text-sm font-semibold">Actions</li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-muted">Logout</a></li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<ul class="dropdown-menu">
    <li class="dropdown-header">Section</li>
    <li><a href="#">Item</a></li>
    <li class="dropdown-divider"></li>
  </ul>`}</code>
              </pre>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Icons & Badges</h4>
              <div className="relative inline-block group">
                <button className="dropdown-toggle bg-card border border-muted px-4 py-2 rounded-md">
                  Enhanced Items
                </button>
                <ul className="dropdown-menu absolute z-10 mt-2 w-64 bg-popover shadow-lg rounded-md border border-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-muted">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between px-4 py-2 hover:bg-muted">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </div>
                      <span className="badge bg-primary text-white text-xs px-2 py-1 rounded-full">New</span>
                    </a>
                  </li>
                </ul>
              </div>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<ul class="dropdown-menu">
    <li>
      <a href="#" class="flex items-center">
        <svg class="icon">...</svg>
        Item with Icon
      </a>
    </li>
    <li>
      <a href="#" class="flex justify-between">
        <span>Item</span>
        <span class="badge">New</span>
      </a>
    </li>
  </ul>`}</code>
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
                <li>Use <code>aria-haspopup="true"</code> on toggle buttons</li>
                <li>Include <code>aria-expanded</code> state attributes</li>
                <li>Ensure keyboard navigation (Tab, Enter, Escape)</li>
                <li>Provide focus styles for interactive elements</li>
                <li>Use semantic HTML structure</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Accessible Example</h4>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`<div class="dropdown">
    <button 
      class="dropdown-toggle"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Menu
    </button>
    <ul 
      class="dropdown-menu"
      role="menu"
      aria-labelledby="dropdownButton"
    >
      <li role="none">
        <a href="#" role="menuitem">Item 1</a>
      </li>
    </ul>
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
    --dropdown-bg: var(--popover);
    --dropdown-border: 1px solid var(--border-color);
    --dropdown-radius: 0.5rem;
    --dropdown-shadow: 0 2px 8px rgba(0,0,0,0.1);
    --dropdown-item-padding: 0.5rem 1rem;
    --dropdown-item-hover: var(--muted);
  }`}</code>
              </pre>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold">Animation Options</h4>
              <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
                <code>{`/* Fade in */
  .dropdown-menu {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  /* Slide down */
  .dropdown-menu-slide {
    transform: translateY(-10px);
    transition: all 0.2s ease;
  }
  
  /* Scale in */
  .dropdown-menu-scale {
    transform: scale(0.95);
    transition: all 0.2s ease;
  }`}</code>
              </pre>
            </div>
          </div>
        </div>
  
        {/* Note Section */}
        <div className="bg-card border border-muted p-6 rounded-xl text-sm text-muted-foreground leading-relaxed">
          <p>
            <span className="font-semibold">📝 Note:</span> For complex dropdowns with nested menus or mega menus, consider using the <code>dropdown-mega</code> class which provides additional styling for multi-column layouts. Always test dropdown functionality on both desktop and mobile devices.
          </p>
        </div>
      </section>
    );
  }