
import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Vanderbilt Vision',
  description: 'Get in touch with Vanderbilt Vision to discuss your web design and AI solution needs. We are ready to help you transform your business.',
  openGraph: {
    title: 'Contact Vanderbilt Vision',
    description: 'Reach out to discuss your project ideas or learn more about our services.',
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16 lg:py-24">
      <ContactSection />
    </div>
  );
}
