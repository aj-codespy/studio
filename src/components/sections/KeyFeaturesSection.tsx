
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Award, Rocket, Cpu } from "lucide-react";

export function KeyFeaturesSection() {
  return (
    <section id="key-features" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary">
          The Vanderbilt Advantage: Drive, Grow, Thrive
        </h2>

        <Tabs defaultValue="value" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto md:h-12">
            <TabsTrigger value="value" className="py-3 md:py-2 text-base md:text-lg flex items-center justify-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
              <Award className="h-5 w-5" /> Unmatched Value
            </TabsTrigger>
            <TabsTrigger value="growth" className="py-3 md:py-2 text-base md:text-lg flex items-center justify-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
              <Rocket className="h-5 w-5" /> Explosive Growth
            </TabsTrigger>
            <TabsTrigger value="comfort" className="py-3 md:py-2 text-base md:text-lg flex items-center justify-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
              <Cpu className="h-5 w-5" /> AI-Powered Ease
            </TabsTrigger>
          </TabsList>

          <TabsContent value="value">
            <div className="p-6 md:p-8 bg-card rounded-xl shadow-2xl border border-border">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-square w-full h-auto max-h-[400px] md:max-h-full rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://placehold.co/600x600.png"
                    alt="Unmatched Value"
                    fill
                    className="object-cover"
                    data-ai-hint="business partnership investment"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4 flex items-center">
                    <Award className="h-7 w-7 mr-3 text-accent" />
                    Beyond the Build: We Deliver Tangible, Lasting Value
                  </h3>
                  <p className="text-base md:text-lg text-card-foreground/90 leading-relaxed">
                    Your investment deserves more than just a website; it deserves a powerful asset that works tirelessly for you. At Vanderbilt Agency, we&apos;re obsessed with delivering measurable results. From strategic design that converts visitors into loyal customers, to AI solutions that streamline your operations and cut costs, every pixel and line of code is crafted with your success in mind. Partner with us for transparent processes, dedicated support, and a digital presence that provides exceptional return on investment, year after year.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="growth">
            <div className="p-6 md:p-8 bg-card rounded-xl shadow-2xl border border-border">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-last relative aspect-square w-full h-auto max-h-[400px] md:max-h-full rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://placehold.co/600x600.png"
                    alt="Explosive Growth"
                    fill
                    className="object-cover"
                    data-ai-hint="rocket graph success"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="md:order-first">
                  <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4 flex items-center">
                    <Rocket className="h-7 w-7 mr-3 text-accent" />
                    Ignite Growth & Dominate Your Market
                  </h3>
                  <p className="text-base md:text-lg text-card-foreground/90 leading-relaxed">
                    Ready to stop playing small? Our mind-blowing web and AI services are engineered for exponential growth. We don&apos;t just build platforms; we build profit engines. Imagine a website that captivates and converts 24/7, coupled with AI-driven marketing that targets your ideal clients with laser precision. We&apos;re talking about strategies that multiply your revenue, expand your reach, and leave your competition wondering what hit them. Let&apos;s turn your business into a money-making machine.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comfort">
            <div className="p-6 md:p-8 bg-card rounded-xl shadow-2xl border border-border">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-square w-full h-auto max-h-[400px] md:max-h-full rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://placehold.co/600x600.png"
                    alt="AI-Powered Comfort"
                    fill
                    className="object-cover"
                    data-ai-hint="person relaxing automation"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4 flex items-center">
                    <Cpu className="h-7 w-7 mr-3 text-accent" />
                    Reclaim Your Time: AI-Powered Simplicity for Your Business
                  </h3>
                  <p className="text-base md:text-lg text-card-foreground/90 leading-relaxed">
                    Tired of juggling endless tasks? Imagine a business where complex operations run on autopilot, customer inquiries are handled intelligently around the clock, and your focus returns to what you love. Our AI solutions are designed to bring you unparalleled comfort and efficiency. We automate the mundane, streamline workflows, and provide you with intuitive tools that put you in control, without the overwhelm. Sit back, relax, and watch your business thrive, powered by intelligent automation.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
