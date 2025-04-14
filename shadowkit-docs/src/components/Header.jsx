export default function Header() {
  return (
    <header className="flex justify-center items-center py-24 text-center bg-[var(--color-primary)] text-white">
      <div className="px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight">
          Welcome to <span className="text-[var(--background)]">ShadowKit</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/80">
          Build stunning and fast user interfaces with our customizable components.
        </p>
      </div>
    </header>
  );
}
