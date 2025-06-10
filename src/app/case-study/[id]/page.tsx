
import { caseStudies } from '@/data/caseStudies';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, HelpCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type CaseStudyType = (typeof caseStudies)[0];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const caseStudy = caseStudies.find(cs => cs.id.toString() === params.id);
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }
  return {
    title: `${caseStudy.title} | Case Study | Vanderbilt Agency`,
    description: caseStudy.summary,
    openGraph: {
        title: `${caseStudy.title} | Case Study`,
        description: caseStudy.summary,
        // Add a specific image if available, otherwise use a default
        // images: [{ url: caseStudy.image || 'https://example.com/default-og-case-study.jpg' }]
    }
  };
}

export async function generateStaticParams() {
  return caseStudies.map(cs => ({
    id: cs.id.toString(),
  }));
}

const BackButton = () => (
  <Button asChild variant="outline" className="group fixed top-20 left-4 md:left-8 z-50 bg-background/80 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm">
    <Link href="/case-studies" className="flex items-center">
      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back to Case Studies
    </Link>
  </Button>
);

const ContentRenderer: React.FC<{ content: string }> = ({ content }) => (
  <div className="space-y-4">
    {content.split('\\n\\n').map((paragraph, index) => (
      <p key={index} className="text-base md:text-lg leading-relaxed">
        {paragraph}
      </p>
    ))}
  </div>
);


export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies.find(cs => cs.id.toString() === params.id);

  if (!caseStudy) {
    notFound();
  }

  const imageHints: { [key: number]: string } = {
    1: "boutique e-commerce",
    2: "gym workflow",
    3: "cafe online ordering",
    4: "ai chatbot support",
    5: "consultancy website",
  };
  const currentImageHint = imageHints[caseStudy.id] || "project " + caseStudy.id;
  const placeholderBaseUrl = "https://placehold.co";


  if (caseStudy.style === 'style1') { // Epic Hero - Full-width image header, single-column text, blue accents.
    return (
      <div className="bg-background text-foreground min-h-screen">
        <BackButton />
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src={`${placeholderBaseUrl}/1600x900.png`}
            alt={caseStudy.title}
            fill
            className="object-cover"
            data-ai-hint={currentImageHint + " cinematic"}
            priority
          />
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center p-4">
            <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center">
              {caseStudy.title}
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <h2 className="font-headline text-2xl md:text-3xl text-primary mb-4">{caseStudy.title}</h2>
          <p className="text-muted-foreground mb-6 text-lg md:text-xl">{caseStudy.summary}</p>
          <article className="text-foreground/90">
            <ContentRenderer content={caseStudy.content} />
          </article>
        </div>
      </div>
    );
  }

  if (caseStudy.style === 'style2') { // Dual Narrative - Image left, text right, emerald highlights.
    return (
      <div className="bg-background text-foreground min-h-screen py-12 md:py-16 lg:py-24">
        <BackButton />
        <div className="container mx-auto px-4 mt-12 md:mt-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[70vh] rounded-lg overflow-hidden shadow-2xl order-1 md:order-none">
              <Image
                src={`${placeholderBaseUrl}/800x1000.png`}
                alt={caseStudy.title}
                fill
                className="object-cover"
                data-ai-hint={currentImageHint + " portrait"}
              />
            </div>
            <article className="order-2 md:order-none">
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-muted-foreground mb-6 text-lg md:text-xl">{caseStudy.summary}</p>
              <div className="text-foreground/90 prose prose-strong:text-emerald-600 dark:prose-strong:text-emerald-400">
                 <ContentRenderer content={caseStudy.content} />
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }

  if (caseStudy.style === 'style3') { // Immersive Drama - Text over a semi-transparent image, white text, dark gradient.
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center text-primary-foreground py-16 md:py-24">
        <BackButton />
        <Image
          src={`${placeholderBaseUrl}/1920x1080.png`}
          alt={caseStudy.title}
          fill
          className="object-cover -z-20"
          data-ai-hint={currentImageHint + " background"}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-black/70 to-secondary/80 -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl mt-12 md:mt-0">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {caseStudy.title}
          </h1>
          <p className="mb-8 text-lg md:text-xl opacity-90">{caseStudy.summary}</p>
          <div className="bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl text-left max-h-[50vh] overflow-y-auto">
            <ContentRenderer content={caseStudy.content} />
          </div>
        </div>
      </div>
    );
  }

  if (caseStudy.style === 'style4') { // Timeline Saga - Milestone-based layout (problem, solution, results), coral accents.
    const sections = [
      { title: "The Challenge", text: caseStudy.summary, icon: <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" /> },
      { title: "Our Solution", text: caseStudy.content.substring(0, Math.min(250, caseStudy.content.length)) + (caseStudy.content.length > 250 ? "..." : ""), icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" /> },
      { title: "Achieved Results", text: "The project successfully met its objectives, leading to significant improvements and positive outcomes.", icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" /> },
    ];
    
    return (
      <div className="bg-background text-foreground min-h-screen py-12 md:py-16 lg:py-24">
        <BackButton />
        <div className="container mx-auto px-4 mt-12 md:mt-0">
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-12 md:mb-16">
            {caseStudy.title}
          </h1>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2"></div>
            {sections.map((section, index) => (
              <div key={index} className="mb-10 md:mb-16 relative pl-12 md:pl-0 flex md:items-start">
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bg-accent rounded-full p-3 md:p-4 shadow-lg w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ring-4 ring-background absolute left-[-0.15rem] md:left-auto top-0">
                  {section.icon}
                </div>
                <div className={`w-full p-6 rounded-lg shadow-xl bg-card border border-border md:ml-0 ${index % 2 === 0 ? 'md:mr-[calc(50%_+_2rem)]' : 'md:ml-[calc(50%_+_2rem)]'}`}>
                  <h2 className="font-headline text-xl md:text-2xl text-accent mb-3">{section.title}</h2>
                  <p className="text-card-foreground text-sm md:text-base">{section.text}</p>
                </div>
              </div>
            ))}
            <div className={`mt-10 md:mt-16 p-6 rounded-lg shadow-xl bg-card border border-border md:ml-0 ${sections.length % 2 === 0 ? 'md:mr-[calc(50%_+_2rem)]' : 'md:ml-[calc(50%_+_2rem)]'}`}>
                <h3 className="font-headline text-xl md:text-2xl text-primary mb-3">The Full Story</h3>
                <ContentRenderer content={caseStudy.content} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (caseStudy.style === 'style5') { // Mosaic Story - Card-based sections, gradient backdrop for visual flair.
    const cardSections = [
      { title: "Project Overview", content: caseStudy.summary },
      { title: "Key Challenges", content: "The main hurdles involved addressing outdated systems and enhancing user engagement through innovative design and technology." },
      { title: "Strategic Approach", content: caseStudy.content.substring(0, Math.min(200, caseStudy.content.length)) + (caseStudy.content.length > 200 ? "..." : "") },
      { title: "Impact & Outcomes", content: "This strategic initiative resulted in a significant boost in performance metrics and client satisfaction." },
    ];
    return (
      <div className="bg-gradient-to-br from-primary via-secondary to-background text-foreground min-h-screen py-12 md:py-16 lg:py-24">
        <BackButton />
        <div className="container mx-auto px-4 mt-12 md:mt-0">
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-12">
            {caseStudy.title}
          </h1>
           <div className="relative w-full aspect-video max-w-3xl lg:max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl">
            <Image
                src={`${placeholderBaseUrl}/1200x675.png`}
                alt={caseStudy.title}
                fill
                className="object-cover"
                data-ai-hint={currentImageHint + " feature"}
              />
           </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {cardSections.map((card, index) => (
              <div key={index} className="bg-card/90 backdrop-blur-sm text-card-foreground p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <h2 className="font-headline text-xl md:text-2xl text-primary mb-3">{card.title}</h2>
                <p className="text-sm md:text-base">{card.content}</p>
              </div>
            ))}
             <div className="md:col-span-2 bg-card/90 backdrop-blur-sm text-card-foreground p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h2 className="font-headline text-xl md:text-2xl text-primary mb-3">The Full Narrative</h2>
                <ContentRenderer content={caseStudy.content} />
              </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback default style
  return (
    <div className="bg-background text-foreground min-h-screen py-12 md:py-16">
      <BackButton />
      <div className="container mx-auto px-4 mt-12 md:mt-0 max-w-3xl">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{caseStudy.title}</h1>
        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image src={`${placeholderBaseUrl}/800x450.png`} alt={caseStudy.title} fill className="object-cover" data-ai-hint={currentImageHint}/>
        </div>
        <p className="text-muted-foreground mb-6 text-lg md:text-xl">{caseStudy.summary}</p>
        <article className="text-foreground/90">
           <ContentRenderer content={caseStudy.content} />
        </article>
      </div>
    </div>
  );
}

