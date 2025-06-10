'use server';

/**
 * @fileOverview An AI agent for generating SEO-optimized meta descriptions for new pages.
 *
 * - generateMetaDescription - A function that generates a meta description for a given page content.
 * - GenerateMetaDescriptionInput - The input type for the generateMetaDescription function.
 * - GenerateMetaDescriptionOutput - The return type for the generateMetaDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMetaDescriptionInputSchema = z.object({
  pageTitle: z.string().describe('The title of the page.'),
  pageContent: z.string().describe('The content of the page.'),
});
export type GenerateMetaDescriptionInput = z.infer<typeof GenerateMetaDescriptionInputSchema>;

const GenerateMetaDescriptionOutputSchema = z.object({
  metaDescription: z
    .string()
    .describe(
      'The SEO-optimized meta description for the page, limited to 160 characters.'
    ),
});
export type GenerateMetaDescriptionOutput = z.infer<typeof GenerateMetaDescriptionOutputSchema>;

export async function generateMetaDescription(
  input: GenerateMetaDescriptionInput
): Promise<GenerateMetaDescriptionOutput> {
  return generateMetaDescriptionFlow(input);
}

const generateMetaDescriptionPrompt = ai.definePrompt({
  name: 'generateMetaDescriptionPrompt',
  input: {schema: GenerateMetaDescriptionInputSchema},
  output: {schema: GenerateMetaDescriptionOutputSchema},
  prompt: `You are an SEO expert. Generate a compelling and SEO-optimized meta description for the following page.

  The meta description should be concise, engaging, and accurately reflect the page content while encouraging users to click through from search engine results.  It must be limited to 160 characters.

  Page Title: {{{pageTitle}}}
  Page Content: {{{pageContent}}}

  Meta Description:`,
});

const generateMetaDescriptionFlow = ai.defineFlow(
  {
    name: 'generateMetaDescriptionFlow',
    inputSchema: GenerateMetaDescriptionInputSchema,
    outputSchema: GenerateMetaDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateMetaDescriptionPrompt(input);
    return output!;
  }
);
