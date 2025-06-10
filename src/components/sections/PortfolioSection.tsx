import { portfolio } from '@/data/portfolio';
import { PortfolioCard } from '@/components/cards/PortfolioCard';

export function PortfolioSection() {
  // Helper function to generate a simple hint from the name
  const generateHint = (name: string): string => {
    const words = name.toLowerCase().split(' ');
    if (words.length > 1 && words[0] !== "a" && words[0] !== "the") return `${words[0]} ${words[1] || 'design'}`.slice(0, 20);
    if (words.length > 0 && words[0] !== "a" && words[0] !== "the") return `${words[0]} design`.slice(0,20);
    return "website design";
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary">
          Our Portfolio of Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              previewImage={`https://placehold.co/600x338.png`} // 16:9 aspect ratio
              link={item.link}
              imageHint={generateHint(item.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
