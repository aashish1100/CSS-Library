"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Your message has been sent! We’ll get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-[var(--background)] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-[var(--background-light)] p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] mb-6 text-center">
          Contact Us
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-8">
          We're the "Shadow Coders" team from GEHU, Bhimtal. Whether you want to collaborate, ask a question, or just say hello, feel free to reach out. We're here to help and excited to connect!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-[var(--foreground)] mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg border border-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg text-[var(--foreground)] mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg border border-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg text-[var(--foreground)] mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg border border-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300"
                placeholder="Write your message"
                rows="6"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-4 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="my-12 border-t border-[var(--color-muted)]" />

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
            Meet the Shadow Coders Team
          </h3>
          <p className="text-lg text-muted-foreground">
            We are a dedicated team from GEHU, Bhimtal, passionate about creating modern UIs with ShadowKit. Our mission is to deliver fast, customizable, and beautiful web solutions that help developers work smarter and more efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
