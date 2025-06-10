
export const siteConfig = {
  name: "Vanderbilt Agency",
  title: "Vanderbilt Agency | Web & AI Excellence",
  description: "Transforming businesses with custom websites and AI automation.",
  url: "https://example.com", // Replace with actual URL when deployed
  ogImage: "https://placehold.co/1200x630.png?text=Vanderbilt+Agency", // Placeholder OG Image
  links: {
    linkedin: "https://www.linkedin.com", // Placeholder, update with actual link
    instagram: "https://www.instagram.com", // Placeholder, update with actual link
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/content-editor", label: "Content Editor" },
    { href: "/#contact", label: "Contact" },
  ],
  footerText: "© 2025 Vanderbilt Agency. All rights reserved.",
};

export type SiteConfig = typeof siteConfig;
