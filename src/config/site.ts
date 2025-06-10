
export const siteConfig = {
  name: "Vanderbilt Agency",
  title: "Vanderbilt Vision | Web & AI Solutions", // Updated title to include Vision
  description: "Transforming small businesses with stunning websites and AI automation.",
  url: "https://example.com", // Replace with actual URL when deployed
  ogImage: "https://placehold.co/1200x630.png?text=Vanderbilt+Vision", // Placeholder OG Image
  links: {
    linkedin: "https://www.linkedin.com", // Placeholder, update with actual link
    instagram: "https://www.instagram.com", // Placeholder, update with actual link
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  footerText: `© ${new Date().getFullYear()} Vanderbilt Vision. All rights reserved.`, // Updated name
};

export type SiteConfig = typeof siteConfig;
