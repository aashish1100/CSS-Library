export default function TableDocs() {
  return (
    <section className="px-4 py-12 md:px-16 md:py-20 bg-[var(--background)] text-[var(--foreground)] space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">Table Styles & Pagination</h2>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
          A set of table styles and pagination utilities that are modular and customizable. It includes the Classic Table, Shadowed Table, Striped Table, and Pagination utilities for flexible and responsive design options.
        </p>
      </div>

      <div className="space-y-10">
        <h3 className="text-2xl font-semibold">1. Table Styles</h3>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold">1.1 Classic Table</h4>
          <p className="text-[var(--muted-foreground)]">
            The Classic Table is a clean and simple table design ideal for displaying tabular data. It includes features like hover effects on rows and sortable columns.
          </p>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`<table class="table--classic">
  <thead>
    <tr>
      <th class="sortable">Column 1</th>
      <th class="sortable">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
    <tr>
      <td>Data 3</td>
      <td>Data 4</td>
    </tr>
  </tbody>
</table>`}</code>
            </pre>
          </div>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`.table--classic {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

.table--classic th, .table--classic td {
  padding: var(--spacing-sm);
  text-align: left;
  border: 1px solid var(--border-color);
}

.table--classic th.sortable:hover {
  cursor: pointer;
  color: var(--accent);
}

.table--classic tbody tr:hover {
  background-color: var(--bg-muted);
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold">1.2 Shadowed Table</h4>
          <p className="text-[var(--muted-foreground)]">
            The Shadowed Table has a shadow effect for a modern, elevated design. It includes rounded borders, subtle hover effects, and a soft background color for the header.
          </p>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`<table class="table--shadowed">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
    <tr>
      <td>Data 3</td>
      <td>Data 4</td>
    </tr>
  </tbody>
</table>`}</code>
            </pre>
          </div>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`.table--shadowed {
  width: 100%;
  border-spacing: 0;
  font-size: 1rem;
  border-radius: var(--radius-md);
  overflow: hidden;
  background-color: var(--bg-surface);
  box-shadow: var(--shadow-md);
}

.table--shadowed th, .table--shadowed td {
  padding: var(--spacing-md);
  text-align: left;
}

.table--shadowed thead {
  background-color: var(--bg-muted);
}

.table--shadowed tbody tr {
  transition: background-color 0.2s ease;
}

.table--shadowed tbody tr:hover {
  background-color: #f0f0f0;}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold">1.3 Striped Table</h4>
          <p className="text-[var(--muted-foreground)]">
            The Striped Table has alternating row colors for better readability. Ideal for long datasets needing visual separation.
          </p>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`<table class="table--striped">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
    <tr>
      <td>Data 3</td>
      <td>Data 4</td>
    </tr>
  </tbody>
</table>`}</code>
            </pre>
          </div>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`.table--striped {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

.table--striped th, .table--striped td {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.table--striped tbody tr:nth-child(even) {
  background-color: var(--bg-muted);
}

.table--striped th {
  background-color: var(--bg-surface);
  color: var(--text-heading);
  font-weight: bold;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">2. Table Pagination</h3>
          <p className="text-[var(--muted-foreground)]">
            The Pagination component allows easy navigation through large datasets in tables by providing paginated navigation controls.
          </p>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`<div class="table-pagination">
  <button class="pagination-button">Previous</button>
  <span>Page 1 of 10</span>
  <button class="pagination-button">Next</button>
</div>`}</code>
            </pre>
          </div>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`.table-pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: var(--spacing-md);
  gap: var(--spacing-sm);
}

.pagination-button {
  background-color: var(--accent);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.2s ease;
}

.pagination-button:hover {
  background-color: var(--accent-hover);
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">3. Dark Mode Support</h3>
          <p className="text-[var(--muted-foreground)]">
            The table styles and pagination buttons include native Dark Mode Support, adjusting the colors based on the user's system preferences.
          </p>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`@media (prefers-color-scheme: dark) {
  :root {
    --bg-surface: #1e1e1e;
    --bg-muted: #2a2a2a;
    --text-base: #f0f0f0;
    --text-heading: #ffffff;
    --border-color: #3a3a3a;
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">4. Customization</h3>
          <ul className="text-sm text-[var(--muted-foreground)] list-disc list-inside">
            <li><code>--font-base</code>: Font base</li>
            <li><code>--spacing-sm, --spacing-md, --spacing-lg</code>: Spacing</li>
            <li><code>--border-color</code>: Border color</li>
            <li><code>--accent, --accent-hover</code>: Accent colors</li>
            <li><code>--shadow-sm, --shadow-md</code>: Shadow effects</li>
          </ul>
          <div className="bg-[#111] p-4 rounded-lg overflow-x-auto shadow-inner">
            <pre className="text-white text-sm">
              <code>{`:root {
  --accent: #4a90e2; /* New Accent Color */
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
