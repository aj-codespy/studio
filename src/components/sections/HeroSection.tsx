
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary via-secondary to-background py-12 md:py-24 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-20 opacity-50">
        <div className="absolute top-0 -left-1/4 w-full h-full md:w-3/4 md:h-3/4 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-1/4 w-full h-full md:w-3/4 md:h-3/4 bg-accent/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Crafting Digital Dreams for Small Businesses
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          Stunning websites and AI solutions to skyrocket your growth.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <Link href="/portfolio">
              <Rocket className="mr-2 h-5 w-5" />
              Explore Our Creations
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Optional: Add a very subtle overlay for text contrast if needed, or other effects */}
      {/* <div className="absolute inset-0 bg-black/5 -z-10"></div> */}

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
