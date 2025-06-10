
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary via-secondary to-background py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
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
      {/* Optional: Add subtle shapes or elements in the background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Example of a subtle background element - can be expanded or removed */}
        <div className="absolute -bottom-1/4 left-0 right-0 h-1/2 w-full skew-y-[-6deg] transform bg-background/10 opacity-50"></div>
      </div>
    </section>
  );
}
