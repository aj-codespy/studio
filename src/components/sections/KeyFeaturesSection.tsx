
"use client";

import Image from "next/image";

interface FeaturePanelProps {
  title: string;
  description: string[]; // Changed to string array for bullet points
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  imagePosition?: "left" | "right";
  isLast?: boolean;
}

const FeaturePanel: React.FC<FeaturePanelProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  imageHint,
  imagePosition = "left",
  isLast = false,
}) => {
  return (
    // Removed individual card styling from here
    <div className="p-6 md:p-8">
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
          <ul className="space-y-2 text-sm md:text-base text-card-foreground/90 leading-relaxed font-body">
            {description.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="flex-shrink-0 h-5 w-5 text-primary mr-3 mt-0.5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!isLast && <hr className="my-8 md:my-12 border-border/60" />}
    </div>
  );
};

export function KeyFeaturesSection() {
  const features = [
    {
      title: "Beyond the Build: We Deliver Tangible, Lasting Value",
      description: [
        "Strategic design that converts visitors.",
        "AI solutions streamlining operations & costs.",
        "Transparent processes & dedicated support.",
        "Digital presence with exceptional ROI.",
      ],
      imageUrl: "https://placehold.co/600x600.png",
      imageAlt: "Unmatched Value",
      imageHint: "business partnership investment",
      imagePosition: "left" as "left" | "right",
    },
    {
      title: "Ignite Growth & Dominate Your Market",
      description: [
        "Web platforms engineered for profit.",
        "AI-driven marketing with laser precision.",
        "Strategies to multiply revenue & reach.",
        "Outperform competition, build market dominance.",
      ],
      imageUrl: "https://placehold.co/600x600.png",
      imageAlt: "Explosive Growth",
      imageHint: "rocket graph success",
      imagePosition: "right" as "left" | "right",
    },
    {
      title: "Reclaim Your Time: AI-Powered Simplicity for Your Business",
      description: [
        "Automate complex tasks, regain focus.",
        "Intelligent customer inquiry handling 24/7.",
        "Streamlined workflows, intuitive control.",
        "Relax as your business thrives efficiently.",
      ],
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

        {/* This div now acts as the single card container for all features */}
        <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
          {features.map((feature, index) => (
            <FeaturePanel
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
              imageHint={feature.imageHint}
              imagePosition={feature.imagePosition}
              isLast={index === features.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
