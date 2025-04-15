export default function AboutSection() {
  return (
    <section className="relative bg-[var(--color-muted)] py-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--color-muted)] to-[var(--color-secondary)] opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-8 leading-tight tracking-tight">
          About ShadowKit
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-[var(--foreground)] leading-relaxed">
          ShadowKit is a UI toolkit designed to help developers build sleek, responsive, and customizable user interfaces faster.
          With utility-first classes and pre-built components, it makes your development process smooth and efficient.
        </p>
      </div>
    </section>
  );
}
