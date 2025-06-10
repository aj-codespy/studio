
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/cards/TestimonialCard';

export function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render section if no testimonials
  }

  // Duplicate testimonials for a seamless loop.
  // The animation moves by -50% of the total width, so we need to render the content twice.
  const marqueeItems = [...testimonials, ...testimonials];

  // Adjust animation duration as needed for visual speed. 
  // A longer duration means slower scrolling. 60s is a moderate speed.
  const animationClass = "animate-[marquee_60s_linear_infinite]";

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary">
          Words From Our Clients
        </h2>
        <div className="relative w-full overflow-hidden group"> {/* 'group' for hover pause effect */}
          <div 
            className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused]`}
          >
            {marqueeItems.map((testimonial, index) => (
              <div
                key={index}
                // Each card wrapper. Using a fixed width (w-96 is 384px).
                // p-3 adds padding around the card component for spacing.
                className="flex-none w-96 p-3" 
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatarHint={testimonial.avatarHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
