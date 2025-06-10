
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  id: number;
  title: string;
  summary: string;
  // image prop from data is currently ignored, using placeholders
  style: string; // To potentially influence card style if needed, or for other uses
  imageHint: string;
}

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ id, title, summary, imageHint }) => {
  const placeholderImageUrl = "https://placehold.co/600x400.png";

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-accent">
      <CardHeader className="p-0">
        <Link href={`/case-study/${id}`} aria-label={`Read more about ${title}`}>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={placeholderImageUrl}
              alt={`Preview of ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <CardTitle className="font-headline text-xl md:text-2xl text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-card-foreground mb-4 flex-grow text-sm md:text-base">{summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full transition-colors duration-300 hover:bg-accent hover:text-accent-foreground">
          <Link href={`/case-study/${id}`}>
            Read Story
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
