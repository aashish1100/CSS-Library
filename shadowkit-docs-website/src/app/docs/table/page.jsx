export default function TableDocs() {
  return (
    <section className="px-4 py-8 sm:py-12 md:px-8 lg:px-16 bg-background text-foreground space-y-12 md:space-y-16 max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading">
          Table Components
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
          Responsive, accessible table styles with built-in pagination and sorting capabilities.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          {["Responsive", "Sortable", "Pagination", "Dark Mode"].map((tag) => (
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
            <h4 className="text-lg sm:text-xl font-semibold">Basic Table Structure</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Installation</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm md:text-base font-mono">
              <code>{`<!-- Via CDN -->
<link rel="stylesheet" 
  href="https://cdn.shadowkit.com/latest/tables.min.css">

/* Via npm */
npm install @shadowkit/tables`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Table Variants Section */}
      <div className="space-y-8 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">🎨 Table Variants</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Classic Table */}
          <div className="border border-muted rounded-xl overflow-hidden">
            <div className="p-4 sm:p-6 bg-card">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Classic Table</h4>
              <div className="overflow-x-auto">
                <table className="table--classic w-full">
                  <thead>
                    <tr>
                      <th className="sortable">Name</th>
                      <th className="sortable">Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex Johnson</td>
                      <td>alex@example.com</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td>Sam Wilson</td>
                      <td>sam@example.com</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-muted p-3 sm:p-4">
              <pre className="text-xs sm:text-sm overflow-x-auto font-mono">
                <code>{`<table class="table--classic">
  <thead>
    <tr>
      <th class="sortable">Column</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
</table>`}</code>
              </pre>
            </div>
          </div>

          {/* Shadowed Table */}
          <div className="border border-muted rounded-xl overflow-hidden">
            <div className="p-4 sm:p-6 bg-card">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Shadowed Table</h4>
              <div className="overflow-x-auto">
                <table className="table--shadowed w-full">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Laptop</td>
                      <td>$999</td>
                      <td>In Stock</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>$699</td>
                      <td>Out of Stock</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-muted p-3 sm:p-4">
              <pre className="text-xs sm:text-sm overflow-x-auto font-mono">
                <code>{`<table class="table--shadowed">
  <!-- Table content -->
</table>`}</code>
              </pre>
            </div>
          </div>

          {/* Striped Table */}
          <div className="border border-muted rounded-xl overflow-hidden">
            <div className="p-4 sm:p-6 bg-card">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Striped Table</h4>
              <div className="overflow-x-auto">
                <table className="table--striped w-full">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>admin</td>
                      <td>Administrator</td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>user1</td>
                      <td>Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-muted p-3 sm:p-4">
              <pre className="text-xs sm:text-sm overflow-x-auto font-mono">
                <code>{`<table class="table--striped">
  <!-- Table content -->
</table>`}</code>
              </pre>
            </div>
          </div>

          {/* Hover Table */}
          <div className="border border-muted rounded-xl overflow-hidden">
            <div className="p-4 sm:p-6 bg-card">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Hover Table</h4>
              <div className="overflow-x-auto">
                <table className="table--hover w-full">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Event</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-06-15</td>
                      <td>Conference</td>
                      <td>New York</td>
                    </tr>
                    <tr>
                      <td>2023-07-20</td>
                      <td>Workshop</td>
                      <td>San Francisco</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-muted p-3 sm:p-4">
              <pre className="text-xs sm:text-sm overflow-x-auto font-mono">
                <code>{`<table class="table--hover">
  <!-- Table content -->
</table>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Tables */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">📱 Responsive Tables</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Horizontal Scrolling</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Wrap your table in a container with overflow-x-auto for mobile devices:
            </p>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="overflow-x-auto">
  <table class="table">
    <!-- Wide table content -->
  </table>
</div>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Stacked Layout</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              For small screens, use the stacked modifier:
            </p>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<table class="table table--stacked">
  <!-- Table content will stack on mobile -->
</table>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Sorting & Features */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">🔍 Sorting & Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Sortable Columns</h4>
            <div className="overflow-x-auto">
              <table className="table--classic w-full">
                <thead>
                  <tr>
                    <th className="sortable sortable--asc">Name (A-Z)</th>
                    <th className="sortable">Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>2023-01-15</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>2023-02-20</td>
                    <td>View</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<th class="sortable">Click to Sort</th>
<th class="sortable sortable--asc">Sorted Asc</th>
<th class="sortable sortable--desc">Sorted Desc</th>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Row Actions</h4>
            <div className="overflow-x-auto">
              <table className="table--hover w-full">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product A</td>
                    <td>$19.99</td>
                    <td>
                      <button className="text-primary">Edit</button>
                      <button className="text-danger ml-2">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<td>
  <button class="text-primary">Edit</button>
  <button class="text-danger">Delete</button>
</td>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="space-y-6 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">🔢 Pagination</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Basic Pagination</h4>
            <div className="flex justify-center items-center gap-2">
              <button className="pagination-button">Previous</button>
              <button className="pagination-button active">1</button>
              <button className="pagination-button">2</button>
              <button className="pagination-button">3</button>
              <button className="pagination-button">Next</button>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="table-pagination">
  <button class="pagination-button">Previous</button>
  <button class="pagination-button active">1</button>
  <button class="pagination-button">Next</button>
</div>`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Advanced Pagination</h4>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                Showing 1 to 10 of 100 entries
              </div>
              <div className="flex items-center gap-2">
                <select className="pagination-select">
                  <option>10 per page</option>
                  <option>25 per page</option>
                  <option>50 per page</option>
                </select>
                <div className="flex gap-1">
                  <button className="pagination-button">←</button>
                  <button className="pagination-button active">1</button>
                  <button className="pagination-button">2</button>
                  <button className="pagination-button">→</button>
                </div>
              </div>
            </div>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<div class="table-pagination-advanced">
  <div>Showing 1 to 10 of 100</div>
  <select class="pagination-select">
    <option>10 per page</option>
  </select>
  <div class="pagination-buttons">
    <!-- Page buttons -->
  </div>
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
  --table-border: 1px solid var(--border-color);
  --table-padding: 0.75rem;
  --table-header-bg: var(--bg-muted);
  --table-stripe-bg: rgba(0,0,0,0.02);
  --table-hover-bg: rgba(0,0,0,0.05);
}`}</code>
            </pre>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Dark Mode</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`@media (prefers-color-scheme: dark) {
  :root {
    --table-header-bg: #2a2a2a;
    --table-stripe-bg: rgba(255,255,255,0.02);
    --table-hover-bg: rgba(255,255,255,0.05);
  }
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
              <li>Use <code>&lt;th scope="col"&gt;</code> for column headers</li>
              <li>Use <code>&lt;th scope="row"&gt;</code> for row headers</li>
              <li>Add <code>aria-sort</code> to sortable columns</li>
              <li>Provide screen reader text for pagination</li>
              <li>Ensure sufficient color contrast</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Accessible Example</h4>
            <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
              <code>{`<table aria-label="User data table">
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">
        Name
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John</th>
    </tr>
  </tbody>
</table>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="space-y-4 border-t border-muted pt-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">💡 Usage Tips</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Empty States</h4>
            <div className="overflow-x-auto">
              <table className="table--hover w-full">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" className="text-center py-8 text-muted-foreground">
                      No products found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Always handle empty table states gracefully
            </p>
          </div>
          
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Loading State</h4>
            <div className="overflow-x-auto">
              <table className="table--hover w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" className="text-center py-8">
                      <div className="animate-pulse flex justify-center">
                        <div className="h-2 bg-muted rounded w-3/4"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Show loading indicators during data fetch
            </p>
          </div>
          
          <div className="bg-card p-4 sm:p-6 rounded-xl border border-muted">
            <h4 className="font-semibold mb-2">Responsive Cells</h4>
            <div className="overflow-x-auto">
              <table className="table--hover w-full">
                <thead>
                  <tr>
                    <th>Device</th>
                    <th className="hidden sm:table-cell">Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mobile</td>
                    <td className="hidden sm:table-cell">375×812</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Hide less important columns on mobile
            </p>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-card border border-muted p-6 rounded-xl text-sm text-muted-foreground leading-relaxed">
        <p>
          <span className="font-semibold">📝 Note:</span> For optimal performance with large datasets, 
          consider implementing virtual scrolling or server-side pagination. 
          The included pagination works best with client-side datasets under 10,000 rows.
        </p>
      </div>
    </section>
  );
}