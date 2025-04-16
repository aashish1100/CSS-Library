"use client";

import { motion } from "framer-motion";
import { Zap, Sliders, Smartphone } from "lucide-react";

const features = [
  {
    title: "Fast Development",
    icon: <Zap className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "ShadowKit helps you rapidly develop UIs with pre-built components designed to scale beautifully.",
  },
  {
    title: "Customizable",
    icon: <Sliders className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Tailor every component with utility classes or override styles to fit your brand perfectly.",
  },
  {
    title: "Mobile-First",
    icon: <Smartphone className="w-8 h-8 text-[var(--color-primary)]" />,
    description:
      "Design with responsiveness in mind — all components adapt smoothly to any device.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-12"
        >
          Why ShadowKit?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[var(--card)]/70 backdrop-blur-lg p-10 rounded-3xl shadow-md border border-white/10 hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
