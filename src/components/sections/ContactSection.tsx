
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

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data); // In a real app, you'd send this data to a backend
    setIsSubmitted(true);
    form.reset();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll be in touch soon!",
      variant: "default",
    });
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

        {isSubmitted && !form.formState.isSubmitting ? (
          <div className="text-center p-8 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
            <p>Your message has been sent successfully. We'll be in touch soon.</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8 bg-card rounded-xl shadow-2xl border border-border">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-primary"><User className="mr-2 h-4 w-4 text-accent" />Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} className="bg-background/70 focus:ring-accent" />
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
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70 focus:ring-accent" />
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
                      <Textarea placeholder="Tell us about your project or inquiry..." rows={5} {...field} className="bg-background/70 focus:ring-accent" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
