import Sidebar from "@/components/Sidebar";

export default function DocsLayout({ children }) {
  return (
    <section className="relative bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="w-full lg:col-span-1 lg:sticky lg:top-20 h-fit">
            <Sidebar />
          </div>

          <div className="lg:col-span-4 space-y-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
