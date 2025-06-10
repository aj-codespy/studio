
"use client";

import Image from "next/image";

interface FeaturePanelProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  imagePosition?: "left" | "right";
}

const FeaturePanel: React.FC<FeaturePanelProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  imageHint,
  imagePosition = "left",
}) => {
  return (
    <div className="p-6 md:p-8 bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
        <div
          className={`relative aspect-square w-full h-auto max-h-[400px] md:max-h-full rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300 ${
            imagePosition === "right" ? "md:order-last" : "md:order-first"
          }`}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div
          className={`${
            imagePosition === "right" ? "md:order-first" : "md:order-last"
          }`}
        >
          <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4">
            {title}
          </h3>
          <p className="text-base md:text-lg text-card-foreground/90 leading-relaxed font-body">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function KeyFeaturesSection() {
  const features = [
    {
      title: "Beyond the Build: We Deliver Tangible, Lasting Value",
      description:
        "Your investment deserves more than just a website; it deserves a powerful asset that works tirelessly for you. At Vanderbilt Agency, we're obsessed with delivering measurable results. From strategic design that converts visitors into loyal customers, to AI solutions that streamline your operations and cut costs, every pixel and line of code is crafted with your success in mind. Partner with us for transparent processes, dedicated support, and a digital presence that provides exceptional return on investment, year after year.",
      imageUrl: "https://placehold.co/600x600.png",
      imageAlt: "Unmatched Value",
      imageHint: "business partnership investment",
      imagePosition: "left" as "left" | "right",
    },
    {
      title: "Ignite Growth & Dominate Your Market",
      description:
        "Ready to stop playing small? Our mind-blowing web and AI services are engineered for exponential growth. We don't just build platforms; we build profit engines. Imagine a website that captivates and converts 24/7, coupled with AI-driven marketing that targets your ideal clients with laser precision. We're talking about strategies that multiply your revenue, expand your reach, and leave your competition wondering what hit them. Let's turn your business into a money-making machine.",
      imageUrl: "https://placehold.co/600x600.png",
      imageAlt: "Explosive Growth",
      imageHint: "rocket graph success",
      imagePosition: "right" as "left" | "right",
    },
    {
      title: "Reclaim Your Time: AI-Powered Simplicity for Your Business",
      description:
        "Tired of juggling endless tasks? Imagine a business where complex operations run on autopilot, customer inquiries are handled intelligently around the clock, and your focus returns to what you love. Our AI solutions are designed to bring you unparalleled comfort and efficiency. We automate the mundane, streamline workflows, and provide you with intuitive tools that put you in control, without the overwhelm. Sit back, relax, and watch your business thrive, powered by intelligent automation.",
      imageUrl: "https://placehold.co/600x600.png",
      imageAlt: "AI-Powered Comfort",
      imageHint: "person relaxing automation",
      imagePosition: "left" as "left" | "right",
    },
  ];

  return (
    <section id="key-features" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-12 md:mb-16 text-primary">
          The Vanderbilt Advantage: Drive, Grow, Thrive
        </h2>

        <div className="space-y-12 md:space-y-16">
          {features.map((feature, index) => (
            <FeaturePanel
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
              imageHint={feature.imageHint}
              imagePosition={feature.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
