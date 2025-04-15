"use client"
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
    // Placeholder for form submission logic (API call, etc.)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-[var(--background)] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-[var(--background-light)] p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-[var(--color-primary)] mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
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
              className="w-full p-3 rounded-lg border border-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
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
              className="w-full p-3 rounded-lg border border-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
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
              className="w-full p-3 rounded-lg border border-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300"
              placeholder="Write your message"
              rows="6"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-all duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[var(--foreground)] text-sm">
            Or you can reach us at{" "}
            <span className="text-[var(--color-primary)]">contact@shadowkit.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
