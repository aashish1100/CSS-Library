export default function ContactSection() {
  return (
    <section className="relative bg-[var(--color-primary)] text-white py-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] via-[#00000033] to-[var(--color-secondary)] opacity-20 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
          Contact Us
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-10">
          Have questions or need support? We’d love to hear from you.
        </p>

        <form className="max-w-xl mx-auto space-y-6 text-left">
          <div className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white text-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition duration-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white text-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition duration-300"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 bg-white text-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-4 mt-4 bg-[var(--color-secondary)] text-white rounded-xl font-medium shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
