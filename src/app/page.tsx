
import { HeroSection } from '@/components/sections/HeroSection';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title, // Fallback to the main site title for home
    template: `%s | ${siteConfig.name}`, // Ensures "Vanderbilt Agency | Web & AI Excellence" is shown
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
      {/* Other sections like Portfolio, Case Studies, Testimonials will be added in subsequent parts or exist on their own pages. */}
    </>
  );
}
