"use client";

import { Zap, Settings, Moon, Smartphone, Grid, MoveRight } from 'lucide-react'; // Using Zap and Grid icons

export default function FeaturesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen py-20 px-6">
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 text-[var(--color-primary)]">
          Why Choose <span className="text-[var(--color-secondary)]">ShadowKit?</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the unique features that make ShadowKit a powerful and flexible UI toolkit.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group bg-[var(--color-muted)] rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.03] cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--color-accent)] opacity-10 rounded-full blur-2xl z-0" />
            <div className="relative z-10">
              <div className="text-[var(--color-primary)] mb-4">
                <feature.icon className="w-12 h-12 mx-auto text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--foreground)] text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

const features = [
  {
    title: "Fast Development",
    description: "Rapidly build UIs with utility-first classes and reusable components.",
    icon: Zap,
  },
  {
    title: "Fully Customizable",
    description: "Easily tailor components and themes to fit your unique design style.",
    icon: Settings,
  },
  {
    title: "Dark Mode Ready",
    description: "Seamless light/dark mode switching with fully themeable colors.",
    icon: Moon,
  },
  {
    title: "Responsive Design",
    description: "Built mobile-first to work on any device out of the box.",
    icon: Smartphone,
  },
  {
    title: "Component Rich",
    description: "From navbars to modals, get access to a wide library of essential components.",
    icon: Grid,
  },
  {
    title: "Seamless Animations",
    description: "Enjoy smooth animations and transitions for a polished user experience.",
    icon: MoveRight,
  },
];
