export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[var(--background)] text-center">
      <h2 className="text-4xl font-heading font-semibold mb-16 text-[var(--color-primary)]">
        Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {[
          {
            title: "Fast Development",
            description:
              "ShadowKit helps you rapidly develop UIs with pre-built components.",
          },
          {
            title: "Customizable",
            description:
              "Tailor every component to fit your unique design needs.",
          },
          {
            title: "Mobile-First",
            description:
              "Design for all screen sizes from the start with our mobile-first approach.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-[var(--color-muted)]/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
          >
            <h3 className="text-2xl font-heading font-semibold text-[var(--color-primary)] mb-4">
              {feature.title}
            </h3>
            <p className="text-[var(--foreground)] text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
