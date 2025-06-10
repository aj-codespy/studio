
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/cards/TestimonialCard';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary">
          Words From Our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0,3).map((testimonial) => ( // Displaying 3 testimonials as per requirement
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarHint={testimonial.avatarHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
