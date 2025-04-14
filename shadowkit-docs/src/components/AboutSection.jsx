export default function AboutSection() {
    return (
      <section className="bg-[var(--color-muted)] text-[var(--foreground)] py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-[var(--color-primary)] mb-6">
            About ShadowKit
          </h2>
  
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[var(--foreground)]">
            ShadowKit is a UI toolkit designed to help developers build sleek, responsive, and customizable user interfaces faster.
            With utility-first classes and pre-built components, it makes your development process smooth and efficient.
          </p>
        </div>
      </section>
    );
  }
  