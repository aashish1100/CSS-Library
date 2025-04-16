"use client";

import { Zap, Settings, Moon, Smartphone, Grid, MoveRight } from "lucide-react";

const SectionDivider = () => (
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-muted)] to-transparent my-24" />
);

export default function FeaturesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen py-24 px-6">
      <section className="text-center mb-24 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight leading-tight">
          Why Choose <span className="text-[var(--color-secondary)]">ShadowKit?</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Unlock the full potential of modern UI development with a toolkit designed for speed, flexibility, and beauty.
        </p>
      </section>

      <SectionDivider />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-[var(--color-muted)] border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] relative overflow-hidden backdrop-blur-lg"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-secondary)] opacity-10 rounded-full blur-2xl z-0" />

            <div className="relative z-10">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-heading font-semibold text-[var(--color-primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-[var(--foreground)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <SectionDivider />

      <section className="mt-32 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[var(--color-primary)]">
          Ready to build with style?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Dive into the docs or explore the component library to start building modern interfaces with ShadowKit.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/docs/introduction"
            className="px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:scale-[1.05] transition-transform"
          >
            Get Started
          </a>
          <a
            href="/docs/navbar"
            className="px-6 py-3 rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
          >
            Browse Components
          </a>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Fast Development",
    description:
      "Rapidly build UIs with utility-first classes and reusable components. No boilerplate, just productivity.",
    icon: Zap,
  },
  {
    title: "Fully Customizable",
    description:
      "Easily tailor every detail—from spacing to themes—to match your brand and vision effortlessly.",
    icon: Settings,
  },
  {
    title: "Dark Mode Ready",
    description:
      "Built-in theme toggling support. Fully adaptive color systems let your UI shine in any mode.",
    icon: Moon,
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first design principles ensure your layouts look stunning on every screen size.",
    icon: Smartphone,
  },
  {
    title: "Component Rich",
    description:
      "Access a growing library of polished, production-ready components for every common UI pattern.",
    icon: Grid,
  },
  {
    title: "Seamless Animations",
    description:
      "Smooth transitions and micro-interactions enhance user experience out of the box.",
    icon: MoveRight,
  },
];
