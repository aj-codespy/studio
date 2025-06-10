
import type { Metadata } from 'next';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';

export const metadata: Metadata = {
  title: 'Case Studies | Vanderbilt Vision',
  description: 'Read detailed stories of how Vanderbilt Vision has helped businesses succeed with innovative web solutions and AI-driven strategies. Discover our impact.',
  openGraph: {
    title: 'Vanderbilt Vision Case Studies',
    description: 'Success stories from our clients, showcasing our web and AI solutions.',
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-card/30">
      <CaseStudiesSection />
    </div>
  );
}
