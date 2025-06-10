
import type { FC } from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission from Vanderbilt Agency</h1>
    <p>
      You have received a new message from your website contact form.
    </p>
    <h2>Sender Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
    </ul>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
