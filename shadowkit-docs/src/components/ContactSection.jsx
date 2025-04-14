export default function ContactSection() {
    return (
      <section className="bg-[var(--color-primary)] text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6">
            Contact Us
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--foreground)] mb-8">
            Have questions or need support? Get in touch with us!
          </p>
  
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50"
            />
  
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50"
            />
  
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-white text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50"
            ></textarea>
  
            <button
              type="submit"
              className="w-full p-4 bg-[var(--color-secondary)] text-white rounded-md shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  