
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Existing Our Services section */}
      <div className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg shadow-lg bg-card">
              <h3 className="font-headline text-2xl font-semibold mb-3 text-primary">Custom Websites</h3>
              <p className="text-card-foreground">We craft stunning, high-performance websites tailored to your brand and business goals, ensuring a memorable user experience.</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-card">
              <h3 className="font-headline text-2xl font-semibold mb-3 text-primary">AI Solutions</h3>
              <p className="text-card-foreground">Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business.</p>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
    </>
  );
}
