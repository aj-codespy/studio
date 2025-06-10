
import { caseStudies } from '@/data/caseStudies';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';

export function CaseStudiesSection() {
  // Helper function to generate a simple hint from the title
  const generateHint = (title: string): string => {
    const words = title.toLowerCase().replace(/[^a-z0-9\s]/gi, '').split(/\s+/);
    if (words.length > 1 && words[0] !== "a" && words[0] !== "the") return `${words[0]} ${words[1] || 'study'}`.slice(0, 20);
    if (words.length > 0 && words[0] !== "a" && words[0] !== "the") return `${words[0]} study`.slice(0,20);
    return "case study";
  }
  
  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary">
          Stories That Captivate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              id={study.id}
              title={study.title}
              summary={study.summary}
              style={study.style}
              imageHint={generateHint(study.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
