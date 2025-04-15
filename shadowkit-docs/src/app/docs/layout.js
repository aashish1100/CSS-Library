import Sidebar from "@/components/Sidebar";

export default function DocsLayout({ children }) {
  return (
    <section className="relative bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <Sidebar />

          <div className="lg:col-span-3 space-y-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
