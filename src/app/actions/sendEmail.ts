
'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/emails/ContactEmailTemplate';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const recipientEmail = 'ajayush2301@gmail.com'; 
// For testing, Resend's onboarding@resend.dev can be used as a sender.
// For production, you must verify a domain with Resend (e.g., your agency's domain)
// and use an email address from that verified domain (e.g., noreply@yourverifieddomain.com).
const senderEmail = 'Vanderbilt Agency Form <onboarding@resend.dev>';


export async function sendEmailAction(data: ContactFormValues): Promise<{ success: boolean; message: string; error?: unknown }> {
  // Check for API key first
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not configured. Email cannot be sent.');
    return { 
      success: false, 
      message: 'Email service is not configured correctly. Please ensure the API key is set and contact support if the issue persists.' 
    };
  }

  // Instantiate Resend here, now that we know the key exists.
  const resend = new Resend(process.env.RESEND_API_KEY);

  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      subject: 'New Contact Form Submission - Vanderbilt Agency',
      react: ContactEmailTemplate({ name, email, message }),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text version
    });

    if (resendError) {
      console.error('Resend API Error:', resendError);
      return { success: false, message: 'Failed to send message. Please try again later.', error: resendError };
    }

    return { success: true, message: 'Message sent successfully! We will be in touch soon.' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.', error };
  }
}
