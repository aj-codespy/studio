
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User } from 'lucide-react';
import { sendEmailAction } from '@/app/actions/sendEmail';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmailAction(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
          variant: "default",
        });
        form.reset();
      } else {
        console.error("Submission error:", result.error);
        let errorMessage = result.message;
        if (typeof result.error === 'object' && result.error !== null && 'message' in result.error) {
             // Attempt to get a more specific error message if available
             const specificError = result.error as { message?: string };
             if (specificError.message) errorMessage = specificError.message;
        }
        toast({
          title: "Submission Failed",
          description: errorMessage || "An unknown error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Catch block error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-card/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-center mb-4 text-primary">
          Let's Build Something Amazing
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Have a project in mind or just want to learn more? Drop us a line!
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8 bg-card rounded-xl shadow-2xl border border-border">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-primary"><User className="mr-2 h-4 w-4 text-accent" />Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Full Name" {...field} className="bg-background/70 focus:ring-accent transition-colors duration-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-primary"><Mail className="mr-2 h-4 w-4 text-accent" />Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70 focus:ring-accent transition-colors duration-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-primary"><MessageSquare className="mr-2 h-4 w-4 text-accent" />Your Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your project or inquiry..." rows={5} {...field} className="bg-background/70 focus:ring-accent transition-colors duration-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              disabled={isSubmitting || form.formState.isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
