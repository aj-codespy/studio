
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarHint: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({ quote, author, role, avatarHint }) => {
  const placeholderAvatarUrl = "https://placehold.co/100x100.png";
  // Simple way to get initials if no image/avatar system is in place
  const authorInitials = author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <CardHeader className="pb-4">
        <Quote className="h-8 w-8 text-accent" />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="mb-4 flex-grow text-base italic text-card-foreground/90 md:text-lg">
          “{quote}”
        </p>
        <div className="mt-auto flex items-center space-x-3 border-t border-border pt-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={placeholderAvatarUrl} alt={author} data-ai-hint={avatarHint} />
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
