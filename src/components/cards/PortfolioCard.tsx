import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  id: number;
  name: string;
  description: string;
  previewImage: string;
  link: string;
  imageHint: string;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ name, description, previewImage, link, imageHint }) => {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-accent">
      <CardHeader className="p-0">
        <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name}`}>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={previewImage}
              alt={`Preview of ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <CardTitle className="font-headline text-xl md:text-2xl text-primary mb-2">{name}</CardTitle>
        <CardDescription className="text-card-foreground mb-4 flex-grow text-sm md:text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full transition-colors duration-300 hover:bg-accent hover:text-accent-foreground">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Visit Site
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
