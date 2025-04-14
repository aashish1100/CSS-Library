export default function FeaturesSection() {
    return (
      <section className="py-24 bg-[var(--background)] text-center">
        <h2 className="text-4xl font-heading font-semibold mb-12 text-[var(--color-primary)]">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <div className="bg-[var(--color-muted)] p-10 rounded-xl shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-heading font-semibold text-[var(--color-primary)] mb-4">
              Fast Development
            </h3>
            <p className="text-[var(--foreground)] text-lg">
              ShadowKit helps you rapidly develop UIs with pre-built components.
            </p>
          </div>
  
          <div className="bg-[var(--color-muted)] p-10 rounded-xl shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-heading font-semibold text-[var(--color-primary)] mb-4">
              Customizable
            </h3>
            <p className="text-[var(--foreground)] text-lg">
              Tailor every component to fit your unique design needs.
            </p>
          </div>
  
          <div className="bg-[var(--color-muted)] p-10 rounded-xl shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-heading font-semibold text-[var(--color-primary)] mb-4">
              Mobile-First
            </h3>
            <p className="text-[var(--foreground)] text-lg">
              Design for all screen sizes from the start with our mobile-first approach.
            </p>
          </div>
        </div>
      </section>
    );
  }
  