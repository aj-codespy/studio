
import type { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

export const metadata: Metadata = {
  title: 'Our Portfolio | Vanderbilt Vision',
  description: 'Explore a gallery of our finest web design and development projects. See how Vanderbilt Vision brings ideas to life with creativity and technology.',
  openGraph: {
    title: 'Vanderbilt Vision Portfolio',
    description: 'A showcase of our web design and AI solution projects.',
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <PortfolioSection />
    </div>
  );
}
